import Section from '../section';
import Swal from 'sweetalert2';

export default class Sidebar extends Section {

    constructor() {
        super();
        this.loadLocalStorageData();
        this.enableSortable();
    }

    bindEvents() {
        $("#add-table-input").on('keypress', this, this.onKeyPressAddTableInput);
        $("#add-table-btn").on('click', this, this.onAddTableBtnClick);
        $("#tables-list").on('click', '.btn-danger', this, this.onBtnDangerClick);
        $("#tables-list").on('click', '.list-group-item', this, this.onListGroupItemClick);
        $("#new-project-btn").on('click', this, this.onNewProjectBtnClick);
    }

    loadLocalStorageData() {
        const projectId = this.getProjectId();
        const projectIdentifier = `project_${projectId}`;
        const existingLocalStorage = localStorage.getItem(projectIdentifier);

        if (existingLocalStorage == null) {
            return false;
        }

        const data = {
            tables: JSON.parse(existingLocalStorage)
        };

        const render = this.getRender('list-group-item-multiple-template', data);

        // destroy the sortable to prevent bugs
        // $("#tables-list").sortable('destroy');
        $("#tables-list").append(render);

        $("#tables-list .list-group-item:first-child").addClass('active');

        // TODO: trigger event so that every single section can react to the change
    }

    enableSortable() {
        $("#tables-list").sortable({
            revert: true
        });
    }

    onKeyPressAddTableInput(event) {
        const _this = event.data;
        const $this = $('#add-table-btn');

        if (event.which == 13) {
            $("#add-table-btn").trigger('click');
        }
    }

    onAddTableBtnClick(event) {
        event.preventDefault();
        const _this = event.data;
        const $this = $(this);

        // add content to sidebar
        const $input = $this.parents('.add-table-wrapper').find('#add-table-input');
        const inputValue = $input.val();
        if (inputValue.length === 0) {
            return false;
        }

        // make sure the table title is alpha numeric
        const regex = new RegExp("^[a-z]{1}[a-z_0-9]*$");
        if (! regex.test(inputValue)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The table name needs to be lowercase alpha numeric and should start with a letter!',
            });
            return false;
        }

        // make sure the table names are unique
        const projectId = _this.getProjectId();
        const projectIdentifier = `project_${projectId}`;
        let existingLocalStorage = localStorage.getItem(projectIdentifier);
        if (existingLocalStorage != null) {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            for (let i=0; i<existingLocalStorage.length; i++) {
                let value = existingLocalStorage[i];
                if (value.tableTitle == inputValue) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'The table already exists!',
                    });
                    return false;
                }
            }
        }

        // add data to localStorage
        const data = {tableTitle: inputValue};
        _this.addDataToLocalStorage(data);

        // generate the HTML we need using Mustache template engine
        const render = _this.getRender('list-group-item-template', data);
        // destroy the sortable to prevent bugs
        $("#tables-list").sortable('destroy');
        $("#tables-list").append(render);

        // make the last item active
        $("#tables-list .list-group-item.active").removeClass('active');
        $("#tables-list .list-group-item:last-child").addClass('active');

        // trigger a custom event to change the data
        $("body").trigger('laragenerator.table.active', {tableTitle: inputValue});

        // clear input
        $input.val('');

        // enable the sortable again
        _this.enableSortable();

        return false;
    }

    addDataToLocalStorage(data) {
        const projectId = this.getProjectId();
        const projectIdentifier = `project_${projectId}`;
        let existingLocalStorage = localStorage.getItem(projectIdentifier);

        if (existingLocalStorage == null) {
            localStorage.setItem(projectIdentifier, JSON.stringify([data]));
        } else {
            existingLocalStorage = JSON.parse(existingLocalStorage);
            existingLocalStorage.push(data);
            localStorage.setItem(projectIdentifier, JSON.stringify(existingLocalStorage));
        }
    }

    onBtnDangerClick(event) {
        const _this = event.data;
        const $this = $(this);
        const tableTitle = $this
            .parents('.list-group-item')
            .find('.table-title')
            .html();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // remove the item from localStorage
                const projectId = _this.getProjectId();
                let existingLocalStorage = localStorage.getItem(`project_${projectId}`);
                if (existingLocalStorage != null) {
                    existingLocalStorage = JSON.parse(existingLocalStorage);

                    const newData = existingLocalStorage.filter((item) => {
                        return item.tableTitle !== tableTitle;
                    });

                    localStorage.setItem(`project_${projectId}`, JSON.stringify(newData));
                }

                localStorage.removeItem(`table_fields_${projectId}_${tableTitle}`);
                localStorage.removeItem(`model_${projectId}_${tableTitle}`);
                localStorage.removeItem(`relationships_${projectId}_${tableTitle}`);
                localStorage.removeItem(`validation_${projectId}_${tableTitle}`);
                localStorage.removeItem(`controller_${projectId}_${tableTitle}`);
                localStorage.removeItem(`forms_${projectId}_${tableTitle}`);
                localStorage.removeItem(`index_fields_${projectId}_${tableTitle}`);

                // activate the previous item in the DOM
                $this.parents('.list-group-item').prev().trigger('click');

                // remove the item from DOM
                $this.parents('.list-group-item').remove();
            }
        })
    }

    onListGroupItemClick(event) {
        const _this = event.data;
        const $this = $(this);
        const tableTitle = $this.find('.table-title').html();

        $this.parents("#tables-list")
            .find('.list-group-item.active')
            .removeClass('active');

        // trigger a custom event to know how to change the data
        $("body").trigger('laragenerator.table.active', {tableTitle: tableTitle});

        $this.addClass('active');
    }

    onNewProjectBtnClick(event) {
        Swal.fire({
            title: 'Are you sure?',
            text: "The data you entered up until now will be deleted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I\'m sure'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                location.reload(false); 
            }
        });
    }
}
