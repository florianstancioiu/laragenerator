<script id="list-group-item-template" type="x-tmpl-mustache">
    <li class="list-group-item">
        <i class="fas fa-crosshairs"></i>
        <span class="table-title">{{ tableTitle }}</span>
        <button type="button" name="button" class="btn btn-danger">
            <i class="fas fa-times"></i>
        </button>
    </li>
</script>

<script id="list-group-item-multiple-template" type="x-tmpl-mustache">
    {{#tables}}
        <li class="list-group-item">
            <i class="fas fa-crosshairs"></i>
            <span class="table-title">{{ tableTitle }}</span>
            <button type="button" name="button" class="btn btn-danger">
                <i class="fas fa-times"></i>
            </button>
        </li>
    {{/tables}}
</script>

<script id="table-fields-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">
            <i class="fas fa-crosshairs"></i>
            <span class="field-title">{{ title }}</span>
        </th>
        <td class="field-type">{{ type }}</td>
        <td class="field-length">{{ length }}</td>
        <td class="field-default">{{ default }}</td>
        <td class="field-nullable">{{ nullable }}</td>
        <td>
            <button class="btn btn-danger">
                <i class="fas fa-times"></i>
            </button>
        </td>
    </tr>
</script>

<script id="table-fields-row-multiple-template" type="x-tmpl-mustache">
    {{#fields}}
        <tr>
            <th scope="row">
                <i class="fas fa-crosshairs"></i>
                <span class="field-title">{{ title }}</span>
            </th>
            <td class="field-type">{{ type }}</td>
            <td class="field-length">{{ length }}</td>
            <td class="field-default">{{ default }}</td>
            <td class="field-nullable">{{ nullable }}</td>
            <td>
                <button class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    {{/fields}}
</script>

<script id="model-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">
            <span class="field-title">{{ fieldTitle }}</span>
        </th>
        <td>
            {{#fillable}}
                <input class="fillable" name="fillable[]" type="checkbox" class="" checked>
            {{/fillable}}
            {{^fillable}}
                <input class="fillable" name="fillable[]" type="checkbox" class="">
            {{/fillable}}
        </td>
        <td>
            {{#hidden}}
                <input class="hidden" name="hidden[]" type="checkbox" class="" checked>
            {{/hidden}}
            {{^hidden}}
                <input class="hidden" name="hidden[]" type="checkbox" class="">
            {{/hidden}}
        </td>
    </tr>
</script>

<script id="model-row-multiple-template" type="x-tmpl-mustache">
    {{#fields}}
        <tr>
            <th scope="row">
                <span class="field-title">{{ fieldTitle }}</span>
            </th>
            <td>
                {{#fillable}}
                    <input class="fillable" name="fillable[]" type="checkbox" class="" checked>
                {{/fillable}}
                {{^fillable}}
                    <input class="fillable" name="fillable[]" type="checkbox" class="">
                {{/fillable}}
            </td>
            <td>
                {{#hidden}}
                    <input class="hidden" name="hidden[]" type="checkbox" class="" checked>
                {{/hidden}}
                {{^hidden}}
                    <input class="hidden" name="hidden[]" type="checkbox" class="">
                {{/hidden}}
            </td>
        </tr>
    {{/fields}}
</script>

<script id="validation-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">{{ fieldTitle }}</th>
        <td>
            <button class="btn btn-primary">
                <i class="fas fa-plus"></i>
            </button>
        </td>
    </tr>
</script>

<script id="validation-row-multiple-template" type="x-tmpl-mustache">
    {{#validations}}
        <tr>
            <th scope="row">{{ fieldTitle }}</th>
            <td>
                <button class="btn btn-primary">
                    <i class="fas fa-plus"></i>
                </button>
            </td>
        </tr>
    {{/validations}}
</script>

<script id="form-input-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">{{ fieldTitle }}</th>
        <td>
            <input type="checkbox" name="" value="" checked="">
        </td>
        <td>
            <select class="form-control" name="">
                <option value="" selected="" disabled="">Type</option>
                <option value="Text">Text</option>
                <option value="Number">Number</option>
                <option value="Password">Password</option>
                <option value="Email">Email</option>
                <option value="Textarea">Textarea</option>
                <!--
                <option value="Dropdown">Dropdown</option>
                <option value="Radio List">Radio List</option>
                <option value="Checkbox">Checkbox</option>
                <option value="Checkbox List">Checkbox List</option>
                <option value="Code Editor">Code Editor</option>
                <option value="Color Picker">Color Picker</option>
                <option value="Data Table">Data Table</option>
                <option value="File Upload">File Upload</option>
                <option value="Markdown Editor">Markdown Editor</option>
                -->
            </select>
        </td>
        <td>
            <button class="btn btn-primary form-input-type-options">
                <i class="fas fa-wrench"></i>
            </button>
        </td>
    </tr>
</script>

<script id="form-input-row-multiple-template" type="x-tmpl-mustache">
    {{#inputs}}
        <tr>
            <th scope="row">{{ fieldTitle }}</th>
            <td>
                <input type="checkbox" name="" value="" checked="">
            </td>
            <td>
                <select class="form-control" name="">
                    <option value="" selected="" disabled="">Type</option>
                    <option value="Text">Text</option>
                    <option value="Number">Number</option>
                    <option value="Password">Password</option>
                    <option value="Email">Email</option>
                    <option value="Textarea">Textarea</option>
                    <!--
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio List">Radio List</option>
                    <option value="Checkbox">Checkbox</option>
                    <option value="Checkbox List">Checkbox List</option>
                    <option value="Code Editor">Code Editor</option>
                    <option value="Color Picker">Color Picker</option>
                    <option value="Data Table">Data Table</option>
                    <option value="File Upload">File Upload</option>
                    <option value="Markdown Editor">Markdown Editor</option>
                    -->
                </select>
            </td>
            <td>
                <button class="btn btn-primary form-input-type-options">
                    <i class="fas fa-wrench"></i>
                </button>
            </td>
        </tr>
    {{/inputs}}
</script>

<script id="index-field-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row" class="field-title">{{ fieldTitle }}</th>
        <td>
            {{#show}}
                <input class="show" name="show[]" type="checkbox" checked>
            {{/show}}
            {{^show}}
                <input class="show" name="show[]" type="checkbox">
            {{/show}}
        </td>
    </tr>
</script>

<script id="index-field-row-multiple-template" type="x-tmpl-mustache">
    {{#fields}}
        <tr>
            <th scope="row" class="field-title">{{ fieldTitle }}</th>
            <td>
                {{#show}}
                    <input class="show" name="show[]" type="checkbox" checked>
                {{/show}}
                {{^show}}
                    <input class="show" name="show[]" type="checkbox">
                {{/show}}
            </td>
        </tr>
    {{/fields}}
</script>

<script id="controller-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">
            <span class="method">{{ method }}</span>
        </th>
        <td>
            {{#include}}
                <input class="include" name="include[]" type="checkbox" class="" checked>
            {{/include}}
            {{^include}}
                <input class="include" name="include[]" type="checkbox" class="">
            {{/include}}
        </td>
    </tr>
</script>

<script id="controller-row-multiple-template" type="x-tmpl-mustache">
    {{#methods}}
        <tr>
            <th scope="row">
                <span class="method">{{ method }}</span>
            </th>
            <td>
                {{#include}}
                    <input class="include" name="include[]" type="checkbox" class="" checked>
                {{/include}}
                {{^include}}
                    <input class="include" name="include[]" type="checkbox" class="">
                {{/include}}
            </td>
        </tr>
    {{/methods}}
</script>
