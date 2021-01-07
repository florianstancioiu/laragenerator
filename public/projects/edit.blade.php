@extends('layouts.admin-project')

@section('title')
    Edit Project
@endsection

@section('page-title')
    Edit Project
@endsection

@section('breadcrumbs')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{ route('admin.projects.index') }}">Projects</a></li>
        <li class="breadcrumb-item active">Edit</li>
    </ol>
@endsection

@section('content')
    <div class="row">
        @include('admin.projects.partials.sidebar')

        <div class="col-md-9">
            <ul class="nav nav-tabs">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="table-fields-tab" data-toggle="tab" href="#table-fields" role="tab" aria-controls="table-fields" aria-selected="true">Table Fields</a>
                </li>
                <!--
                <li class="nav-item">
                    <a class="nav-link" id="seeder-tab" data-toggle="tab" href="#seeder" role="tab" aria-controls="seeder" aria-selected="false">Seeder</a>
                </li>
                -->
                <li class="nav-item">
                    <a class="nav-link" id="model-tab" data-toggle="tab" href="#model" role="tab" aria-controls="home" aria-selected="false">Model</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="relationships-tab" data-toggle="tab" href="#relationships" role="tab" aria-controls="relationships" aria-selected="false">Relationships</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="validation-tab" data-toggle="tab" href="#validation" role="tab" aria-controls="validation" aria-selected="false">Validation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="controller-tab" data-toggle="tab" href="#controller" role="tab" aria-controls="controller" aria-selected="false">Controller</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="forms-tab" data-toggle="tab" href="#forms" role="tab" aria-controls="forms" aria-selected="false">Forms</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="index-fields-tab" data-toggle="tab" href="#index-fields" role="tab" aria-controls="index-fields" aria-selected="false">Index Fields</a>
                </li>
            </ul>
            <div class="tab-content" id="tab-content">
                <div class="tab-pane fade show active" id="table-fields" role="tabpanel" aria-labelledby="table-fields-tab">
                    @include('admin.projects.partials.table-fields')
                </div>
                <div class="tab-pane fade show" id="seeder" role="tabpanel" aria-labelledby="seeder-tab">
                    @include('admin.projects.partials.seeder')
                </div>
                <div class="tab-pane fade show" id="model" role="tabpanel" aria-labelledby="model-tab">
                    @include('admin.projects.partials.model')
                </div>
                <div class="tab-pane fade show" id="relationships" role="tabpanel" aria-labelledby="relationships-tab">
                    @include('admin.projects.partials.relationships')
                </div>
                <div class="tab-pane fade show" id="validation" role="tabpanel" aria-labelledby="validation-tab">
                    @include('admin.projects.partials.validation')
                </div>
                <div class="tab-pane fade show" id="controller" role="tabpanel" aria-labelledby="controller-tab">
                    @include('admin.projects.partials.controller')
                </div>
                <div class="tab-pane fade show" id="forms" role="tabpanel" aria-labelledby="forms-tab">
                    @include('admin.projects.partials.forms')
                </div>
                <div class="tab-pane fade show" id="index-fields" role="tabpanel" aria-labelledby="index-fields-tab">
                    @include('admin.projects.partials.index-fields')
                </div>
            </div>

        </div>

    </div>

    @include('admin.projects.templates.default')
@endsection
