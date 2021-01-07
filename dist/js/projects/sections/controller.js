import Section from '../section';

export default class Controller extends Section {
    constructor() {
        super();
        this.setProperties();
        this.loadLocalStorageData();
    }

    bindEvents() {
        $("body").on('laragenerator.table.active', this, this.bodyOnTableActive);
        $(".controller-section-tbody").on('change', 'input[type=checkbox]', this, this.tbodyCheckboxChange);
    }

    setProperties() {
        this.methods = [
            {
                method: 'index',
                include: true,
            },
            /*{
                method: 'show',
                include: true,
            },*/
            {
                method: 'create',
                include: true,
            },
            {
                method: 'edit',
                include: true,
            },
            {
                method: 'store',
                include: true,
            },
            {
                method: 'update',
                include: true,
            },
            {
                method: 'destroy',
                include: true,
            }
        ];
    }

    loadLocalStorageData() {
        const tableId = this.getTableId();

        this.loadData(tableId);
    }

    loadData(tableId) {
        const projectId = this.getProjectId();
        const $tBody = $('.controller-section-tbody');
        const identifier = `controller_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);
        let data = {methods: null};

        if (existingLocalStorage == null) {
            data.methods = this.methods;
            localStorage.setItem(identifier, JSON.stringify(this.methods));
        } else {
            data.methods = JSON.parse(existingLocalStorage)
        }

        const render = this.getRender('controller-row-multiple-template', data);

        $tBody.html(render);
    }

    addDataToLocalStorage(data) {
        const projectId = this.getProjectId();
        const tableId = this.getTableId();
        const identifier = `controller_${projectId}_${tableId}`;
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

    /**
    * Set the localStorage whenever the fillable or hidden checkboxes are clicked
    */
    tbodyCheckboxChange(event) {
        const _this = event.data;
        const $this = $(this);
        const $tBody = $this.parents(".controller-section-tbody");
        const $tableRows = $tBody.find('tr');

        const data = [];
        $tableRows.each(function () {
            data.push({
                method: $(this).find('.method').html(),
                include: $(this).find('.include').is(':checked')
            });
        });

        const projectId = _this.getProjectId();
        const tableId = _this.getTableId();
        const identifier = `controller_${projectId}_${tableId}`;

        localStorage.setItem(identifier, JSON.stringify(data));
    }
}
