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
        Schema::create('order_chefs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('chef_id')->nullable();
            $table->foreign('chef_id')->references('id')->on('chefs')->onDelete('cascade');
            $table->unsignedBiginteger('order_id')->nullable();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->string('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_chefs');
    }
};
