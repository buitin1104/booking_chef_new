<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chefs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('skill_id')->nullable();
            $table->foreign('skill_id')->references('id')->on('skills')->onDelete('cascade');
            $table->string('name');
            $table->string('email');
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->double('experience_year')->nullable();
            $table->string('password')->nullable();
            $table->string('avatar')->nullable();
            $table->string('price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chefs');
    }
};
