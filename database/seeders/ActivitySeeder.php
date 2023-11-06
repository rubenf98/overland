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
            "image" => "/images/activities/fajanogueira.jpg",
            "price" => 10,
            "minimum" => 200,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Ponta do clérigo",
                "pt" => "Ponta do clérigo",
            ],
            "category_id" => 1,
            "image" => "/images/activities/pontaclerigo.jpg",
            "price" => 10,
            "minimum" => 200,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Boca da Voltas",
                "pt" => "Boca da Voltas",
            ],
            "category_id" => 1,
            "image" => "/images/activities/bocavoltas.jpg",
            "price" => 10,
            "minimum" => 200,
            'description1' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
            'description2' => [
                "en" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
                "pt" => "Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of color that changes every day and reflects in the passive ocean of our coast.",
            ],
            'description3' => [
                "en" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
                "pt" => "We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers, or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.",
            ],
        ]);




        Activity::create([
            'name' => [
                "en" => "PR1. Arieiro-Ruivo",
                "pt" => "PR1. Arieiro-Ruivo",
            ],
            "category_id" => 2,
            "image" => "/images/activities/areeiro.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "PR1 - Vereda do Areeiro - is a trail that connects three iconic points in Madeira, as they are the highest peaks on the island. Thus, it starts at Pico do Areeiro (1818 m), passes through Pico das Torres (1851 m) and ends at Pico Ruivo (1862 m).",
                "pt" => "O PR1 - Vereda do Areeiro - é um trilho que liga três pontos icónicos da Madeira, por serem os picos mais altos da ilha. Assim, começa no Pico do Areeiro (1818 m), passa pelo Pico das Torres (1851 m) e termina no Pico Ruivo (1862 m).",
            ],
            'description2' => [
                "en" => "Vereda do Areeiro is a 7 km route, of medium difficulty and lasting 3h30, which runs through part of the Central Mountain Massif (an area that is part of the Natura 2000 Network). During the route, which begins near the Pico do Areeiro viewpoint, you will pass through tunnels excavated in the volcanic tuffs — which served as shelter for cattle and shepherds — and steep slopes.",
                "pt" => "A Vereda do Areeiro é um trajeto de 7 km, de dificuldade média e duração de 3h30, que percorre parte do Maciço Montanhoso Central (área integrante da Rede Natura 2000). Durante o percurso, que principia junto ao miradouro do Pico do Areeiro, passará por túneis escavados nos tufos vulcânicos — que serviam de abrigo ao gado e aos pastores — e por declives acentuados.",
            ],
            'description3' => [
                "en" => "Vereda do Areeiro is a 7 km route, of medium difficulty and lasting 3h30, which runs through part of the Central Mountain Massif (an area that is part of the Natura 2000 Network). During the route, which begins near the Pico do Areeiro viewpoint, you will pass through tunnels excavated in the volcanic tuffs — which served as shelter for cattle and shepherds — and steep slopes.",
                "pt" => "Para chegar ao Pico Ruivo, terá de contornar o Pico das Torres, através de uma escadaria íngreme escavada na rocha. Contudo, o maior desafio da Vereda do Areeiro fica guardado para o final: a subida até à Casa de Abrigo do Pico Ruivo. Por fim, chegará a uma formação rochosa, popularmente nomeada de “Homem em pé”, onde encontrará a vereda com acesso à Achada do Teixeira, que permite dar continuidade à caminhada.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "PR1.2. Pico Ruivo",
                "pt" => "PR1.2. Pico Ruivo",
            ],
            "category_id" => 2,
            "image" => "/images/activities/picoruivo.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "This route of medium difficulty will allow you to enjoy the unparalleled experience of reaching the highest point of the archipelago: Pico Ruivo, at 1862 meters above sea level. Starting at Achada do Teixeira, where you can visit the rock formation called “Men em pé”, Vereda do Pico Ruivo is 2.8 km long, to which are added the 2.8 km return. Its estimated duration, round trip, is 1h30.",
                "pt" => "Este percurso de dificuldade média irá permitir-lhe desfrutar da experiência inigualável de chegar ao ponto mais elevado do arquipélago: o Pico Ruivo, a 1862 metros de altitude. Tendo início na Achada do Teixeira, onde pode visitar a formação rochosa nomeada de “Homem em pé”, a Vereda do Pico Ruivo conta com uma extensão de 2,8 km, aos quais são adicionados os 2,8 km de regresso. A sua duração estimada, com ida e volta, é de 1h30.",
            ],
            'description2' => [
                "en" => "However, next to the Pico Ruivo Shelter you will find access to three other trails. Therefore, you will have the option of heading to different points on the island, taking the PR1 Vereda do Pico Areeiro, PR 1.3 Vereda da Encumeada or PR 1.1 Vereda da Ilha routes.",
                "pt" => "No entanto, junto à Casa de Abrigo do Pico Ruivo encontra acesso a outros três trilhos. Assim, terá à disposição a alternativa de seguir para pontos diferentes da ilha, enveredando pelos percursos PR1 Vereda do Pico Areeiro, PR 1.3 Vereda da Encumeada ou PR 1.1 Vereda da Ilha.",
            ],
            'description3' => [
                "en" => "Along the Vereda do Pico Ruivo, you will pass several shelters, installed to respond to the sudden climatic variations that are often felt in this area. Prepare yourself for the eventuality of being immersed in a sea of ​​clouds, or even above them — you won't soon forget these images.",
                "pt" => "No decorrer da Vereda do Pico Ruivo, passará por vários abrigos, instalados para dar resposta às bruscas variações climáticas que frequentemente se fazem sentir nesta zona. Prepare-se para a eventualidade de ficar mergulhado num mar de nuvens, ou mesmo acima delas — tão cedo não esquecerá essas imagens.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "PR6. 25 Fontes",
                "pt" => "PR6. 25 Fontes",
            ],
            "category_id" => 2,
            "image" => "/images/activities/25fontes.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "Starting at Estrada Regional no. 105, in Rabaçal, Levada das 25 Fontes is one of the most popular walking routes among tourists and locals. With a distance of 4.3 km and an estimated duration of 3 hours, this is the right trail for anyone who wants to be surprised by the exuberance of Nature",
                "pt" => "Tendo início na Estrada Regional n.º 105, no Rabaçal, a Levada das 25 Fontes é um dos trajetos pedestres mais populares entre turistas e locais. Com uma distância de 4,3 km e uma duração prevista de 3h, este é o trilho certo para qualquer pessoa que se queira deixar surpreender pela exuberância da Natureza",
            ],
            'description2' => [
                "en" => "Even though it is practically parallel to Levada do Risco (PR 6.1), sharing the same starting point, this route of medium difficulty will take you to see places of interest and scenes that are different from that one. Surrounded by a superb natural environment, the Levada das 25 Fontes gives you the possibility of discovering (and certainly calmly contemplating) the Lagoa das 25 Fontes, fed by the waters that descend from Paul da Serra and which appear here through 25 points. An image with unique contours.",
                "pt" => "Ainda que seja praticamente paralelo à Levada do Risco (PR 6.1), partilhando o mesmo ponto de partida, este percurso de dificuldade média levá-lo-á a conhecer locais de interesse e cenários distintos daquele. Pautado por uma envolvente natural soberba, a Levada das 25 Fontes dá-lhe a possibilidade de descobrir (e certamente contemplar com calma) a Lagoa das 25 Fontes, alimentada pelas águas que descem do Paul da Serra e que aqui aparecem através de 25 pontos. Uma imagem de contornos únicos.",
            ],
            'description3' => [
                "en" => "However, before arriving at this place, you will have the opportunity to be surprised by some landscapes that you will find along Levada das 25 Fontes. The views over the Ribeira da Janela valley, for example, are impressive due to the verdant vivacity characteristic of the Laurissilva forest.",
                "pt" => "Porém, antes de chegar a este local, terá a oportunidade de se surpreender com algumas paisagens que encontrará ao longo da Levada das 25 Fontes. As vistas sobre o vale da Ribeira da Janela, por exemplo, impressionam pela vivacidade verdejante característica da floresta Laurissilva.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "PR6.2. Levada do Alecrim",
                "pt" => "PR6.2. Levada do Alecrim",
            ],
            "category_id" => 2,
            "image" => "/images/activities/alecrim.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "Starting on Regional Road No. 105, in the Rabaçal area, this trail follows the Levada do Alecrim, located at 1300 meters above sea level, until reaching its source, in Ribeira do Lajeado. It is 3.5 km (one way) full of cinematic scenes in close proximity to Nature.",
                "pt" => "Tendo início na Estrada Regional n.º 105, na zona do Rabaçal, este trilho acompanha a Levada do Alecrim, localizada a 1300 metros de altitude, até chegar à sua nascente, na Ribeira do Lajeado. São 3,5 km (ida) repletos de cenários cinematográficos em estreita proximidade com a Natureza.",
            ],
            'description2' => [
                "en" => "With an estimated duration of 2h30, and on a route considered easy, the PR 6.2 Levada do Alecrim offers wide views over the Rabaçal valley and Ribeira da Janela. The green tones prevail, due to the characteristic density of the Laurissilva forest, a UNESCO World Heritage Site. Furthermore, you will find some heather tunnels here, which offer a unique atmosphere to the walking experience.",
                "pt" => "Com uma duração estimada de 2h30, e num percurso considerado fácil, a PR 6.2 Levada do Alecrim oferece vistas amplas sobre o vale do Rabaçal e da Ribeira da Janela. Os tons verdes impõem-se, em virtude da densidade característica da floresta Laurissilva, Património Mundial pela UNESCO. Além disso, encontrará aqui alguns túneis de urzes, que oferecem uma envolvência singular à experiência de caminhada.",
            ],
            'description3' => [
                "en" => "The biggest surprise is, however, reserved for the moment we arrive at the source of Levada do Alecrim, a levada built with the aim of supplying the Calheta Hydroelectric Power Station. In this place, you can refresh your body next to the “Dona Beja” Lagoon, which feeds the Lagoa do Vento waterfall.",
                "pt" => "A surpresa maior fica, no entanto, reservada para o momento da chegada à nascente da Levada do Alecrim, uma levada construída com o intuito de abastecer a Central Hidroelétrica da Calheta. Neste local, poderá retemperar o corpo junto à Lagoa da “Dona Beja”, que alimenta a queda de água da Lagoa do Vento.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "PR8. Ponta de São Lourenço",
                "pt" => "PR8. Ponta de São Lourenço",
            ],
            "category_id" => 2,
            "image" => "/images/activities/saolourenco.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "This 3 km trail (+ 3 km return) will take you to discover the eastern tip of the island, with panoramic views of the north and south sides. Of medium difficulty, and expected to last 2h30, the PR 8 Vereda da Ponta de São Lourenço runs along the peninsula with this same name.",
                "pt" => "Este trilho de 3 km (+ 3 km de regresso) levá-lo-á a descobrir a ponta este da ilha, com vistas panorâmicas sobre os lados norte e sul. De dificuldade média, e duração prevista de 2h30, o PR 8 Vereda da Ponta de São Lourenço percorre a península com este mesmo nome.",
            ],
            'description2' => [
                "en" => "Even though it is an undulating path, the good conditions of Vereda da Ponta de São Lourenço offer a pleasant walking experience. It is a peninsula of volcanic origin, mostly basalt, but with some formations of limestone sediments. Following it, there are two islets: Ilhéu do Desembarcadouro and Ilhéu do Farol.",
                "pt" => "Ainda que seja um caminho ondulante, as boas condições da Vereda da Ponta de São Lourenço oferecem uma experiência de caminhada agradável. É uma península de origem vulcânica, maioritariamente basáltica, mas com algumas formações de sedimentos calcários. No seu seguimento, encontram-se dois ilhéus: o Ilhéu do Desembarcadouro e o Ilhéu do Farol.",
            ],
            'description3' => [
                "en" => "The semi-arid climate and exposure to northern winds justify the low vegetation and absence of trees in this location, contrasting with the rest of the island. It is a heritage site classified as a Partial Natural Reserve, home to rare plants and diverse fauna. In addition to one of the largest colonies of seagulls in the region and protected seabirds, such as the shearwater or the black soul, in Vereda da Ponta de São Lourenço you can, with any luck, observe marine species in their habitat, namely the fur seal. At the end of the walk along Vereda da Ponta de São Lourenço, enjoy a well-deserved swim at the Sardinha pier.",
                "pt" => "O clima semiárido e a exposição aos ventos do Norte justificam a vegetação rasteira e a ausência de árvores deste local, contrastante com o resto da ilha. Trata-se de património classificado como Reserva Natural Parcial, que abriga plantas raras e uma fauna diversificada. Além de uma das maiores colónias de gaivotas da região e de aves marinhas protegidas, como a cagarra ou a alma-negra, na Vereda da Ponta de São Lourenço poderá, com alguma sorte, observar espécies marinhas no seu habitat, nomeadamente o lobo-marinho. No final da caminhada pela Vereda da Ponta de São Lourenço, desfrute de um merecido mergulho no cais do Sardinha.",
            ],
        ]);


        Activity::create([
            'name' => [
                "en" => "PR9. Caldeirão verde",
                "pt" => "PR9. Caldeirão verde",
            ],
            "category_id" => 2,
            "image" => "/images/activities/caldeiraoverde.jpg",
            "price" => 10,
            "minimum" => 200,
            'description1' => [
                "en" => "With a distance of 8.7 km (+ 8.7 km return), the PR 9 Levada do Caldeirão Verde is of medium difficulty and offers hikers the possibility of exploring the orography of the island's interior, known for its monumental landscapes.",
                "pt" => "Com uma distância de 8,7 km (+ 8,7 km de regresso), o PR 9 Levada do Caldeirão Verde tem dificuldade média e oferece aos caminhantes a possibilidade de explorar a orografia do interior da ilha, conhecida pelas suas paisagens monumentais.",
            ],
            'description2' => [
                "en" => "The start of the Levada do Caldeirão Verde, which is expected to last 6h30, is immediately remarkable. This is because the Queimadas Shelter, in the Queimadas Forest Park, maintains the original characteristics of the Santana Typical Houses, triangular in shape and with the traditional thatched roof.",
                "pt" => "O início da Levada do Caldeirão Verde, que tem uma duração prevista de 6h30, é desde logo marcante. Isto porque a Casa de Abrigo das Queimadas, no Parque Florestal das Queimadas, mantém as características originais das Casas Típicas de Santana, de formato triangular e com o tradicional telhado de colmo.",
            ],
            'description3' => [
                "en" => "Shortly after the beginning, you will find the Caldeirão Verde levada terrace, where Nature reveals itself exotically. We are in the middle of the Laurissilva forest, where abundant water is routed through this historic levada, built in the 18th century, to the agricultural land in the parish of Faial.",
                "pt" => "Pouco depois do princípio, encontrará a esplanada da levada do Caldeirão Verde, onde a Natureza se revela com exotismo. Estamos em plena floresta Laurissilva, onde a água abundante é encaminhada através desta levada já histórica, construída no século XVIII, para os terrenos agrícolas da freguesia do Faial.",
            ],
        ]);





        Activity::create([
            'name' => [
                "en" => "PR11. Vereda dos Balcões",
                "pt" => "PR11. Vereda dos Balcões",
            ],
            "category_id" => 2,
            "image" => "/images/activities/balcoes.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "Vereda dos Balcões is a small trail, 1.5 km long (+ 1.5 km return), which takes you to enjoy the views from Miradouro dos Balcões. Starting on Estrada Regional no. 103, in Ribeiro Frio, this easy trail, with an estimated duration of 1h30, follows the Levada da Serra do Faial.",
                "pt" => "A Vereda dos Balcões é um pequeno trilho, de 1,5 km (+ 1,5 km de regresso), que o leva a desfrutar das vistas do Miradouro dos Balcões. Com início na Estrada Regional n.º 103, no Ribeiro Frio, este trilho de dificuldade fácil, e duração prevista de 1h30, acompanha a Levada da Serra do Faial.",
            ],
            'description2' => [
                "en" => "On the route along Vereda dos Balcões you will have the opportunity to come across Madeira's indigenous and endemic species, which offer different shades of green to the Laurissilva forest. During the walk, pay attention to the tree species from the Lauraceae family and the exotic species that are distributed along the trail's banks.",
                "pt" => "No percurso pela Vereda dos Balcões terá a oportunidade de se cruzar com as espécies indígenas e endémicas da Madeira, que oferecem diferentes tonalidades de verde à floresta Laurissilva. Durante a caminhada, preste atenção às espécies arbóreas da família das Lauráceas e às espécies exóticas que se distribuem nas margens do trilho.",
            ],
            'description3' => [
                "en" => "At the end of Vereda dos Balcões, you reach Miradouro dos Balcões, where you will glimpse a grandiose scenery. You will find valleys covered in the lush, dense green laurel forest. From here you can also see the Fajã da Nogueira Hydroelectric Power Station and, on days with good visibility, the island's central mountain range, where Pico do Areeiro, Pico das Torres and Pico Ruivo stand out.",
                "pt" => "No final da Vereda dos Balcões, chega ao Miradouro dos Balcões, onde vislumbrará um cenário de grandiosidade. Encontrará vales cobertos pela mancha verdejante e densa característica da Laurissilva. Daqui pode ainda observar a Central Hidroelétrica da Fajã da Nogueira e, em dias de boa visibilidade, a cordilheira central da ilha, onde se destacam o Pico do Areeiro, o Pico das Torres e o Pico Ruivo.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "PR18. Vereda do Rei",
                "pt" => "PR18. Vereda do Rei",
            ],
            "category_id" => 2,
            "image" => "/images/activities/rei.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "The Levada do Rei, 5.3 km long (+ 5.3 km return), will take you to discover the exuberance of the island's nature, until you reach a unique place considered a natural sanctuary. The expected duration of the walk, classified as medium difficulty, is 3h30.",
                "pt" => "A Levada do Rei, de 5,3 km (+ 5,3 km de regresso), levá-lo-á a descobrir a exuberância da natureza da ilha, até chegar a um local singular considerado um santuário natural. A duração prevista da caminhada, classificada de dificuldade média, é de 3h30.",
            ],
            'description2' => [
                "en" => "The starting point of Levada do Rei is located at the Quebradas Water Treatment Plant, in São Jorge. Initially, you will pass through an exotic forest area, where you can observe the typical agricultural landscapes of São Jorge and Santana. Along the way, you can also admire the tunnels formed by the diverse vegetation of this area.",
                "pt" => "O ponto de partida da Levada do Rei situa-se na Estação de Tratamento de Águas nas Quebradas, em São Jorge. Inicialmente, passará por uma zona florestal exótica, onde é possível observar as típicas paisagens agrícolas de São Jorge e de Santana. No decorrer do caminho, poderá ainda contemplar os túneis formados pela vegetação diversa desta área.",
            ],
            'description3' => [
                "en" => "The verdant landscape that beautifies Levada do Rei is made possible by the great abundance of water found here. However, the most special moment of the walk is saved for the arrival at Ribeiro Bonito, an isolated natural sanctuary covered by the dense vegetation characteristic of the Laurissilva forest.",
                "pt" => "A paisagem verdejante que embeleza a Levada do Rei é possibilitada pela grande abundância de água que aqui se regista. Porém, o momento mais especial da caminhada fica guardado para a chegada ao Ribeiro Bonito, um santuário natural isolado e coberto pela vegetação densa característica da floresta Laurissilva.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Castelejo",
                "pt" => "Castelejo",
            ],
            "category_id" => 2,
            "image" => "/images/activities/castelejo.jpg",
            "price" => 10,
            "minimum" => 200,

            'description1' => [
                "en" => "The levada of Castelejo is a route that allows you to have a broad view of the agricultural panorama of the municipality of Machico, in a harmonious environment between the art of good walking and the connection with nature",
                "pt" => "A levada do Castelejo é um percurso que permite ter uma visão alargada do panorama agrícola do concelho de Machico, numa envolvência harmoniosa entre a arte de bem caminhar e a ligação com a natureza",
            ],
            'description2' => [
                "en" => "Agricultural fields are a constant throughout almost the entire route, making it possible to appreciate the main local crops, with a strong predominance of fruit and vegetables from each season. As we walk inland, the climate becomes more humid and the first Laurissilva species begin to appear, with the largest spot at the end of the levada.",
                "pt" => "Os campos agrícolas são uma constante em quase todo o percurso sendo possível apreciar as principais culturas locais, com forte predominância para as hortofrutícolas de cada uma das épocas. À medida que caminhamos para o interior, o clima torna-se mais húmido e as primeiras espécies da Laurissilva começam a surgir, verificando-se a maior mancha no final da levada",
            ],
            'description3' => [
                "en" => "The Levada do Castelejo watercourse is normally active and runs the entire length from Ribeiro Frio to Porto da Cruz, supplying agricultural fields and the primary sector of the municipality of Machico.",
                "pt" => "O curso de água da Levada do Castelejo normalmente está ativo e percorre toda a extensão desde o Ribeiro Frio até ao Porto da Cruz, abastecendo os campos agrícolas e o setor primário do concelho de Machico.",
            ],
        ]);

        Activity::create([
            'name' => [
                "en" => "Miradouro Pico da Boneca",
                "pt" => "Viewpoint of Pico da Boneca",
            ],
            "category_id" => 2,
            "image" => "/images/activities/picoboneca.jpg",
            "price" => 10,
            "minimum" => 200,
            'description1' => [
                "en" => "From this viewpoint, you can enjoy a breathtaking view of the lush green mountains, deep valleys and the Atlantic Ocean. The landscape is characterized by rolling hills and dramatic cliffs that descend to the sea.",
                "pt" => "A partir deste miradouro, pode-se desfrutar de uma vista deslumbrante das montanhas verdejantes, vales profundos e do oceano Atlântico. A paisagem é caracterizada por colinas ondulantes e penhascos dramáticos que descem até o mar.",
            ],
            'description2' => [
                "en" => "It is located in a mountainous and isolated area, providing a peaceful and serene environment. It is a perfect place to contemplate nature, go hiking or simply relax and enjoy the beauty of the scenery. In addition to the panoramic view, the Pico da Boneca Viewpoint may offer limited amenities, such as benches for resting. It is important to respect the natural environment and leave the place as you found it, taking away any rubbish or waste.",
                "pt" => "Está localizado em uma área montanhosa e isolada, proporcionando um ambiente tranquilo e sereno. É um local perfeito para contemplar a natureza, fazer caminhadas ou simplesmente relaxar e apreciar a beleza do cenário. Além da vista panorâmica, o Miradouro do Pico da Boneca pode oferece comodidades limitadas, como bancos para descanso. É importante respeitar o ambiente natural e deixar o local como o encontrou, levando embora qualquer lixo ou resíduos.",
            ],
            'description3' => [
                "en" => "Santana is a region rich in natural beauty, and the Pico da Boneca Viewpoint is just one of the many charming viewpoints found in the region. Exploring these tourist spots offers the opportunity to connect with nature and appreciate the island's magnificence.",
                "pt" => "Santana é uma região rica em belezas naturais, e o Miradouro do Pico da Boneca é apenas um dos muitos miradouros encantadores encontrados na região. A exploração desses pontos turísticos oferece a oportunidade de se conectar com a natureza e apreciar a magnificência da ilha.",
            ],
        ]);





        Activity::create([
            'name' => [
                "en" => "Poncha tasting",
                "pt" => "Prova de poncha",
            ],
            "category_id" => 3,
            "image" => "/images/activities/poncha.jpg",
            "price" => 10,
            "minimum" => 200,
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
            "image" => "/images/activities/picarouto.jpg",
            "price" => 10,
            "minimum" => 200,
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
                "en" => "Santana's thematic park",
                "pt" => "Parque temático de Santana",
            ],
            "category_id" => 3,
            "image" => "/images/activities/parquetematico.jpg",
            "price" => 10,
            "minimum" => 200,
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
            "image" => "/images/activities/miradouro.jpg",
            "price" => 10,
            "minimum" => 200,
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
                "en" => "Fanal florest",
                "pt" => "Floresta do fanal",
            ],
            "category_id" => 3,
            "image" => "/images/activities/fanal.jpg",
            "price" => 10,
            "minimum" => 200,
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
