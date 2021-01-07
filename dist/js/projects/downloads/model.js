import modelFile from './templates/model-file.js';
import Download from '../download';

export default class Model extends Download {

    constructor(options) {
        super();
        this.table = options.table;
        this.model = options.model;

        // retrieve the localStorage item requiered for this tab
        this.localStorage = this.getStorageData('model', this.table);
    }

    getContent() {
        const table = this.table;
        const relationshipsNamespaces = this.getRelationshipsNamespaces();
        const model = this.getModel(table);
        const fillableFields = this.getFillableFields();
        const hiddenFields = this.getHiddenFields();
        const relationships = this.getRelationships();

        return modelFile
            .replace(/{{relationshipsNamespaces}}/g, relationshipsNamespaces)
            .replace(/{{model}}/g, model)
            .replace(/{{fillableFields}}/g, fillableFields)
            .replace(/{{hiddenFields}}/g, hiddenFields)
            .replace(/{{relationships}}/g, relationships);
    }

    getRelationshipsNamespaces() {
        return ``;
    }

    getModel() {
        return this.model;
    }

    getFillableFields() {
        let fillableFields = ``;
        for (let i = 0; i<this.localStorage.length; i++) {
            let record = this.localStorage[i];

            if (record.fillable == true) {
                if (i == this.localStorage.length - 1) {
                    fillableFields += `${record.fieldTitle}`;
                } else {
                    fillableFields += `${record.fieldTitle},\n\t\t`;
                }
            }
        }

        return fillableFields;
    }

    getHiddenFields() {
        let hiddenFields = ``;
        for (let i = 0; i<this.localStorage.length; i++) {
            let record = this.localStorage[i];

            if (record.hidden == true) {
                if (i == this.localStorage.length - 1) {
                    hiddenFields += `${record.fieldTitle}`;
                } else {
                    hiddenFields += `${record.fieldTitle},\n\t\t`;
                }
            }
        }

        return hiddenFields;
    }

    getRelationships() {
        return ``;
    }
}
