<script id="validation-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">@{{ fieldTitle }}</th>
        <td>
            <button class="btn btn-primary">
                <i class="fas fa-plus"></i>
            </button>
        </td>
    </tr>
</script>

<script id="validation-row-multiple-template" type="x-tmpl-mustache">
    @{{#validations}}
        <tr>
            <th scope="row">@{{ fieldTitle }}</th>
            <td>
                <button class="btn btn-primary">
                    <i class="fas fa-plus"></i>
                </button>
            </td>
        </tr>
    @{{/validations}}
</script>
