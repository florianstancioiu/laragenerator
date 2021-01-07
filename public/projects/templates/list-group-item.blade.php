<script id="list-group-item-template" type="x-tmpl-mustache">
    <li class="list-group-item">
        <i class="fas fa-crosshairs"></i>
        <span class="table-title">@{{ tableTitle }}</span>
        <button type="button" name="button" class="btn btn-danger">
            <i class="fas fa-times"></i>
        </button>
    </li>
</script>

<script id="list-group-item-multiple-template" type="x-tmpl-mustache">
    @{{#tables}}
        <li class="list-group-item">
            <i class="fas fa-crosshairs"></i>
            <span class="table-title">@{{ tableTitle }}</span>
            <button type="button" name="button" class="btn btn-danger">
                <i class="fas fa-times"></i>
            </button>
        </li>
    @{{/tables}}
</script>
