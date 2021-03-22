import Section from '../section';
import Swal from 'sweetalert2';

export default class Relationships extends Section {
    
    constructor() {
        super();
        this.loadLocalStorageData();
        this.buildModelSelect();
        this.enableSortable();
    }

    bindEvents() {
        $("body").on('laragenerator.table.active', this, this.bodyOnTableActive);
        $("#add-relationship-btn").on('click', this, this.addRelationshipBtnClick);
        $('.relationships-section-tbody').on('click', '.btn-danger', this, this.onBtnDangerClick);
        $(".relationships-section-tbody").on('sortupdate', this.tableOnSortUpdate.bind(this));
    }

    enableSortable() {
        $(".relationships-section-tbody").sortable({
            revert: true,
            // make the width work correctly in the table
            helper: function (e, ui) {
                ui.children().each(function () {
                    $(this).width($(this).width());
                })
                return ui;
            }
        });
    }

    loadLocalStorageData() {
        const tableId = this.getTableId();

        this.loadData(tableId);
    }

    loadData(tableId) {
        const projectId = this.getProjectId();
        const $tBody = $(".relationships-section-tbody");
        const identifier = `relationships_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage == null) {
            $tBody.html("");
            return false;
        }

        const data = {
            relationships: JSON.parse(existingLocalStorage)
        };

        const render = this.getRender('relationships-row-multiple-template', data);

        // destroy the sortable to prevent bugs
        // $("#tables-list").sortable('destroy');
        $tBody.html(render);
    }

    buildModelSelect() {
        const data = {
            models: this.retrieveModelNames()
        };

        const render = this.getRender('foreign-model-select-template', data);

        $("#foreign-model-input").html(render);
    }

    retrieveModelNames() {
        const _this = this;
        const modelNames = [];
        $('#tables-list .table-title').each(function (index, element) {
            const tableName = $(element).html();

            modelNames.push(_this.getModel(tableName));
        });

        return modelNames;
    }

    getModel(tableName) {
        tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

        if (tableName.charAt(tableName.length - 1) == "s") {
            tableName = tableName.slice(0, -1);
        }

        return tableName;
    }

    addRelationshipBtnClick(event) {
        const _this = event.data;
        const $this = $(this);
        const $parent = $this.parents('tr');
        const tableId = _this.getTableId();

        const $method = $parent.find('#relationship-title-input');
        const $type = $parent.find('#relationship-type-input');
        const $foreignModel = $parent.find('#foreign-model-input');
        
        // make sure the relationship methods are unique
        const projectId = _this.getProjectId();
        const projectIdentifier = `relationships_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(projectIdentifier);
        if (existingLocalStorage != null) {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            for (let i=0; i<existingLocalStorage.length; i++) {
                let value = existingLocalStorage[i];
                if (value.method == $method.val()) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'The method already exists!',
                    });
                    return false;
                }
            }
        }

        if ($method.val().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The method needs to be at least one character long!',
            });

            return false;
        }

        if ($type.val() == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to select a type!',
            });

            return false;
        }

        if ($foreignModel.val() == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to select a foreign model!',
            });

            return false;
        }

        let regex = new RegExp("^[a-z]{1}[a-z_0-9]*$");
        if (! regex.test($method.val())) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The method needs to be lowercase alpha numeric and should start with a letter!',
            });
            return false;
        }

        if (tableId == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to add at least one table before adding table fields!',
            });
            return false;
        }

        const data = {
            method: $method.val(),
            type: $type.val(),
            foreignModel: $foreignModel.val(),
        }

        // add data to localStorage
        _this.addDataToLocalStorage(data);

        // get renderHTML
        const renderHTML = _this.getRender('relationships-row-template', data);

        $(".relationships-section-tbody").sortable('destroy');
        $(".relationships-section-tbody").append(renderHTML);

        // reset the inputs
        $method.val('');
        $type.val('');
        $foreignModel.val('');

        _this.enableSortable();
    }

    addDataToLocalStorage(data) {
        const projectId = this.getProjectId();
        const tableId = this.getTableId();
        const identifier = `relationships_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage == null) {
            localStorage.setItem(identifier, JSON.stringify([data]));
        } else {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            existingLocalStorage.push(data);
            localStorage.setItem(identifier, JSON.stringify(existingLocalStorage));
        }
    }

    onBtnDangerClick(event) {
        const _this = event.data;
        const $this = $(this);
        const $parent = $this.parents('tr');
        const method = $parent.find('.method').html();

        // remove the item from localStorage
        const projectId = _this.getProjectId();
        const tableId = _this.getTableId();
        const identifier = `relationships_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);
        if (existingLocalStorage != null) {
            existingLocalStorage = JSON.parse(existingLocalStorage);

            const newData = existingLocalStorage.filter((item) => {
                return item.method !== method;
            });

            localStorage.setItem(`relationships_${projectId}_${tableId}`, JSON.stringify(newData));
        }

        // remove the item from DOM
        $parent.remove();
    }

    tableOnSortUpdate(event, ui) {
        // update the data position in localStorage
        const projectId = this.getProjectId();
        const tableId = this.getTableId();

        const identifier = `relationships_${projectId}_${tableId}`;
        const $rows = $(".relationships-section-tbody tr");
        const data = [];

        $rows.each(function (index) {
            let $row = $(this);
            data.push({
                method: $row.find('.method').html(),
                type: $row.find('.type').html(),
                foreignModel: $row.find('.foreign-model').html(),
            });
        });
        localStorage.setItem(identifier, JSON.stringify(data));
    }

    bodyOnTableActive(event, data) {
        const _this = event.data;

        _this.buildModelSelect();
        _this.loadData(data.tableTitle);
    }
}
