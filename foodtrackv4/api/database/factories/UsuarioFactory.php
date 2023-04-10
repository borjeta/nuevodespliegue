<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\usuario;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */
class UsuarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
            'api_token' => Str::random(80),
            'date_createtoken' => now(),
            'expires_at' => now()->addDays(1),
            'role' => 'user',
            /*pon un avatar al azar entre la imagen 1 y la 10*/
            'avatar' => 'https://picsum.photos/200/300?random=' . $this->faker->numberBetween(1, 10),
            'telefono' => $this->faker->phoneNumber,
            'ubicacion' => $this->faker->address,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
