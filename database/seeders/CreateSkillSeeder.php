<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CreateSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void 
    {
        Schema::disableForeignKeyConstraints();
        Skill::truncate();
        Schema::enableForeignKeyConstraints();

        $skills = [
                [
                    'name' => 'mon an châu á',
                    'description' => 'Chuyen mon an Chau A',
                ],
                [
                    'name' => 'mon an châu âu',
                    'description' => 'Chuyen mon an Chau Au',
                ],
                [
                    'name' => 'mon an nhat',
                    'description' => 'Chuyen mon an Nhat',
                ],
            ];
        
            foreach ($skills as $skill) {
                Skill::create($skill);
            }
    }
}
