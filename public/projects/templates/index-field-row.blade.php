<script id="index-field-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row" class="field-title">@{{ fieldTitle }}</th>
        <td>
            @{{#show}}
                <input class="show" name="show[]" type="checkbox" checked>
            @{{/show}}
            @{{^show}}
                <input class="show" name="show[]" type="checkbox">
            @{{/show}}
        </td>
    </tr>
</script>

<script id="index-field-row-multiple-template" type="x-tmpl-mustache">
    @{{#fields}}
        <tr>
            <th scope="row" class="field-title">@{{ fieldTitle }}</th>
            <td>
                @{{#show}}
                    <input class="show" name="show[]" type="checkbox" checked>
                @{{/show}}
                @{{^show}}
                    <input class="show" name="show[]" type="checkbox">
                @{{/show}}
            </td>
        </tr>
    @{{/fields}}
</script>
