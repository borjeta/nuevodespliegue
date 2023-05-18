<?php

namespace Tests\Feature;

use App\Models\usuario;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class testUsuarios extends TestCase
{
    use RefreshDatabase;
    use DatabaseTransactions;

    /**
     * Test GET request to fetch all users.
     *
     * @return void
     */
    public function test_get_all_users()
    {
        $response = $this->get('/api/users');

        $response->assertStatus(200);
        $response->assertJsonStructure(['data']);
    }

    /**
     * Test POST request to create a new user.
     *
     * @return void
     */
    public function test_create_user()
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'telefono' => '123456789',
            'ubicacion' => 'Location',
            'role' => 'user',
        ];

        $response = $this->post('/api/usuarios', $userData);

        $response->assertStatus(200);
        $response->assertJson(['message' => 'Usuario creado correctamente']);
    }

    /**
     * Test GET request to fetch a specific user.
     *
     * @return void
     */
    public function test_get_user()
    {
        $user = usuario::factory()->create();

        $response = $this->get('/api/usuarios/' . $user->id);

        $response->assertStatus(200);
        $response->assertJson($user->toArray());
    }

    /**
     * Test PUT request to update a user.
     *
     * @return void
     */
    public function test_update_user()
    {
        $user = usuario::factory()->create();

        $updatedUserData = [
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
            'password' => 'updatedpassword',
            'telefono' => '987654321',
            'ubicacion' => 'Updated Location',
        ];

        $response = $this->put('/api/users/' . $user->id, $updatedUserData);

        $response->assertStatus(200);
        $this->assertDatabaseHas('usuarios', [
            'id' => $user->id,
            'name' => $updatedUserData['name'],
            'email' => $updatedUserData['email'],
            'telefono' => $updatedUserData['telefono'],
            'ubicacion' => $updatedUserData['ubicacion'],
        ]);
    }
    public function testBuscaUsuariosPorToken()
    {
        $usuario = factory(Usuario::class)->create();
        $headers = [
            'api_token' => $usuario->api_token,
            'user_id' => $usuario->id,
            'role' => $usuario->role,
        ];
        
        $response = $this->json('GET', '/busca-usuarios-por-token', [], $headers);
        $response->assertStatus(200);
        $response->assertJson($usuario->toArray());
    }
    
    public function testEditarUsuarioAdmin()
    {
        $usuario = factory(Usuario::class)->create();
        $headers = [
            'api_token' => $usuario->api_token,
            'user_id' => $usuario->id,
            'role' => $usuario->role,
        ];
        $userData = [
            'data' => [
                'name' => 'New Name',
                'email' => 'newemail@example.com',
                'telefono' => '123456789',
                'ubicacion' => 'New Location',
                'role' => 'admin',
            ],
        ];
        
        $response = $this->json('POST', '/editar-usuario-admin', $userData, $headers);
        $response->assertStatus(200);
        $this->assertDatabaseHas('usuarios', [
            'id' => $usuario->id,
            'name' => 'New Name',
            'email' => 'newemail@example.com',
            'telefono' => '123456789',
            'ubicacion' => 'New Location',
            'role' => 'admin',
        ]);
    }
    
    public function testCrearAdmin()
    {
        $admin = factory(Usuario::class)->create(['role' => 'admin']);
        $headers = [
            'api_token' => $admin->api_token,
            'user_id' => $admin->id,
            'role' => $admin->role,
        ];
        $userData = [
            'name' => 'New Admin',
            'email' => 'admin@example.com',
            'password' => 'password123',
        ];
        
        $response = $this->json('POST', '/crear-admin', $userData, $headers);
        $response->assertStatus(200);
        $this->assertDatabaseHas('usuarios', [
            'name' => 'New Admin',
            'email' => 'admin@example.com',
            'role' => 'admin',
            
        ]);
    }
    
    public function testObtenUsuariosPorEmail()
    {
        $admin = factory(Usuario::class)->create(['role' => 'admin']);
        $headers = [
            'email' => 'example.com',
            'api_token' => $admin->api_token,
            'user_id' => $admin->id,
            'role' => $admin->role,
        ];
        
        $response = $this->json('GET', '/obten-usuarios-por-email', [], $headers);
        $response->assertStatus(200);
        // Asegúrate de comprobar el contenido de la respuesta según tus necesidades
    }
    


}
