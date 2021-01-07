import viewIndexFile from './templates/view-index-file.js';

export default class ViewIndex {

    constructor(options) {
        this.table = options.table;
        this.model = options.model;
    }

    getContent() {
        const table = this.table;
        const modelPlural = this.getModelPlural();
        const tableHeaders = this.getTableHeaders();
        const tableRows = this.getTableRows();

        return viewIndexFile
            .replace(/{{table}}/g, table)
            .replace(/{{modelPlural}}/g, modelPlural)
            .replace(/{{tableHeaders}}/g, tableHeaders)
            .replace(/{{tableRows}}/g, tableRows);
    }

    getModelPlural() {
        return `${this.model}s`;
    }

    getTableHeaders() {
        return ``;
    }

    getTableRows() {
        return ``;
    }
}
