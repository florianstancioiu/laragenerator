import Mustache from 'mustache/mustache.min';

export default class Section {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {

    }

    getRender(templateId, data) {
        const templateHTML = document.getElementById(templateId).innerHTML;

        return Mustache.render(templateHTML, data);
    }

    getProjectId() {
        const url = window.location.href;
        const splits = url.split('/');

        return parseInt(splits[splits.length - 1], 10);
    }

    arrayMove(array, fromIndex, toIndex) {
        const element = array[fromIndex];
        array.splice(fromIndex, 1);
        array.splice(toIndex, 0, element);
    }

    getTableId() {
        return $("#tables-list .list-group-item.active .table-title").html();
    }
}
