const modelFile = `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;
{{relationshipsNamespaces}}
class {{model}} extends Model
{
    use HasFactory;

    protected $table = "{{table}}";

    protected $fillable = [
        {{fillableFields}}
    ];

    protected $hidden = [
        {{hiddenFields}}
    ];
    {{relationships}}
}`;

export default modelFile;
