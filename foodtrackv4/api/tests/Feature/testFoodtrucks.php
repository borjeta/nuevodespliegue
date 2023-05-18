<?php
use App\Models\Foodtruck;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

class FoodtruckControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testObtenFoodtrucksPorCategoria()
    {
        // Crea un usuario de ejemplo
        $usuario = Usuario::factory()->create();

        // Crea foodtrucks de ejemplo
        Foodtruck::factory()->count(3)->create();

        // Envía una solicitud con la categoría y las cabeceras requeridas
        $response = $this->postJson('/foodtrucks/por-categoria', [], [
            'categoria' => 'Activas',
            'api_token' => $usuario->api_token,
            'user_id' => $usuario->id,
            'role' => 'admin',
        ]);

        // Verifica que la respuesta sea exitosa
        $response->assertOk();

        // Verifica que la respuesta sea en formato JSON
        $response->assertJson();

        // Verifica que la respuesta contenga los datos esperados
        $this->assertCount(3, $response->json());
    }

    public function testObtenFoodtrucksPorUbicacion()
    {
        // Crea un usuario de ejemplo
        $usuario = Usuario::factory()->create();

        // Crea foodtrucks de ejemplo
        $foodtruck1 = Foodtruck::factory()->create(['ubicacion' => 'Ubicación A']);
        $foodtruck2 = Foodtruck::factory()->create(['ubicacion' => 'Ubicación B']);

        // Envía una solicitud con la ubicación y las cabeceras requeridas
        $response = $this->postJson('/foodtrucks/por-ubicacion', [], [
            'zona' => 'ubicación',
            'api_token' => $usuario->api_token,
            'user_id' => $usuario->id,
            'role' => 'admin',
        ]);

        // Verifica que la respuesta sea exitosa
        $response->assertOk();

        // Verifica que la respuesta sea en formato JSON
        $response->assertJson();

        // Verifica que la respuesta contenga los datos esperados
        $response->assertJsonCount(2);

        // Verifica que los foodtrucks esperados estén presentes en la respuesta
        $response->assertJsonFragment(['ubicacion' => 'Ubicación A']);
        $response->assertJsonFragment(['ubicacion' => 'Ubicación B']);
    }

    // Agrega más pruebas para los otros métodos del controlador

    // ...

    // También puedes agregar pruebas para verificar los casos de error

    public function testNoTienePermisosParaVerFoodtrucks()
    {
        // Envía una solicitud sin las cabeceras requeridas
        $response = $this->postJson('/foodtrucks/por-categoria');

        // Verifica que la respuesta sea un error de permisos
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);

        // Verifica que la respuesta contenga el mensaje esperado
        $response->assertJson(['message' => 'No tienes permisos para ver las foodtrucks']);
    }
    /**
     * Test index method.
     *
     * @return void
     */
    public function testIndex()
    {
        // Create a test user
        $user = factory(\App\Models\User::class)->create([
            'role' => 'admin',
        ]);

        // Set the required headers
        $headers = [
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ];

        // Send a GET request to the index endpoint
        $response = $this->withHeaders($headers)->get('/foodtrucks');

        // Assert the response status code is 200 (OK)
        $response->assertStatus(200);

        // Assert the response JSON structure or any other assertions you need
    }

    /**
     * Test store method.
     *
     * @return void
     */
    public function testStore()
    {
        // Create a test user
        $user = factory(\App\Models\User::class)->create([
            'role' => 'admin',
        ]);

        // Set the required headers
        $headers = [
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ];

        // Define the request payload
        $payload = [
            'nombre' => 'Food Truck Test',
            'descripcion' => 'This is a test food truck',
            'ubicacion' => 'Test Location',
            'telefono' => '1234567890',
            'avatar' => 'test.jpg',
            'tipocomida' => 'Test Cuisine',
        ];

        // Send a POST request to the store endpoint with the payload
        $response = $this->withHeaders($headers)->post('/foodtrucks', $payload);

        // Assert the response status code is 200 (OK) or any other assertions you need
        $response->assertStatus(200);

        // Assert the response JSON structure or any other assertions you need
    }

    /**
     * Test show method.
     *
     * @return void
     */
    public function testShow()
    {
        // Create a test food truck
        $foodtruck = factory(\App\Models\FoodTruck::class)->create();

        // Send a GET request to the show endpoint with the food truck ID
        $response = $this->get('/foodtrucks/' . $foodtruck->id);

        // Assert the response status code is 200 (OK) or any other assertions you need
        $response->assertStatus(200);

        // Assert the response JSON structure or any other assertions you need
    }
    
    /**
     * Test update method.
     *
     * @return void
     */
    public function testUpdate()
    {
        // Create a test user
        $user = factory(\App\Models\User::class)->create([
            'role' => 'admin',
        ]);

        // Create a test food truck
        $foodtruck = factory(\App\Models\FoodTruck::class)->create();

        // Set the required headers
        $headers = [
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ];

        // Define the request payload
        $payload = [
            'nombre' => 'Food Truck Test',
            'descripcion' => 'This is a test food truck',
            'ubicacion' => 'Test Location',
            'telefono' => '123456780',
            'tipocomida' => 'Test Cuisine',
        ];

        // Send a PUT request to the update endpoint with the payload and food truck ID
        $response = $this->withHeaders($headers)->put('/foodtrucks/' . $foodtruck->id, $payload);

        // Assert the response status code is 200 (OK) or any other assertions you need
        $response->assertStatus(200);

        // Assert the response JSON structure or any other assertions you need
    }


}