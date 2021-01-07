<script id="form-input-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">@{{ fieldTitle }}</th>
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
    @{{#inputs}}
        <tr>
            <th scope="row">@{{ fieldTitle }}</th>
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
    @{{/inputs}}
</script>
