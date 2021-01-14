import requestFile from './templates/request-file.js';
import Download from '../download';

export default class Validation extends Download {

    constructor(options) {
        super();
        this.table = options.table;
        this.model = options.model;

        // retrieve the localStorage item requiered for this tab
        this.localStorage = this.getStorageData('validation', this.table);
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
        let rules = ``;
        for (let i = 0; i<this.localStorage.length; i++) {
            let field = this.localStorage[i];

            if (field.rules != '') {
                if (i == this.localStorage.length - 1) {
                    rules += `'${field.fieldTitle}' => '${field.rules}'`;
                } else {
                    rules += `'${field.fieldTitle}' => '${field.rules}',\n\t\t\t`;
                }
            }
        }

        return rules;
    }
}
