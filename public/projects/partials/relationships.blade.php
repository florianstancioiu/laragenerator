<h3>Relationships</h3>
<span>generate the relationships for the selected table</span>

<table class="table">
    <thead class="thead-light">
        <tr>
            <th scope="col">Title/Method</th>
            <th scope="col">Type</th>
            <th scope="col">Foreign Model</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">users</th>
            <td>Belongs To</td>
            <td>User::class</td>
            <td>
                <button class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">users</th>
            <td>Belongs To</td>
            <td>User::class</td>
            <td>
                <button class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">
                <input type="text" class="form-control" placeholder="Title/Method" />
            </th>
            <td>
                <select name="" id="" class="form-control">
                    <option value="" selected disabled>Type</option>
                    <option value="">string</option>
                    <option value="">integer</option>
                </select>
            </td>
            <td>
                <select name="" id="" class="form-control">
                    <option value="" selected disabled>Foreign Model</option>
                    <option value="">User</option>
                    <option value="">Post</option>
                    <option value="">Products</option>
                </select>
            </td>
            <td>
                <button class="btn btn-primary">
                    <i class="fas fa-plus"></i>
                </button>
            </td>
        </tr>
    </tfoot>
</table>
