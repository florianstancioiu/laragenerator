import Section from '../section';

export default class Relationships extends Section {

    bindEvents() {
        $("body").on('laragenerator.table.active', this, this.bodyOnTableActive);
    }

    bodyOnTableActive(event, data) {
        const _this = event.data;
        console.dir(data);
    }

    bodyOnTableLoaded(event, data) {
        console.dir('bodyOnTableLoaded');
        console.dir(data);
    }

    retrieveModelNames() {
        const tableNames = $('#tables-list .table-title').html();

    }

    /*
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
            fields: JSON.parse(existingLocalStorage)
        };

        const render = this.getRender('index-field-row-multiple-template', data);

        $tBody.html(render);
    }
    */
}
