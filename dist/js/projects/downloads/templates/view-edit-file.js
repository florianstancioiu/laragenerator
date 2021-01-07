const viewEditFile = `@extends('layouts.admin')

@section('title')
    Edit {{model}}
@endsection

@section('page-title')
    Edit {{model}}
@endsection

@section('breadcrumbs')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{ route('admin.{{table}}.index') }}">Posts</a></li>
        <li class="breadcrumb-item active">Edit</li>
    </ol>
@endsection

@section('content')
    <div class="col-md-12">
        <!-- general form elements -->
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Edit {{model}}</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form" action="{{ route('admin.{{table}}.update', [ 'id' => ${{lowercaseModel}}->id ]) }}" method="POST" enctype="multipart/form-data">
                @method("PUT")
                @csrf
                <div class="card-body">
                    {{formInputs}}
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Edit</button>
                </div>
            </form>
        </div>
    </div>
@endsection
`;

export default viewEditFile;
