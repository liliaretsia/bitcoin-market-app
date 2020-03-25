<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Trade extends Model
{
    protected $fillable = ['amount', 'rate', 'status'];

    public function payment_method() {
        return $this->belongsTo(PaymentMethod::class);
    }

    public function buyer() {
        return $this->belongsTo(Buyer::class);
    }
}