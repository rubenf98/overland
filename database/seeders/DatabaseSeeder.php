<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(CategorySeeder::class);
        $this->call(ActivitySeeder::class);
        $this->call(CouncilSeeder::class);
        $this->call(ExtraSeeder::class);
        $this->call(InsuranceSeeder::class);
        $this->call(VehicleSeeder::class);
        $this->call(CharateristicSeeder::class);
    }
}
