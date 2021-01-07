export default class Download {
    getProjectId() {
        const url = window.location.href;
        const splits = url.split('/');

        return parseInt(splits[splits.length - 1], 10);
    }

    getStorageData(sectionId, tableId) {
        const projectId = this.getProjectId();
        const identifier = `${sectionId}_${projectId}_${tableId}`;
        let existingLocalStorage = localStorage.getItem(identifier);

        if (existingLocalStorage != null) {
            return JSON.parse(existingLocalStorage);
        }

        return [];
    }
}
