<?php

namespace Database\Seeders;

use App\Models\Extra;
use Illuminate\Database\Seeder;

class ExtraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $extras = [
            [
                'name' => [
                    'en' => "Cleaning and management of the vehicle",
                    'pt' => "Limpeza e gestão do veículo"
                ], 'price' => 50, 'type' => 'uni', 'visible' => false, 'max' => 1
            ],
            [
                'name' => [
                    'en' => "Airport Delivery",
                    'pt' => "Entrega no aeroporto"
                ], 'price' => 70, 'type' => 'uni', 'visible' => true, 'max' => 1
            ],
            [
                'name' => [
                    'en' => "Sleeping bag and pillow",
                    'pt' => "Saco cama e almofada"
                ], 'price' => 14, 'type' => 'uni', 'visible' => true, 'max' => 3
            ],
            [
                'name' => [
                    'en' => "Paddle board",
                    'pt' => "Prancha de paddle"
                ], 'price' => 25, 'type' => 'uni', 'visible' => true, 'max' => 1
            ],
            [
                'name' => [
                    'en' => "Fridge",
                    'pt' => "Frigorífico"
                ], 'price' => 35, 'type' => 'uni', 'visible' => true, 'max' => 1
            ],
            [
                'name' => [
                    'en' => "Portable WC",
                    'pt' => "WC portátil"
                ], 'price' => 20, 'type' => 'uni', 'visible' => true, 'max' => 1
            ],
            [
                'name' => [
                    'en' => "Power box and solar panels",
                    'pt' => "Gerador e panéis solares"
                ], 'price' => 45, 'type' => 'uni', 'visible' => true, 'max' => 1
            ],
        ];

        foreach ($extras as $item) {
            Extra::create([
                'name' => [
                    'en' => $item["name"]["en"],
                    'pt' => $item["name"]["pt"]
                ],
                'max' => $item["max"],
                'type' => $item["type"],
                'price' => $item["price"],
                'visible' => $item["visible"],
            ]);
        }
    }
}
