<?php

namespace Database\Seeders;

use App\Models\Insurance;
use Illuminate\Database\Seeder;

class InsuranceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Insurance::create([
            'name' => [
                'pt' => 'Básico',
                'en' => 'Basic',
            ],
            'description' => [
                'pt' => 'Assistência rodoviária até 150km/dia',
                'en' => 'Road assistance up to 150km/day',
            ],
            'waiver' => 2000,
            'price' => 15
        ]);

        Insurance::create([
            'name' => [
                'pt' => 'Padrão',
                'en' => 'Standard',
            ],
            'description' => [
                'pt' => 'Assistência rodoviária até 200km/dia',
                'en' => 'Road assistance up to 200km/day',
            ],
            'waiver' => 1000,
            'price' => 25
        ]);

        Insurance::create([
            'name' => [
                'pt' => 'Premium',
                'en' => 'Premium',
            ],
            'description' => [
                'pt' => 'Seguro de vidros e pneus com assistência rodoviária até 300km/dia',
                'en' => 'Window and tire insurance with road assistance up to 300km/day',
            ],
            'waiver' => 600,
            'price' => 35
        ]);
    }
}
