<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Trade extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'payment_method' => $this->payment_method,
            'amount' => $this->amount,
            'rate' => $this->rate,
            'status' => $this->status,
            'buyer' => $this->buyer,

        ];
    }
}