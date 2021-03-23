const factoryFile = `<?php

namespace Database\Factories;

use App\\Models\\{{model}};
use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class {{model}}Factory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = {{model}}::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            {{fakerFields}}
        ];
    }
}`;

export default factoryFile;