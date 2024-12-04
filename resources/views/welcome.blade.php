<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">

    <title>Overland Madeira</title>

    <meta name="keywords"
        content="Overland Madeira, Madeira Island, levadas, tours, safari, campervans, outdoor adventures, island exploration, hiking, nature excursions, travel experiences, Madeira tours, campervan rentals, guided tours, Madeira safaris, adventure travel, scenic routes, off-road trips, camping, island exploration, natural beauty, Madeira destinations">
    <meta name="author" content="Rúben Freitas">
    <meta name="description"
        content="Welcome to Overland, your gateway to unparalleled exploration on the stunning island of Madeira. With a deep passion for nature and a commitment to providing exceptional experiences, we specialize in offering guided levada tours, exhilarating hiking expeditions, and convenient van rentals for unforgettable camping escapades.">



    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#067c60">
    <meta name="msapplication-TileColor" content="#067c60">
    <meta name="theme-color" content="#ffffff">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=Jockey+One&family=Montserrat:wght@300;400;500;700&display=swap"
        rel="stylesheet">
    <!-- Styles -->


    <style>
        html,
        body,
        #index {
            height: 100%;
            font-family: 'Montserrat', sans-serif;
            scroll-behavior: smooth;
            letter-spacing: 1.4px;
        }

        h1,
        h2,
        h3 {
            letter-spacing: auto;
            font-family: 'Cabin', sans-serif;
        }

        body {
            margin: 0;
            position: relative;
        }

        .rmdp-week-day {
            height: 90px;
        }

        .menu-modal .ant-drawer-body {
            padding: 0px;
        }
    </style>

</head>

<body>
    <div id="index">
        <script src="{{ mix('/js/app.js') }}"></script>
    </div>
</body>


</html>