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
        Schema::create('medias', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('title', 255);
            $table->string('type', 50)->nullable();
            $table->string('url', 255);
            $table->string('thumbnail', 255)->nullable();
            $table->string('caption', 255)->nullable();
            $table->string('place_storage', 100)->nullable();
            $table->string('size', 100)->nullable();
            $table->string('status')->nullable();
            $table->timestamp('created_at')->nullable(false)->default(\Illuminate\Support\Facades\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->nullable(false)->default(\Illuminate\Support\Facades\DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medias');
    }
};
