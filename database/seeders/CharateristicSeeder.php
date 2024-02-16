<?php

namespace Database\Seeders;

use App\Models\Charateristic;
use App\Models\Vehicle;
use App\Models\VehicleHasCharateristic;
use Illuminate\Database\Seeder;

class CharateristicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $charateristics = [
            ['name' => 'Gas', 'nome' => 'Combustível'],
            ['name' => 'Capacity', 'nome' => 'Capacidade'],
            ['name' => 'Doors', 'nome' => 'Portas'],
            ['name' => 'Shift mode', 'nome' => 'Mudanças'],
            ['name' => 'Cooling', 'nome' => 'Refrigeração'],
            ['name' => 'Supports', 'nome' => 'Suportes'],
            ['name' => 'Health', 'nome' => 'Saúde'],
            ['name' => 'Cooking', 'nome' => 'Cozinhar'],
            ['name' => 'Furniture', 'nome' => 'Mobília'],
            ['name' => 'Sleep', 'nome' => 'Dormir'],
            ['name' => 'Chargers', 'nome' => 'Carregador'],
            ['name' => 'Bath', 'nome' => 'Banho'],
        ];

        foreach ($charateristics as $charateristic) {
            Charateristic::create(['name' => [
                'en' => $charateristic["name"],
                'pt' => $charateristic["nome"]
            ]]);
        }

        $vehicles = Vehicle::all();

        foreach ($vehicles as $vehicle) {
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 1,
                'value' => ['en' => 'Diesel', 'pt' => 'Diesel']
            ]);

            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 2,
                'value' => [
                    'en' => 'Three persons',
                    'pt' => 'Três pessoas'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 3,
                'value' => [
                    'en' => 'Two',
                    'pt' => 'Duas'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 4,
                'value' => [
                    'en' => 'Manual',
                    'pt' => 'Manual'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 5,
                'value' => [
                    'en' => 'AC',
                    'pt' => 'AC'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 6,
                'value' => [
                    'en' => 'Roof rack',
                    'pt' => 'Rack de teto'
                ]
            ]);

            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 7,
                'value' => [
                    'en' => 'First aid kit',
                    'pt' => 'Kit primeiros socorros'
                ]
            ]);

            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 8,
                'value' => [
                    'en' => 'Gas stove & Barbeque',
                    'pt' => 'Forno a gás & Churrasqueira'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 9,
                'value' => [
                    'en' => 'Camping Tables & Chairs',
                    'pt' => 'Mesa e cadeiras de campismo'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 10,
                'value' => [
                    'en' => 'Tent',
                    'pt' => 'Tenda'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 11,
                'value' => [
                    'en' => 'USB',
                    'pt' => 'USB'
                ]
            ]);
            VehicleHasCharateristic::create([
                'vehicle_id' => $vehicle->id,
                'charateristic_id' => 12,
                'value' => [
                    'en' => 'Solar shower',
                    'pt' => 'Chuveiro solar'
                ]
            ]);
        }
    }
}
