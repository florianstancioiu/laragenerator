import Section from '../section';
import Swal from 'sweetalert2';

export default class TableFields extends Section {

    constructor() {
        super();
        this.loadLocalStorageData();
        this.enableSortable();
    }

    bindEvents() {
        $("#table-fields-wrapper tbody").on('click', '.btn-danger', this, this.onBtnDangerClick);
        $("#table-fields-add-btn").on('click', this, this.onAddBtnClick);
        $("#table-fields-wrapper tbody").on('sortupdate', this.tableOnSortUpdate.bind(this));
        $("body").on('laragenerator.table.active', this, this.bodyOnTableActive);
    }

    loadLocalStorageData() {
        const tableId = this.getTableId();

        this.loadData(tableId);
    }

    loadData(tableId) {
        const projectId = this.getProjectId();
        const $tBody = $("#table-fields-wrapper tbody");
        const identifier = `table_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage == null) {
            $tBody.html("");
            return false;
        }

        const data = {
            fields: JSON.parse(existingLocalStorage)
        };

        const render = this.getRender('table-fields-row-multiple-template', data);

        // destroy the sortable to prevent bugs
        // $("#tables-list").sortable('destroy');
        $tBody.html(render);
    }

    enableSortable() {
        $("#table-fields-wrapper tbody").sortable({
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

    onBtnDangerClick(event) {
        const _this = event.data;
        const $this = $(this);
        const $parent = $this.parents('tr');
        const fieldTitle = $parent.find('.field-title').html();

        // remove the item from localStorage
        const projectId = _this.getProjectId();
        const tableId = _this.getTableId();
        const identifier = `table_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);
        if (existingLocalStorage != null) {
            existingLocalStorage = JSON.parse(existingLocalStorage);

            const newData = existingLocalStorage.filter((item) => {
                return item.title !== fieldTitle;
            });

            localStorage.setItem(`table_fields_${projectId}_${tableId}`, JSON.stringify(newData));
        }

        // trigger a custom event
        $("body").trigger('laragenerator.table-fields.remove', {fieldTitle: fieldTitle});

        // remove the item from DOM
        $parent.remove();
    }

    onAddBtnClick(event) {
        const _this = event.data;
        const $this = $(this);
        const $parent = $this.parents('tr');
        const tableId = _this.getTableId();
        const $title = $parent.find('#table-fields-title-input');
        const $type = $parent.find('#table-fields-type-input');
        const $length = $parent.find('#table-fields-length-input');
        const $default = $parent.find('#table-fields-default-input');
        const $nullable = $parent.find('#table-fields-nullable-input');

        // make sure the field names are unique
        const projectId = _this.getProjectId();
        const projectIdentifier = `table_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(projectIdentifier);
        if (existingLocalStorage != null) {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            for (let i=0; i<existingLocalStorage.length; i++) {
                let value = existingLocalStorage[i];
                if (value.title == $title.val()) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'The field already exists!',
                    });
                    return false;
                }
            }
        }

        if ($title.val().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The title needs to be at least one character long!',
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

        let regex = new RegExp("^[a-z]{1}[a-z_0-9]*$");
        if (! regex.test($title.val())) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The title needs to be lowercase alpha numeric and should start with a letter!',
            });
            return false;
        }

        regex = new RegExp("^[0-9]*$");
        if (! regex.test($length.val())) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The length needs to be numeric!',
            });
            return false;
        }

        regex = new RegExp("^[0-9A-Za-z ]*$");
        if (! regex.test($default.val())) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The default field can only take alphanumeric characters plus spaces!',
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
            title: $title.val(),
            type: $type.val(),
            length: $length.val(),
            default: $default.val(),
            nullable: $nullable.is(':checked')
        }

        // add data to localStorage
        _this.addDataToLocalStorage(data);

        // get renderHTML
        const renderHTML = _this.getRender('table-fields-row-template', data);

        $("#table-fields-wrapper tbody").sortable('destroy');
        $("#table-fields-wrapper tbody").append(renderHTML);

        // trigger a custom event to add table fields in every section
        $("body").trigger('laragenerator.table-fields.new', {fieldTitle: data.title});

        // reset the inputs
        $title.val('');
        $length.val('');
        $default.val('');

        // reset the nullable input
        if ($nullable.is(':checked')) {
            $nullable.trigger('click');
        }

        _this.enableSortable();
    }

    addDataToLocalStorage(data) {
        const projectId = this.getProjectId();
        const tableId = this.getTableId();
        const identifier = `table_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage == null) {
            localStorage.setItem(identifier, JSON.stringify([data]));
        } else {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            existingLocalStorage.push(data);
            localStorage.setItem(identifier, JSON.stringify(existingLocalStorage));
        }
    }

    tableOnSortUpdate(event, ui) {
        // update the data position in localStorage
        const projectId = this.getProjectId();
        const tableId = this.getTableId();
        const identifier = `table_fields_${projectId}_${tableId}`;
        const $rows = $("#table-fields-wrapper tbody tr");
        const data = [];
        $rows.each(function (index) {
            let $row = $(this);
            data.push({
                title: $row.find('.field-title').html(),
                type: $row.find('.field-type').html(),
                length: $row.find('.field-length').html(),
                default: $row.find('.field-default').html(),
            })
        });
        localStorage.setItem(identifier, JSON.stringify(data));

        // trigger a custom event to update the order of the field inputs
        const $item = ui.item;
        const itemPosition = $item.index();
        const itemTitle = $item.find('.field-title').html();
        $("body").trigger('laragenerator.table-fields.drag-stop',
            {
                fieldTitle: itemTitle,
                newPosition: itemPosition
            }
        );
    }

    bodyOnTableActive(event, data) {
        const _this = event.data;

        _this.loadData(data.tableTitle);
    }
}
