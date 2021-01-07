import migrationFile from './templates/migration-file.js';
import Download from '../download';

export default class Migration extends Download {

    constructor(options) {
        super();
        this.table = options.table;
        this.model = options.model;

        // retrieve the localStorage item requiered for this tab
        this.localStorage = this.getStorageData('table_fields', this.table);
    }

    getContent() {
        const table = this.table;
        const uppercaseTable = this.getUpperCaseTable(table);
        const tableFields = this.getFields();

        return migrationFile
            .replace(/{{uppercaseTable}}/g, uppercaseTable)
            .replace(/{{table}}/g, table)
            .replace(/{{tableFields}}/g, tableFields);
    }

    getFields() {
        let fields = ``;
        for (let i = 0; i<this.localStorage.length; i++) {
            let record = this.localStorage[i];

            if (i !== this.localStorage.length - 1) {
                fields += `$table->${record.type}('${record.title}');\n\t\t\t`;
            } else {
                fields += `$table->${record.type}('${record.title}');`;
            }
        }

        return fields;
    }

    getUpperCaseTable(table) {
        return table.charAt(0).toUpperCase() + table.slice(1);
    }
}
