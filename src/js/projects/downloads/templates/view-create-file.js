const viewCreateFile = `@extends('layouts.admin')

@section('title')
    Create {{model}}
@endsection

@section('page-title')
    Create {{model}}
@endsection

@section('breadcrumbs')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{ route('admin.{{table}}.index') }}">Posts</a></li>
        <li class="breadcrumb-item active">Create</li>
    </ol>
@endsection

@section('content')
    <div class="col-md-12">
    <!-- general form elements -->
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Create {{model}}</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form" action="{{ route('admin.{{table}}.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="card-body">
                    {{formInputs}}
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    </div>
@endsection
`;

export default viewCreateFile;
