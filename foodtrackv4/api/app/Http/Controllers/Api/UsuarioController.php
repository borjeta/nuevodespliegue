<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\usuario;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Crypt;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return usuario::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //guarda un usuario en bd   
        $usuario = new usuario();
        $usuario->name = $request->name;
        $usuario->email = $request->email;
        $usuario->email_verified_at = now();
        $usuario->password = password_hash($request->password, PASSWORD_DEFAULT);
        $usuario->remember_token = null;
        $usuario->avatar = null;
        $usuario->telefono = $request->telefono;
        $usuario->ubicacion = $request->ubicacion;
        $usuario->role = 'user';
        $usuario->api_token = null;
        $usuario->date_createtoken = null;
        $usuario->expires_at = null;
        $usuario->save();
        return Response()->json(['message' => 'Usuario creado correctamente'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $body = $request->all();
        /* Buscamos el usuario por el nombre */
        $api_token = $body['headers']['api_token'];
        $user_id = $body['headers']['user_id'];
        $role = $body['headers']['role'];
        $user = usuario::where('id', $user_id)->first();
        /*desencriptamos la constraseña para mostrarla en texto plano */
        return response()->json($user, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, usuario $usuario)
    {

        $body = $request->all();
        /* Buscamos el usuario por el nombre */
        $api_token = $body['headers']['api_token'];
        $user_id = $body['headers']['user_id'];
        $role = $body['headers']['role'];
        $user = usuario::where('id', $user_id)->first();
        if ($user) {
            $user->name = $request->name;
            $user->email = $request->email;
            $user->telefono = $request->telefono;
            $user->ubicacion = $request->ubicacion;
            if ($request->password != null) {
                $user->password = password_hash($request->password, PASSWORD_DEFAULT);
            }

            $user->save();
            return $user;
        }
        return response()->json(['error' => 'No tienes permisos para acceder a este recurso'], 401);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(usuario $usuario)
    {
        //
    }
    public function login(Request $request)
    {
        $usuario = usuario::where('email', $request->email)->first();
        if ($usuario) {
            if (password_verify($request->password, $usuario->password)) {
                /* Si el usuario existe y la contraseña es correcta , generamos el token con 60 caracteres aleatorios */
                $token = Str::class::random(60);
                $role = $usuario->role;
                $user_id = $usuario->id;
                $usuario->api_token = $token;
                $usuario->date_createtoken = now();
                $usuario->expires_at = now()->addDays(1);

                $usuario->save();
                return response()->json(['token' => $token, 'user_id' => $user_id, 'role' => $role], 200);
            }
        }
        return response()->json(['error' => 'Usuario o contraseña incorrectos'], 401);
    }

    public function logout(Request $request)
    {
        $usuario = usuario::where('api_token', $request->api_token)->first();
        if ($usuario) {
            $usuario->api_token = null;
            $usuario->date_createtoken = null;
            $usuario->expires_at = null;
            $usuario->save();
            return response(['message' => 'Sesión cerrada correctamente'], 200);
        }
        return response(['error' => 'No se ha podido cerrar la sesión'], 401);
    }


    public function buscausuario(Request $request): Response
    {
        $body = $request->all();
        /* Buscamos el usuario por el nombre */
        $api_token = $body['headers']['api_token'];
        $user_id = $body['headers']['user_id'];
        $role = $body['headers']['role'];
        $user = usuario::where('id', $user_id)->first();

        $id = $request->id;
        $usuario = usuario::where('id', $id)->first();
        if ($user->id == $user_id && $user->api_token == $api_token && $user->role == $role) {
            return response($usuario, 200);
        } else {
            return response('No tienes permisos para acceder a este recurso', 401);
        }


    }

    public function buscaUsuariosPorToken(Request $request)
    {
        $body = $request->all();
        /* Buscamos el usuario por el nombre */
        $api_token = $body['headers']['api_token'];
        $user_id = $body['headers']['user_id'];
        $role = $body['headers']['role'];
        $user = usuario::where('id', $user_id)->first();
        if ($user->api_token == $api_token && $user->id == $user_id && $user->role == $role) {
            $usuario = usuario::where('api_token', $api_token)->first();
            return response($usuario, 200);
        } else {
            return response('No tienes permisos para acceder a este recurso', 401);
        }

    }
    public function editarUsuarioAdmin(Request $request)
    {

        $body = $request->all();
        /* Buscamos el usuario por el nombre */
        $api_token = $body['headers']['api_token'];
        $user_id = $body['headers']['user_id'];
        $role = $body['headers']['role'];
        $user = usuario::where('id', $user_id)->first();
        if ($user->api_token == $api_token && $user->id == $user_id && $user->role == $role) {
            $usuario = usuario::where('id', $request->id)->first();
            $usuario->name = $body['data']['name'];
            $usuario->email = $body['data']['email'];
            $usuario->telefono = $body['data']['telefono'];
            $usuario->ubicacion = $body['data']['ubicacion'];
            $usuario->role = $body['data']['role'];
            $usuario->save();
            return response($usuario, 200);
        } else {
            return response('No tienes permisos para acceder a este recurso', 401);
        }
       
    }
}