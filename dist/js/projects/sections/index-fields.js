import Section from '../section';

export default class IndexFields extends Section {

    constructor() {
        super();
        this.loadLocalStorageData();
    }

    bindEvents() {
        $("body").on('laragenerator.table-fields.new', this, this.bodyOnTableFieldsNew);
        $("body").on('laragenerator.table-fields.remove', this, this.bodyOnTableFieldsRemove);
        $("body").on('laragenerator.table-fields.drag-stop', this, this.bodyOnTableFieldsDragStop);
        $("body").on('laragenerator.table.active', this, this.bodyOnTableActive);
        $(".index-fields-section-tbody").on('change', 'input[type=checkbox]', this, this.tbodyCheckboxChange);
    }

    loadLocalStorageData() {
        const tableId = this.getTableId();

        this.loadData(tableId);
    }

    loadData(tableId) {
        const projectId = this.getProjectId();
        const $tBody = $(".index-fields-section-tbody");
        const identifier = `index_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage == null) {
            $tBody.html("");
            return false;
        }

        const data = {
            fields: JSON.parse(existingLocalStorage)
        };

        const render = this.getRender('index-field-row-multiple-template', data);

        $tBody.html(render);
    }

    bodyOnTableFieldsNew(event, data) {
        const _this = event.data;

        // prepend required variables to data
        data.show = true;

        // get renderHTML
        const renderHTML = _this.getRender('index-field-row-template', data);

        _this.addDataToLocalStorage(data);

        $(".index-fields-section-tbody").append(renderHTML);
    }

    addDataToLocalStorage(data) {
        const projectId = this.getProjectId();
        const tableId = this.getTableId();
        const identifier = `index_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage == null) {
            localStorage.setItem(identifier, JSON.stringify([data]));
        } else {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            existingLocalStorage.push(data);
            localStorage.setItem(identifier, JSON.stringify(existingLocalStorage));
        }
    }

    bodyOnTableActive(event, data) {
        const _this = event.data;

        _this.loadData(data.tableTitle);
    }

    bodyOnTableFieldsDragStop(event, data) {
        const _this = event.data;
        const projectId = _this.getProjectId();
        const tableId = _this.getTableId();
        const identifier = `index_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);
        if (existingLocalStorage != null) {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            // search the localStorage for the current index of the field
            // and move the field to the new position if you find it
            for (let i = 0; i<existingLocalStorage.length; i++) {
                let element = existingLocalStorage[i];

                if (element.fieldTitle === data.fieldTitle) {
                    _this.arrayMove(existingLocalStorage, i, data.newPosition);
                    break;
                }
            }

            localStorage.setItem(identifier, JSON.stringify(existingLocalStorage));
        }

        _this.loadData(tableId);
    }

    bodyOnTableFieldsRemove(event, data) {
        const _this = event.data;
        const fieldTitle = data.fieldTitle;

        // remove the item from localStorage
        const projectId = _this.getProjectId();
        const tableId = _this.getTableId();
        const identifier = `index_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);
        if (existingLocalStorage != null) {
            existingLocalStorage = JSON.parse(existingLocalStorage);

            const newData = existingLocalStorage.filter((item) => {
                return item.fieldTitle !== fieldTitle;
            });

            localStorage.setItem(`index_fields_${projectId}_${tableId}`, JSON.stringify(newData));
        }

        _this.loadData(tableId);
    }

    tbodyCheckboxChange(event) {
        const _this = event.data;
        const $this = $(this);
        const $tBody = $this.parents(".index-fields-section-tbody");
        const $tableRows = $tBody.find('tr');

        const data = [];
        $tableRows.each(function () {
            data.push({
                fieldTitle: $(this).find('.field-title').html(),
                show: $(this).find('.show').is(':checked')
            });
        });

        const projectId = _this.getProjectId();
        const tableId = _this.getTableId();
        const identifier = `index_fields_${projectId}_${tableId}`;

        localStorage.setItem(identifier, JSON.stringify(data));
    }
}
