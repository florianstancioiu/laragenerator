import seederFile from './templates/seeder-file.js';
import Download from '../download';

export default class Seeder extends Download {

    constructor(options) {
        super();
        this.model = options.model;
    }

    getContent() {
        const model = this.model;

        return seederFile
            .replace(/{{model}}/g, model);
    }
}
