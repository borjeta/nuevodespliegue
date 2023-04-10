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
        if (Schema::hasTable('foodtrucks')) {
            return;
        } else {
            Schema::create('foodtrucks', function (Blueprint $table) {
                $table->id();
                $table->string('nombre');
                $table->string('descripcion');
                $table->string('telefono');
                $table->string('ubicacion');
                $table->string('avatar')->nullable();
                $table->string('status');
                $table->string('TipoComida');
                $table->string('horario');
                $table->string('user_id');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
