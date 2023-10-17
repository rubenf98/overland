<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name' => [
                "en" => "safari",
                "pt" => "safari",
            ],
        ]);

        Category::create([
            'name' => [
                "en" => "levada",
                "pt" => "levada",
            ],
        ]);

        Category::create([
            'name' => [
                "en" => "tour",
                "pt" => "tour",
            ],
        ]);
    }
}
