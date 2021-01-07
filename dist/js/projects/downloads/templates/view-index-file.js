const viewIndexFile = `@extends('layouts.admin')

@section('title')
    {{modelPlural}}
@endsection

@section('page-title')
    {{modelPlural}}
    <a href="{{ route('admin.{{table}}.create') }}" class="btn btn-sm btn-primary">Add +</a>
@endsection

@section('breadcrumbs')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Admin</a></li>
        <li class="breadcrumb-item active">{{modelPlural}}</li>
    </ol>
@endsection

@section('content')
    <div class="card">
        <!-- /.card-header -->
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        {{tableHeaders}}
                    </tr>
                </thead>
                <tbody>
                    @foreach(\${{table}} as $val)
                        <tr>
                            {{tableRows}}
                            <td class="actions-cell">
                                <a href="{{ route('admin.{{table}}.edit', ['id' => $val->id]) }}" class="btn btn-primary btn-sm">
                                    <i class="fas fa-wrench"></i>
                                    Edit
                                </a>

                                <form action="{{ route('admin.{{table}}.delete', ['id' => $val->id]) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-danger btn-sm" type="submit">
                                        <i class="fas fa-trash"></i>
                                        Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <!-- /.card-body -->

        <div class="card-footer clearfix">
            {{ \${{table}}->links() }}
        </div>
    </div>
    <!-- /.card -->
@endsection
`;

export default viewIndexFile;
