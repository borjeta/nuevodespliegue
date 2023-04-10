<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        \App\Models\usuario::factory(10)->create();
        \App\Models\foodtruck::factory(10)->create();
    }
}
