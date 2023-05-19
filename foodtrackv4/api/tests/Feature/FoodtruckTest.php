<?php

namespace Tests\Feature\Api;

use App\Models\foodtruck;
use App\Models\usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FoodtruckTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test for getting a list of foodtrucks.
     */
    public function testGetFoodtrucks()
    {
        // Creating a test user with admin role
        $user = usuario::factory()->create(['role' => 'admin']);
        
        // Creating foodtrucks for testing
        $foodtrucks = foodtruck::factory()->count(5)->create();

        // Making a GET request to the index endpoint
        $response = $this->getJson('/api/foodtrucks', [
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ]);

        // Asserting the response status code and the number of foodtrucks returned
        $response->assertStatus(200)
            ->assertJsonCount(5);
    }

    /**
     * Test for creating a foodtruck.
     */
    public function testCreateFoodtruck()
    {
        // Creating a test user with admin role
        $user = usuario::factory()->create(['role' => 'propietario']);

        // Creating a new foodtruck data
        $foodtruckData = [
            'nombre' => 'Foodtruck Test',
            'descripcion' => 'This is a test foodtruck',
            'ubicacion' => 'Test Location',
            'telefono' => '123456789',
            'avatar' => 'foodtruck.jpg',
            'tipocomida' => 'Test Cuisine',
        ];

        // Making a POST request to the store endpoint
        $response = $this->postJson('/api/foodtrucks', $foodtruckData, [
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ]);

        // Asserting the response status code and the success message
        $response->assertStatus(200)
            ->assertJson(['message' => 'Foodtruck creado correctamente']);

        // Asserting that the foodtruck was stored in the database
        $this->assertDatabaseHas('foodtrucks', [
            'nombre' => 'Foodtruck Test',
            'descripcion' => 'This is a test foodtruck',
            'ubicacion' => 'Test Location',
            'telefono' => '123456789',
            'avatar' => 'foodtruck.jpg',
            'tipocomida' => 'Test Cuisine',
        ]);
    }



    /**
     * Test for deleting a foodtruck.
     */
    public function testDeleteFoodtruck()
    {
        // Creating a test user with admin role
        $user = usuario::factory()->create(['role' => 'admin']);

        // Creating a foodtruck for testing
        $foodtruck = foodtruck::factory()->create();

        // Making a DELETE request to the destroy endpoint
        $response = $this->deleteJson('/api/foodtrucks/' . $foodtruck->id, [], [
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ]);

        // Asserting the response status code and the success message
        $response->assertStatus(200)
            ->assertJson(['message' => 'Foodtruck eliminado correctamente']);

        // Asserting that the foodtruck was deleted from the database
        $this->assertDatabaseMissing('foodtrucks', ['id' => $foodtruck->id]);
    }

   
}