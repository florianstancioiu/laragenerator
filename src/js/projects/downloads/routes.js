export default class Routes {

    constructor(localStorage) {
        this.localStorage = localStorage;
    }

    getContent() {
        const prefix = this.getPrefix();
        const resourceRoutes = this.getResourceRoutes();
        const suffix = this.getSuffix();

        return `${prefix}${resourceRoutes}${suffix}`;
    }

    getPrefix() {
        const namespaceImports = this.getNamespaceImports(this.localStorage);
        let string = `<?php

use Illuminate\\Support\\Facades\\Auth;
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\Admin\\DashboardController;
{{namespaceImports}}
Auth::routes();

Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    `;

        string = string.replace(/{{namespaceImports}}/g, namespaceImports)

        return string;
    }

    getResourceRoutes() {
        const localStorage = this.localStorage;
        let string = ``;
        for (let i=0; i<localStorage.length; i++) {
            let table = localStorage[i].tableTitle;
            let model = this.getModel(table);

            if (i === localStorage.length - 1) {
                string += `Route::resource('{{table}}', {{model}}Controller::class);\n`;
            } else {
                string += `Route::resource('{{table}}', {{model}}Controller::class);\n\n\t`;
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

    getSuffix() {
        return `});`;
    }

    getModel(tableName) {
        tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

        if (tableName.charAt(tableName.length - 1) == "s") {
            tableName = tableName.slice(0, -1)
        }

        return tableName;
    }
}
