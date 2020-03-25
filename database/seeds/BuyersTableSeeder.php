<?php

use App\Models\Buyer;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BuyersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Buyer::truncate();

        $faker = Factory::create();

        for ($i = 0; $i < 4; $i++) {
            Buyer::create([
                'name' => $faker->name,
                'negative_reputation' => rand(1, 50),
                'positive_reputation' => rand(1, 50),
            ]);
        }
    }
}
