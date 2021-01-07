const controllerFile = `<?php

namespace App\\Http\\Controllers\\Admin;

use Illuminate\\Http\\Request;
use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\Store{{model}};
use App\\Http\\Requests\\Update{{model}};
use App\\Models\\{{model}};

class {{model}}Controller extends Controller
{
{{indexMethod}}{{createMethod}}{{storeMethod}}{{editMethod}}{{updateMethod}}{{destroyMethod}}
}
`;

export default controllerFile;
