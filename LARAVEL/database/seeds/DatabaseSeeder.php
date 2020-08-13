<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('current_accounts')->insert([
            'agency' => (float)random_int(0001,9999),
            'account' => (float)random_int(000001,999999),
            'balance' => '10.55'
        ]);
        DB::table('current_accounts')->insert([
            'agency' => '1001',
            'account' => '021531',
            'balance' => '-100.39'
        ]);
        DB::table('current_accounts')->insert([
            'agency' => '1001',
            'account' => '021531',
            'balance' => '-100.99'
        ]);
        DB::table('current_accounts')->insert([
            'agency' => '1001',
            'account' => '021531',
            'balance' => '100.50'
        ]);

    }
}
