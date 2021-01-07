<h3>Table fields</h3>
<span>generate the table fields for the selected table</span>

<table id="table-fields-wrapper" class="table">
    <thead class="thead-light">
        <tr>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Length</th>
            <th scope="col">Default</th>
            <th scope="col">Nullable</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
    <tfoot>
        <tr>
            <th scope="row">
                <input id="table-fields-title-input" type="text" class="form-control" placeholder="Title">
            </th>
            <td>
                <select name="" id="table-fields-type-input" class="form-control">
                    <option value="" selected disabled>Type</option>
                    <option value="bigIncrements">bigIncrements</option>
                    <option value="string">string</option>
                    <option value="text">text</option>
                    <option value="integer">integer</option>
                    <option value="tinyInteger">tinyInteger</option>
                    <option value="bigInteger">bigInteger</option>
                    <option value="dateTime">dateTime</option>
                    <option value="uuid">uuid</option>
                    <option value="binary">binary</option>
                    <option value="boolean">boolean</option>
                    <option value="date">date</option>
                    <option value="float">float</option>
                    <option value="ipAddress">ipAddress</option>
                    <option value="json">json</option>
                    <option value="longText">longText</option>
                    <option value="unsignedInteger">unsignedInteger</option>
                    <option value="mediumInteger">mediumInteger</option>
                    <option value="timestamp">timestamp</option>
                    <option value="mediumText">mediumText</option>
                </select>
            </td>
            <td>
                <input id="table-fields-length-input" type="text" class="form-control" placeholder="Length">
            </td>
            <td>
                <input id="table-fields-default-input" type="text" class="form-control" placeholder="Default">
            </td>
            <td>
                <input id="table-fields-nullable-input" type="checkbox" />
            </td>
            <td>
                <button id="table-fields-add-btn" class="btn btn-primary">
                    <i class="fas fa-plus"></i>
                </button>
            </td>
        </tr>
    </tfoot>
</table>
