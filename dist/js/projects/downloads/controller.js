import controllerFile from './templates/controller-file.js';
import indexMethod from './templates/controller/index-method.js';
import createMethod from './templates/controller/create-method.js';
import storeMethod from './templates/controller/store-method.js';
import editMethod from './templates/controller/edit-method.js';
import updateMethod from './templates/controller/update-method.js';
import destroyMethod from './templates/controller/destroy-method.js';
import Download from '../download';

export default class Controller extends Download {

    constructor(options) {
        super();
        this.table = options.table;
        this.model = options.model;
        this.includes = {};

        // retrieve the localStorage item requiered for this tab
        this.localStorage = this.getStorageData('controller', this.table);

        this.processLocalStorage();
    }

    processLocalStorage() {
        for (let i = 0; i<this.localStorage.length; i++) {
            let method = this.localStorage[i].method;
            let include = this.localStorage[i].include;

            this.includes[method] = include;
        }
    }

    getContent() {
        const table = this.table;
        const model = this.model;
        const modelNamespaceImport = this.getModelNamespaceImport(table);
        const requestNamespaceImports = this.getRequestNamespaceImports(table);
        const tableSingular = this.getTableSingular();
        const indexMethod = this.getIndexMethod(table);
        const createMethod = this.getCreateMethod(table);
        const storeMethod = this.getStoreMethod(table);
        const editMethod = this.getEditMethod(table);
        const updateMethod = this.getUpdateMethod(table);
        const destroyMethod = this.getDestroyMethod(table);

        return controllerFile
            .replace(/{{modelNamespaceImport}}/g, modelNamespaceImport)
            .replace(/{{requestNamespaceImports}}/g, requestNamespaceImports)
            .replace(/{{indexMethod}}/g, indexMethod)
            .replace(/{{createMethod}}/g, createMethod)
            .replace(/{{storeMethod}}/g, storeMethod)
            .replace(/{{editMethod}}/g, editMethod)
            .replace(/{{updateMethod}}/g, updateMethod)
            .replace(/{{destroyMethod}}/g, destroyMethod)
            .replace(/{{model}}/g, model)
            .replace(/{{table}}/g, table)
            .replace(/{{tableSingular}}/g, tableSingular);
    }

    getTableSingular() {
        if (this.table.charAt(this.table.length - 1) == "s") {
            return this.table.slice(0, -1);
        }

        return this.table;
    }

    getModelNamespaceImport() {
        return `use App\\Models\\{{model}};\n`;
    }

    getRequestNamespaceImports(table) {
        return `use App\\Models\\{{model}};\n`;
    }

    getIndexMethod(table) {
        if (! this.includes.index) {
            return ``;
        }

        return indexMethod;
    }

    getCreateMethod(table) {
        if (! this.includes.create) {
            return ``;
        }

        return createMethod;
    }

    getStoreMethod(table) {
        if (! this.includes.store) {
            return ``;
        }

        return storeMethod;
    }

    getEditMethod(table) {
        if (! this.includes.edit) {
            return ``;
        }

        return editMethod;
    }

    getUpdateMethod(table) {
        if (! this.includes.update) {
            return ``;
        }

        return updateMethod;
    }

    getDestroyMethod(table) {
        if (! this.includes.destroy) {
            return ``;
        }

        return destroyMethod;
    }
}
