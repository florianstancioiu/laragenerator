import Section from '../section';

export default class Seeder extends Section {

    bindEvents() {
        //$("#add-table-btn").on('click', this, this.onAddTableBtnClick);
    }

    onAddTableBtnClick(event) {
        const _this = event.data;

        console.dir(_this);
    }
}
