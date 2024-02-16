<?php

namespace Database\Seeders;

use App\Models\Price;
use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        $prices = [185, 185, 185, 185, 195, 195, 195, 195, 195, 185, 185, 185];


        $vehicle = Vehicle::create([
            'status' => true,
            'registration' => '29-50-PH',
            'image' => '/storage/vehicles/2950ph.jpeg',
            'title' => 'Nissan Patrol GR',
            'description' => [
                'en' => 'Featuring off-road components and camping gear. We built this Nissan Patrol to explore anywhere you want in Madeira Island.',
                'pt' => 'Featuring off-road components and camping gear. We built this Nissan Patrol to explore anywhere you want in Madeira Island.'
            ],
        ]);

        foreach ($months as $key => $month) {
            Price::create([
                'vehicle_id' => $vehicle->id,
                'price' => $prices[$key],
                'month' => $month,
            ]);
        }
    }
}
