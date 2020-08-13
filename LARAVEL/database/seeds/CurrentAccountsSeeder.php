<?php

use Illuminate\Database\Seeder;

class CurrentAccountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        App\CurrentAccount::create([
            'agency' => str_random(10),
            'account' => str_random(10),
            'balance' => random_int(100,200)
        ]);
    }
}
