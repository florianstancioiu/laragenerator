import JSZip from "jszip";
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import Migration from './downloads/migration';
import Model from './downloads/model';
import Validation from './downloads/validation';
import Controller from './downloads/controller';
import ViewCreate from './downloads/view-create';
import ViewEdit from './downloads/view-edit';
import ViewIndex from './downloads/view-index';
import Routes from './downloads/routes';

export default class ZipFile {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        $("#download-project-btn").on('click', this, this.onDownloadProjectBtnClick);
    }

    getProjectId() {
        const url = window.location.href;
        const splits = url.split('/');

        return 1;
        return parseInt(splits[splits.length - 1], 10);
    }

    onDownloadProjectBtnClick(event) {
        const _this = event.data;
        const $this = $(this);
        const zipFile = new JSZip();

        const projectId = _this.getProjectId();
        const identifier = `project_${projectId}`;
        //const identifier = `table_fields_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage == null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please add some tables',
            });

            return false;
        } else {
            existingLocalStorage = JSON.parse(existingLocalStorage);

            for (let i=0; i<existingLocalStorage.length; i++) {
                let options = {
                    table: existingLocalStorage[i].tableTitle,
                    model: _this.getModel(existingLocalStorage[i].tableTitle)
                };

                _this.generateMigration(zipFile, options, i);
                _this.generateModel(zipFile, options);
                _this.generateValidations(zipFile, options);
                _this.generateController(zipFile, options);
                _this.generateViews(zipFile, options);
            }

            _this.generateWebRoute(zipFile, existingLocalStorage);
        }

        //return false;

        zipFile
            .generateAsync({type:"blob"})
            .then(function(content) {
                // see FileSaver.js
                saveAs(content, 'laravel.zip');
            });
    }

    getModel(tableName) {
        tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

        if (tableName.charAt(tableName.length - 1) == "s") {
            tableName = tableName.slice(0, -1);
        }

        return tableName;
    }

    generateMigration(zipFile, options, index) {
        const _this = this;
        const table = options.table;
        const datePrefix = _this.getMigrationDatePrefix(index);
        const migrationContent = (new Migration(options)).getContent();

        zipFile.file(`database/migrations/${datePrefix}_create_${table}_table`, migrationContent);
    }

    getMigrationDatePrefix(index) {
        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = now.getFullYear();
        // const miliseconds = String(now.getMilliseconds()).padStart(6, '0');
        let miliseconds = String(performance.now()).replace(/\./g, '');
        miliseconds = miliseconds.substring(0, 8);
        miliseconds = index + miliseconds;

        return yyyy + '_' + dd + '_' + mm + '_' + miliseconds;
    }

    generateModel(zipFile, options) {
        const model = options.model;
        const modelContent = (new Model(options)).getContent();

        zipFile.file(`app/Models/${model}.php`, modelContent);
    }

    generateValidations(zipFile, options) {
        const model = options.model;
        const validationlStoreContent = (new Validation(options)).getStoreContent();
        const validationlUpdateContent = (new Validation(options)).getUpdateContent();

        zipFile.file(`app/Http/Requests/Store${model}.php`, validationlStoreContent);
        zipFile.file(`app/Http/Requests/Update${model}.php`, validationlUpdateContent);
    }

    generateController(zipFile, options) {
        const model = options.model;
        const controllerContent = (new Controller(options)).getContent();

        zipFile.file(`app/Http/Controllers/Admin/${model}Controller.php`, controllerContent);
    }

    generateViews(zipFile, options) {
        const table = options.table;
        const ViewCreateContent = (new ViewCreate(options)).getContent();
        const ViewEditContent = (new ViewEdit(options)).getContent();
        const ViewIndexContent = (new ViewIndex(options)).getContent();

        zipFile.file(`resources/views/admin/${table}/create.blade.php`, ViewCreateContent);
        zipFile.file(`resources/views/admin/${table}/edit.blade.php`, ViewEditContent);
        zipFile.file(`resources/views/admin/${table}/index.blade.php`, ViewIndexContent);
    }

    generateWebRoute(zipFile, localStorage) {
        const routesContent = (new Routes(localStorage)).getContent();

        zipFile.file(`routes/web.php`, routesContent);
    }
}
