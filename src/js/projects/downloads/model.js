import modelFile from './templates/model-file.js';
import modelRelationship from './templates/model-relationship-method.js';
import Download from '../download';

export default class Model extends Download {

    constructor(options) {
        super();
        this.table = options.table;
        this.model = options.model;

        // retrieve the localStorage items requiered for this file
        this.localStorage = this.getStorageData('model', this.table);
        this.localStorageRelationships = this.getStorageData('relationships', this.table);
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
            .replace(/{{table}}/g, table)
            .replace(/{{fillableFields}}/g, fillableFields)
            .replace(/{{hiddenFields}}/g, hiddenFields)
            .replace(/{{relationships}}/g, relationships);
    }

    getModel() {
        return this.model;
    }

    getFillableFields() {
        let fillableFields = ``;
        for (let i = 0; i<this.localStorage.length; i++) {
            let record = this.localStorage[i];

            // make sure the `id` is not in fillable
            if (record.fieldTitle === 'id') {
                continue;
            }

            if (record.fillable == true) {
                if (i == this.localStorage.length - 1) {
                    fillableFields += `'${record.fieldTitle}'`;
                } else {
                    fillableFields += `'${record.fieldTitle}',\n\t\t`;
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
                    hiddenFields += `'${record.fieldTitle}'`;
                } else {
                    hiddenFields += `'${record.fieldTitle}',\n\t\t`;
                }
            }
        }

        return hiddenFields;
    }

    getRelationshipsNamespaces() {
        // make sure there aren't any duplicate imports
        const models = [];
        this.localStorageRelationships.map(function (item) {
            console.dir(item);
            if (models.indexOf(item.foreignModel) === -1) {
                models.push(item.foreignModel);
            }
        });

        // generate the imports string
        let namespaces = ``;
        for (let i = 0; i<models.length; i++) {
            let foreignModel = models[i];

            namespaces += `use App\\Models\\${foreignModel};\n`;
        }

        return namespaces;
    }

    getRelationships() {
        let namespaces = ``;
        for (let i = 0; i<this.localStorageRelationships.length; i++) {
            let record = this.localStorageRelationships[i];
            let method = record.method;
            let type = record.type;
            let foreignModel = record.foreignModel;

            namespaces += modelRelationship
                .replace(/{{method}}/g, method)
                .replace(/{{type}}/g, type)
                .replace(/{{foreignModel}}/g, foreignModel);
        }

        return namespaces;
    }
}
