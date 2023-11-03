<?php

namespace Database\Seeders;

use App\Models\Council;
use Illuminate\Database\Seeder;

class CouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Council::create(['name' => "Funchal", 'price' => 25]);
        Council::create(['name' => "Calheta", 'price' => 30]);
        Council::create(['name' => "Câmara de Lobos", 'price' => 25]);
        Council::create(['name' => "Machico", 'price' => 15]);
        Council::create(['name' => "Ponta de Sol", 'price' => 30]);
        Council::create(['name' => "Porto Moniz", 'price' => 15]);
        Council::create(['name' => "Ribeira Brava", 'price' => 25]);
        Council::create(['name' => "Santa Cruz", 'price' => 15]);
        Council::create(['name' => "Santana", 'price' => 10]);
        Council::create(['name' => "São Vicente", 'price' => 15]);
    }
}
