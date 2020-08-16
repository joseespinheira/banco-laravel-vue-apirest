<?php

use App\CurrentAccount;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CurrentAccount::create([
            'agency' => (float)random_int(0001, 9999),
            'account' => (float)random_int(000001, 999999),
            'balance' => '10.55'
        ]);
        CurrentAccount::create([
            'agency' => '1001',
            'account' => '021531',
            'balance' => '-100.39'
        ]);
        CurrentAccount::create([
            'agency' => '1001',
            'account' => '021531',
            'balance' => '-100.99'
        ]);
        CurrentAccount::create([
            'agency' => '1001',
            'account' => '021531',
            'balance' => '100.50'
        ]);
        User::create([
            'firstName' => 'José',
            'lastName' => 'Espinheira',
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin'),
            'role' => 2,
            'agencia' => '1001',
            'conta' => '021531'
        ]);
        User::create([
            'name' => 'João',
            'email' => 'joao@test.com',
            'password' => Hash::make('secret'),
            'role' => 1,
            'agencia' => '2222',
            'conta' => '222222'
        ]);
        User::create([
            'name' => 'Maria',
            'email' => 'maria@test.com',
            'password' => Hash::make('secret'),
            'role' => 1,
            'agencia' => '3333',
            'conta' => '333333'
        ]);
    }
}
