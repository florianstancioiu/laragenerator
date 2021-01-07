import viewEditFile from './templates/view-create-file.js';

export default class ViewEdit {

    constructor(options) {
        this.table = options.table;
        this.model = options.model;
    }

    getContent() {
        const table = this.table;
        const model = this.getModel(table);
        const lowercaseModel = this.getLowercaseModel(table);
        const formInputs = this.getFormInputs(table);

        return viewEditFile
            .replace(/{{table}}/g, table)
            .replace(/{{model}}/g, model)
            .replace(/{{lowercaseModel}}/g, lowercaseModel)
            .replace(/{{formInputs}}/g, formInputs);
    }

    getModel(table) {
        return this.model;
    }

    getLowercaseModel(table) {
        return ``;
    }

    getFormInputs(table) {
        return ``;
    }
}
