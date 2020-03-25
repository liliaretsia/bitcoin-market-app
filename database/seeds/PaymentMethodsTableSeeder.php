<?php

use App\Models\PaymentMethod;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaymentMethod::truncate();

        DB::table('payment_methods')->insert([
            [
                'method' => 'SEPA'
            ],
            [
                'method' => 'Cash'
            ],
            [
                'method' => 'Qiwi'
            ]
        ]);
    }
}
