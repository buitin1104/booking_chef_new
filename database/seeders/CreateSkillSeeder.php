<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CreateSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void 
     {
        Skill::truncate();
        $Skills = [
                [
                    'name'=>'mon an châu á',
                    'description'=>'',
                ],
                [
                    'name'=>'mon an châu âu',
                    'description'=>'',
                ],
                [
                    'name'=>'mon an nhat',
                    'description'=>'',
                ],
            ];
        
                foreach ($Skills as $Skill) {
                    Skill::create($Skill);
                }
           
    
    }
}
