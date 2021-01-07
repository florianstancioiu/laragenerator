<script id="table-fields-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">
            <i class="fas fa-crosshairs"></i>
            <span class="field-title">@{{ title }}</span>
        </th>
        <td class="field-type">@{{ type }}</td>
        <td class="field-length">@{{ length }}</td>
        <td class="field-default">@{{ default }}</td>
        <td class="field-nullable">@{{ nullable }}</td>
        <td>
            <button class="btn btn-danger">
                <i class="fas fa-times"></i>
            </button>
        </td>
    </tr>
</script>

<script id="table-fields-row-multiple-template" type="x-tmpl-mustache">
    @{{#fields}}
        <tr>
            <th scope="row">
                <i class="fas fa-crosshairs"></i>
                <span class="field-title">@{{ title }}</span>
            </th>
            <td class="field-type">@{{ type }}</td>
            <td class="field-length">@{{ length }}</td>
            <td class="field-default">@{{ default }}</td>
            <td class="field-nullable">@{{ nullable }}</td>
            <td>
                <button class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    @{{/fields}}
</script>
