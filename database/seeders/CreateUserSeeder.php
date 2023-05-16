<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserDetail;

class CreateUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            'email' => 'admin@gmail.com',
            'name' => 'Administrator',
            'password' => bcrypt('admin@123'),
            'role' => 1,
        ];

        $userId = User::insertGetId($users);

        UserDetail::insert([
            'user_id' => $userId,
            'gender' => 'Male',
            'phone' => '03456778888',
            'address' => 'Ha Noi',
        ]);
    }
}
