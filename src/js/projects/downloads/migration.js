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

            fields += `$table->${record.type}('${record.title}')`;

            if (record.default !== '') {
                fields += `->default('${record.default}')`;
            }

            if (record.nullable == true) {
                fields += `->nullable()`;
            }

            fields += `;`;

            if (i !== this.localStorage.length - 1) {
                fields += `\n\t\t\t`;
            }
        }

        fields += `\n\t\t\t$table->timestamps();`;

        return fields;
    }

    getUpperCaseTable(table) {
        return table.charAt(0).toUpperCase() + table.slice(1);
    }
}
