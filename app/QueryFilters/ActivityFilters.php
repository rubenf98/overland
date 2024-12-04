<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class ActivityFilters extends QueryFilters
{
    public function search($string)
    {
        $this->query->where(function ($query) use ($string) {
            $query->where('name', 'like', '%' . $string . '%')
                ->orWhereHas('category', function ($q) use ($string) {
                    $q->where('name', 'like', '%' .  $string . '%');
                });
        });
    }

    public function categoryId($id)
    {
        $this->query->where('category_id', $id);
    }

    public function category($string)
    {
        $this->query->whereHas('category', function ($movies) use ($string) {
            $movies->where('name', 'like', '%' .  $string . '%');
        });
    }

    public function name($string)
    {
        $this->query->where('name', 'like', '%' .  $string . '%');
    }

    public function partner($partner)
    {
        $this->query->whereHas('partners', function ($q) use ($partner) {
            $q->where('partner.id', $partner);
        });
    }
}
