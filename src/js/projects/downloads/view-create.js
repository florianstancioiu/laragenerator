import viewCreateFile from './templates/view-create-file.js';

export default class ViewCreate {

    constructor(options) {
        this.table = options.table;
        this.model = options.model;
    }

    getContent() {
        const table = this.table;
        const model = this.getModel(table);
        const formInputs = this.getFormInputs(table);

        return viewCreateFile
            .replace(/{{table}}/g, table)
            .replace(/{{model}}/g, model)
            .replace(/{{formInputs}}/g, formInputs);
    }

    getModel(table) {
        return this.model;
    }

    getFormInputs(table) {
        return ``;
    }
}
