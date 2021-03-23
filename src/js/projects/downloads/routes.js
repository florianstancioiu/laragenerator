import routeFile from './templates/route-file.js';

export default class Routes {

    constructor(localStorage) {
        this.localStorage = localStorage;
    }

    getContent() {
        const resourceRoutes = this.getResourceRoutes();
        const namespaceImports = this.getNamespaceImports(this.localStorage);

        return routeFile
            .replace(/{{namespaceImports}}/g, namespaceImports)
            .replace(/{{resourceRoutes}}/g, resourceRoutes);
    }

    getResourceRoutes() {
        const localStorage = this.localStorage;
        let string = ``;
        for (let i=0; i<localStorage.length; i++) {
            let table = localStorage[i].tableTitle;
            let model = this.getModel(table);

            if (i === localStorage.length - 1) {
                string += `Route::resource('{{table}}', {{model}}Controller::class);`;
            } else {
                string += `Route::resource('{{table}}', {{model}}Controller::class);\n\t`;
            }

            string = string
                .replace(/{{table}}/g, table)
                .replace(/{{model}}/g, model);
        }

        return string;
    }

    getNamespaceImports(localStorage) {
        let string = ``;
        for (let i=0; i<localStorage.length; i++) {
            let model = this.getModel(localStorage[i].tableTitle);

            string += `use App\\Http\\Controllers\\Admin\\{{model}}Controller;\n`;
            string = string.replace(/{{model}}/g, model);
        }

        return string;
    }

    getModel(tableName) {
        tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

        if (tableName.charAt(tableName.length - 1) == "s") {
            tableName = tableName.slice(0, -1)
        }

        return tableName;
    }
}
