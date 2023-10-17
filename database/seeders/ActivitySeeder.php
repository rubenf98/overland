<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Activity::create([
            'name' => [
                "en" => "Fajã da Nogueira",
                "pt" => "Fajã da Nogueira",
            ],
            "category_id" => 1,
            "image" => "/images/activities/template.jpg",
            "price" => 250,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
                "pt" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Ponta do clérigo",
                "pt" => "Ponta do clérigo",
            ],
            "category_id" => 1,
            "image" => "/images/activities/template.jpg",
            "price" => 200,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
                "pt" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Boca da Voltas",
                "pt" => "Boca da Voltas",
            ],
            "category_id" => 1,
            "image" => "/images/activities/template.jpg",
            "price" => 350,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
                "pt" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
            ],
        ]);



        Activity::create([
            'name' => [
                "en" => "Caldeirão verde",
                "pt" => "Caldeirão verde",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 40,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
                "pt" => "Wind breaker,Camera,Bathing suit,Beach towel,Sun cream,Personal insurance",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Pico da Boneca",
                "pt" => "Pico da Boneca",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Pico Ruivo",
                "pt" => "Pico Ruivo",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Vereda dos Balcões",
                "pt" => "Vereda dos Balcões",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Vereda do Rei",
                "pt" => "Vereda do Rei",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Castelejo",
                "pt" => "Castelejo",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "S. Roque",
                "pt" => "S. Roque",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Silveira",
                "pt" => "Silveira",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Arieiro-Ruivo",
                "pt" => "Arieiro-Ruivo",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Amoreira (Pinheiro)",
                "pt" => "Amoreira (Pinheiro)",
            ],
            "category_id" => 2,
            "image" => "/images/activities/template.jpg",
            "price" => 35,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);





        Activity::create([
            'name' => [
                "en" => "Poncha tasting",
                "pt" => "Prova de poncha",
            ],
            "category_id" => 3,
            "image" => "/images/activities/template.jpg",
            "price" => 80,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);
        Activity::create([
            'name' => [
                "en" => "Sunrise at Picarouto",
                "pt" => "Nascer do Sol Picarouto",
            ],
            "category_id" => 3,
            "image" => "/images/activities/template.jpg",
            "price" => 80,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);
        Activity::create([
            'name' => [
                "en" => "Thematic park",
                "pt" => "Parque temático",
            ],
            "category_id" => 3,
            "image" => "/images/activities/template.jpg",
            "price" => 80,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);
        Activity::create([
            'name' => [
                "en" => "Various northside viewpoints",
                "pt" => "Miradouros do lado norte",
            ],
            "category_id" => 3,
            "image" => "/images/activities/template.jpg",
            "price" => 80,

            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
        ]);
    }
}
