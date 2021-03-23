import factoryFile from './templates/factory-file.js';
import Download from '../download';

export default class Factory extends Download {

    constructor(options) {
        super();
        this.table = options.table;
        this.model = options.model;

        // retrieve the localStorage item requiered for this tab
        this.localStorage = this.getStorageData('table_fields', this.table);
    }

    getContent() {
        const model = this.model;
        const fakerFields = this.getFakerFields();

        return factoryFile
            .replace(/{{model}}/g, model)
            .replace(/{{fakerFields}}/g, fakerFields);
    }

    getFakerFields() {
        let fields = ``;
        
        for (let i=0; i<this.localStorage.length; i++) {
            let record = this.localStorage[i];
            let title = record.title;
            let type = record.type;
            let fakerMethod = this.getFakerMethod(type);

            if (type === 'bigIncrements') {
                continue;
            }

            if (i === this.localStorage.length - 1) {
                fields += `'${title}' => ${fakerMethod}`;
            } else {
                fields += `'${title}' => ${fakerMethod},\n\t\t\t`;
            }
        }

        return fields;
    }

    getFakerMethod(type) {
        let method = ``;
        
        switch(type) {
            case 'bigIncrements':
                method += `$this->faker->randomNumber()`;
                break;
            case 'string':
                method += `$this->faker->sentence()`;
                break;
            case 'unsignedInteger':
                method += `$this->faker->numberBetween(1, 1000)`;
                break;
            case 'text':
                method += `$this->faker->text(600)`;
                break;
            case 'boolean':
                method += `$this->faker->numberBetween(0, 1)`;
                break;
            case 'timestamp':
                method += `$this->faker->unixTime()`;
                break;
            case 'date':
                method += `$this->faker->date()`;
                break;
            case 'dateTime':
                method += `$this->faker->iso8601()`;
                break;
            case 'float':
                method += `$this->faker->randomFloat()`;
                break;
            case 'tinyInteger':
                method += `$this->faker->randomDigit()`;
                break;
            case 'bigInteger':
                method += `$this->faker->numberBetween(0, 1000000)`;
                break;
            case 'integer':
                method += `$this->faker->randomNumber()`;
                break;
            case 'uuid':
                method += `$this->faker->uuid()`;
                break;
            case 'binary':
                method += `$this->faker->numberBetween(0, 1)`;
                break;
            case 'ipAddress':
                method += `$this->faker->ipv4()`;
                break;
            case 'json':
                method += `json_encode($this->faker->word())`;
                break;
            case 'longText':
                method += `$this->faker->text(1800)`;
                break;
            case 'mediumInteger':
                method += `$this->faker->numberBetween(0, 500000)`;
                break;
            case 'mediumText':
                method += `$this->faker->text(900)`;
                break;
        }

        return method;
    }
}
