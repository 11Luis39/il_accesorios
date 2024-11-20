<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('brands')->insert([
            ['name' => 'NIKE'],
            ['name' => 'PUMA'],
            ['name' => 'ADIDAS'],
            ['name' => 'PINGUI'],
        ]);
    }
}
