<script id="controller-row-template" type="x-tmpl-mustache">
    <tr>
        <th scope="row">
            <span class="method">@{{ method }}</span>
        </th>
        <td>
            @{{#include}}
                <input class="include" name="include[]" type="checkbox" class="" checked>
            @{{/include}}
            @{{^include}}
                <input class="include" name="include[]" type="checkbox" class="">
            @{{/include}}
        </td>
    </tr>
</script>

<script id="controller-row-multiple-template" type="x-tmpl-mustache">
    @{{#methods}}
        <tr>
            <th scope="row">
                <span class="method">@{{ method }}</span>
            </th>
            <td>
                @{{#include}}
                    <input class="include" name="include[]" type="checkbox" class="" checked>
                @{{/include}}
                @{{^include}}
                    <input class="include" name="include[]" type="checkbox" class="">
                @{{/include}}
            </td>
        </tr>
    @{{/methods}}
</script>
