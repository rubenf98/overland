<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
{

    private $language;

    public function __construct($collection, $language = "")
    {
        parent::__construct($collection);
        $this->language = $language;
    }


    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'translation_names' => $this->getTranslations('name'),
            'name' => $this->getTranslation('name', $this->language),
            'image' => $this->image,
            'status' => $this->status,
            'price' => $this->price,
            'category' => $this->category,
            'description1' => $this->getTranslations('description1'),
            'description2' => $this->getTranslations('description2'),
            'description3' => $this->getTranslations('description3'),
        ];
    }
}
