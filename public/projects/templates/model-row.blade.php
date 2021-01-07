<script id="model-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">
            <span class="field-title">@{{ fieldTitle }}</span>
        </th>
        <td>
            @{{#fillable}}
                <input class="fillable" name="fillable[]" type="checkbox" class="" checked>
            @{{/fillable}}
            @{{^fillable}}
                <input class="fillable" name="fillable[]" type="checkbox" class="">
            @{{/fillable}}
        </td>
        <td>
            @{{#hidden}}
                <input class="hidden" name="hidden[]" type="checkbox" class="" checked>
            @{{/hidden}}
            @{{^hidden}}
                <input class="hidden" name="hidden[]" type="checkbox" class="">
            @{{/hidden}}
        </td>
    </tr>
</script>

<script id="model-row-multiple-template" type="x-tmpl-mustache">
    @{{#fields}}
        <tr>
            <th scope="row">
                <span class="field-title">@{{ fieldTitle }}</span>
            </th>
            <td>
                @{{#fillable}}
                    <input class="fillable" name="fillable[]" type="checkbox" class="" checked>
                @{{/fillable}}
                @{{^fillable}}
                    <input class="fillable" name="fillable[]" type="checkbox" class="">
                @{{/fillable}}
            </td>
            <td>
                @{{#hidden}}
                    <input class="hidden" name="hidden[]" type="checkbox" class="" checked>
                @{{/hidden}}
                @{{^hidden}}
                    <input class="hidden" name="hidden[]" type="checkbox" class="">
                @{{/hidden}}
            </td>
        </tr>
    @{{/fields}}
</script>
