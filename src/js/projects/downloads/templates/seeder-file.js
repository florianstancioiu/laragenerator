const seederFile = `<?php

namespace Database\\Seeders;

use App\\Models\\{{model}};
use Illuminate\\Database\\Seeder;

class {{model}}Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        {{model}}::factory(40)->create();
    }
}`;

export default seederFile;