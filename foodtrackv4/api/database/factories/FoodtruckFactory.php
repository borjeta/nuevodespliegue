<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Foodtruck>
 */
class FoodtruckFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->name,
            'descripcion' => $this->faker->text,
            'telefono' => $this->faker->phoneNumber,
            'ubicacion' => $this->faker->address,
            'avatar' => $this->faker->imageUrl,
            'status' => $this->faker->randomElement(['Activo', 'Inactivo']),
            'TipoComida' => $this->faker->randomElement(['Comida Mexicana', 'Comida Italiana', 'Comida Japonesa', 'Comida Americana', 'Churreria']),
            'horario' => $this->faker->randomElement(['Hasta las 14:00', 'Hasta las 20:00', 'Hasta las 22:00']),
            'user_id' => $this->faker->numberBetween(1, 3),
        ];
    }
}
