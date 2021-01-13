import requestFile from './templates/request-file.js';

export default class Validation {

    constructor(options) {
        this.table = options.table;
        this.model = options.model;
    }

    getStoreContent() {
        const table = this.table;
        const model = this.getModel(table);
        const method = "Store";
        const rules = this.getRules();

        return requestFile
            .replace(/{{model}}/g, model)
            .replace(/{{method}}/g, method)
            .replace(/{{rules}}/g, rules);
    }

    getUpdateContent() {
        const table = this.table;
        const model = this.getModel(table);
        const method = "Update";
        const rules = this.getRules();

        return requestFile
            .replace(/{{model}}/g, model)
            .replace(/{{method}}/g, method)
            .replace(/{{rules}}/g, rules);
    }

    getModel(table) {
        return this.model;
    }

    getRules(table) {
        return ``;
    }
}
