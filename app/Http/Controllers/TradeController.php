<?php

namespace App\Http\Controllers;

use App\Http\Resources\TradeCollection;
use App\Models\Trade;

class TradeController extends Controller
{
    public function index() {

        return (new TradeCollection(Trade::all()));
    }
}
