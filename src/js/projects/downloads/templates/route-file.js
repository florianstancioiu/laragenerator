const modelFile = `<?php

use Illuminate\\Support\\Facades\\Auth;
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\Admin\\DashboardController;
{{namespaceImports}}
Auth::routes();

Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    {{resourceRoutes}}
});`;

export default modelFile;
