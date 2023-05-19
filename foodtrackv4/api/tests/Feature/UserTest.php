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
        $user = usuario::factory()->create([
            'name' => 'John Doe',
            'email' => 'John@doe.com',
            'password' => 'password123',
            'telefono' => '123456789',
            'ubicacion' => 'Location',
            'role' => 'admin',
        ]);

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
        $response->assertJsonStructure([
            
                '*' => [
                    'id',
                    'name',
                    'email',
                    'telefono',
                    'ubicacion',
                    'role',
                    'api_token',
                    'created_at',
                    'updated_at',
                ]
            
        ]);

        
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

/*Test Login*/
    public function test_login_user()
    {
        $user = usuario::factory()->create([
            'name' => 'user@user.com',
            'email' => 'user@user.com',
            'password' => 'user',]);

        $user->save();

        /*
        $usuario = usuario::where('email', $request->email)->first();
        if ($usuario) {
            $token = Str::class::random(60);
            $role = $usuario->role;
            $user_id = $usuario->id;
            $usuario->api_token = $token;
            $usuario->date_createtoken = now();
            $usuario->expires_at = now()->addDays(1);
            $usuario->save();
        }

        return response()->json(['token' => $token, 'user_id' => $user_id, 'role' => $role], 200);*/

        $response = $this->post('/api/usuarios/login', [
            'email' => 'user@user.com',
            'password' => 'user',
        ]);

        $response->assertStatus(200);

        if($response->status() != 200){
            $response->assertStatus(200);
        }
    }
}
        