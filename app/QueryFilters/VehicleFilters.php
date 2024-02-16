<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class VehicleFilters extends QueryFilters
{
    public function title($string)
    {
        $this->query->where('title', 'like', '%' .  $string . '%');
    }

    public function registration($string)
    {
        $this->query->where('registration', 'like', '%' .  $string . '%');
    }
}
