<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class CouncilFilters extends QueryFilters
{
    public function name($string)
    {
        $this->query->where('name', 'like', '%' .  $string . '%');
    }
}
