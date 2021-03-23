import databaseSeederFile from './templates/database-seeder-file.js';

export default class DatabaseSeeder {

    constructor(localStorage) {
        this.localStorage = localStorage;
    }

    getContent() {
        const seederCalls = this.getSeederCalls(this.localStorage);

        return databaseSeederFile
            .replace(/{{seederCalls}}/g, seederCalls);
    }

    getSeederCalls(localStorage) {
        let seederCalls = ``;
        for (let i=0; i<localStorage.length; i++) {
            let model = this.getModel(localStorage[i].tableTitle);
            
            if (i === localStorage.length - 1) {
                seederCalls += `->call(${model}Seeder::class);`;
            } else {
                seederCalls += `->call(${model}Seeder::class)\n\t\t\t`;
            }
        }

        return seederCalls;
    }

    getModel(tableName) {
        tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

        if (tableName.charAt(tableName.length - 1) == "s") {
            tableName = tableName.slice(0, -1)
        }

        return tableName;
    }
}
