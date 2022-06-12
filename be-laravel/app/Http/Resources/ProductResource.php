<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'product';

    public function toArray($request)
    {
        return [
            'productName' => $this->resource->productName,
            'price' => $this->resource->price,
            'ram' => $this->resource->ram,
            'size' => $this->resource->size,
            'color' => $this->resource->color,
            'imageUrl' => $this->resource->imageUrl,
            'categoryId' => $this->resource->categoryId
        ];
    }
}
