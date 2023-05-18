<?php

namespace Tests\Feature;

use App\Models\usuario;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;

use Tests\TestCase;
/*importamos las factorys*/
use Database\Factories\FoodtruckFactory;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test GET request to fetch all users.
     *
     * @return void
     */
    public function test_get_all_users()
    {
        $user = usuario::factory()->create();
        $user->save();

        /*seteamos el header con el user_id y el api_token y el role*/
        $headers = [
            'Access-Control-Allow-Origin'=>'*',
            'Content-Type'=> 'application/json',
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ];

        /*hacemos el get con los headers*/
        $response = $this->get('/api/usuarios', $headers);

        /*comprobamos que el status sea 200 y que el json sea el mismo que el user*/
        if($response->status() != 200){
            $response->assertStatus(200);
        }
        $response->assertJsonStructure(['data']);
    }

    /**
     * Test GET request to fetch a specific user.
     *
     * @return void
     */
    public function test_get_user()
    {
        $user = usuario::factory()->create();
        $user->save();

        /*seteamos el header con el user_id y el api_token y el role*/
        $headers = [
            'api_token' => $user->api_token,
            'user_id' => $user->id,
            'role' => $user->role,
        ];

        /*hacemos el get con los headers*/
        $response = $this->get('/api/usuarios/' . $user->id, $headers);

        /*comprobamos que el status sea 200 y que el json sea el mismo que el user*/
        if($response->status() != 200){
            $response->assertStatus(200);
        }
        $response->assertJson($user->toArray());
    }


       

    /**
     * Test PUT request to update a user.
     *
     * @return void
     */
  
    public function testBuscaUsuariosPorToken()
    {
        $usuario = usuario::factory()->create();
        $usuario->save();

        $headers = [
            'api_token' => $usuario->api_token,
            'user_id' => $usuario->id,
            'role' => $usuario->role,
        ];

        $response = $this->post('/api/usuarios/' . $usuario->id . '/buscaportoken', $headers);

        if($response->status() != 200){
            $response->assertStatus(200);
        }
        $response->assertJson($usuario->toArray());

    }
 

}
