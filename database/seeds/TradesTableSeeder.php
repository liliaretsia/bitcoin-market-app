<?php

use App\Models\Trade;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class TradesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Trade::truncate();

        for ($i = 0; $i < 7; $i++) {
            Trade::create([
                'status' => rand(0, 1),
                'buyer_id' => rand(1, 4),
                'payment_method_id' => rand(1, 3),
                'amount' => rand(20, 100),
                'rate' => rand(20, 100)
            ]);
        }
    }
}
