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

        /*Si no existe la tabla usuarios la creamos*/
        if (!Schema::hasTable('usuarios')) {
            Schema::create('usuarios', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('email')->unique();
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->rememberToken();
                $table->string('api_token', 80)
                    ->unique()
                    ->nullable()
                    ->default(null);
                $table->timestamp('date_createtoken')->nullable();
                $table->timestamp('expires_at')->nullable();
                $table->string('role')->default('user');
                $table->string('avatar')->nullable();
                $table->string('telefono')->nullable();
                $table->string('ubicacion')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
        }
    }
    /*
     $table->id();
                $table->string('name');
                $table->string('email')->unique();
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->rememberToken();
                $table->string('api_token', 80)->unique()->nullable()->default(null);
              
                $table->timestamps();*/
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
