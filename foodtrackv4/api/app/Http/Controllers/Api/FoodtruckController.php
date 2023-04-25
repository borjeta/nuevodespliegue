<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\foodtruck;
use App\Models\usuario;
use Illuminate\Http\Request;

class FoodtruckController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $api_token = request()->header('api_token');
        $user_id = request()->header('user_id');
        $role = request()->header('role');

        $comprobacion = usuario::where
        (
            [
                ['id', '=', $user_id],
                ['api_token', '=', $api_token],
                ['role', '=', $role]
            ]
        )->first();

        if ($comprobacion->role == 'admin' && $comprobacion->api_token == $api_token && $comprobacion->id == $user_id) {
            $foodtrucks = foodtruck::all();
            return response()->json($foodtrucks, 200);
        }

        if ($comprobacion == null) {
            return Response()->json(['message' => 'No tienes permisos para ver los foodtrucks'], 401);
        } else {
            $foodtrucks = foodtruck::all();
            return response()->json($foodtrucks, 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $api_token = $request->header('api_token');
        $user_id = $request->header('user_id');
        $role = $request->header('role');

        $comprobacion = usuario::where
        (
            [
                ['id', '=', $user_id],
                ['api_token', '=', $api_token],
                ['role', '=', $role]
            ]
        )->first();

        if ($comprobacion == null) {
            return Response()->json(['message' => 'No tienes permisos para crear un foodtruck'], 401);
        } else {

            $foodtruck = new foodtruck();
            $foodtruck->user_id = $user_id;
            $foodtruck->nombre = $request->nombre;
            $foodtruck->descripcion = $request->descripcion;
            $foodtruck->status = "Inactivo";
            $foodtruck->ubicacion = $request->ubicacion;
            $foodtruck->telefono = $request->telefono;
            $foodtruck->avatar = $request->avatar;
            $foodtruck->tipocomida = $request->tipocomida;
            $foodtruck->horario = "00:00";
            $foodtruck->save();
            return Response()->json(['message' => 'Foodtruck creado correctamente'], 200);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        if (foodtruck::where('id', $id)->exists()) {
            $foodtruck = foodtruck::where('id', $id)->get();
            return $foodtruck;
        } else {
            return Response()->json(['message' => 'Foodtruck no encontrado'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $api_token = $request->header('api_token');
        $user_id = $request->header('user_id');
        $role = $request->header('role');

        $comprobacion = usuario::where
        (
            [
                ['id', '=', $user_id],
                ['api_token', '=', $api_token],
                ['role', '=', $role]
            ]
        )->first();

        if ($comprobacion == null) {
            return Response()->json(['message' => 'No tienes permisos para editar este foodtruck'], 401);
        } else {
            $foodtruck = new foodtruck();
            $foodtruck = foodtruck::where('id', $request->id)->where('user_id', $user_id)->first();
            $foodtruck->nombre = $request->nombre;
            $foodtruck->descripcion = $request->descripcion;
            $foodtruck->status = $request->status;
            $foodtruck->ubicacion = $request->ubicacion;
            $foodtruck->telefono = $request->telefono;
            $foodtruck->avatar = $request->avatar;
            $foodtruck->tipocomida = $request->tipocomida;
            $foodtruck->horario = $request->horario;
            $foodtruck->save();
            return Response()->json(['message' => 'Foodtruck actualizado correctamente'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(foodtruck $foodtruck)
    {
        $foodtruck->delete();
        return Response()->json(['message' => 'Foodtruck eliminado correctamente'], 200);
    }

    public function getFoodtrucksByUser(Request $request, $id)
    {
        $api_token = $request->header('api_token');
        $user_id = $request->header('user_id');
        $role = $request->header('role');
        $foodtrucks = foodtruck::where('user_id', $id)->get();
        return $foodtrucks;
    }
    public function abrirfoodtruck(Request $request, $id)
    {
        $api_token = $request->header('api_token');
        $user_id = $request->header('user_id');
        $role = $request->header('role');


        $comprobacion = usuario::where
        (
            [
                ['id', '=', $user_id],
                ['api_token', '=', $api_token],
                ['role', '=', $role]
            ]
        )->first();

        if ($comprobacion == null) {
            return Response()->json(['message' => 'No tienes permisos para abrir este foodtruck'], 401);
        } else {
            $foodtruck = foodtruck::where('id', $id)->where('user_id', $user_id)->first();
            $foodtruck->status = 'Activo';
            $foodtruck->save();
            return $foodtruck;
        }
    }

    public function cerrarfoodtruck($id)
    {
        $foodtruck = foodtruck::find($id);
        $foodtruck->status = 'Inactivo';
        $foodtruck->save();
        return $foodtruck;
    }

    public function foodtrucksSoloActivas()
    {
        $foodtrucks = foodtruck::where('status', 'Activo')->get();
        return $foodtrucks;
    }


    /*OpcionGlobal solo para admin para cerrar todas las foodtrucks*/
    public function cerrarfoodtrucks(Request $request)
    {
        $api_token = $request->header('api_token');
        $user_id = $request->header('user_id');
        $role = $request->header('role');

        $comprobacion = usuario::where
        (
            [
                ['id', '=', $user_id],
                ['api_token', '=', $api_token],
                ['role', '=', $role]
            ]
        )->first();

        if ($comprobacion == null || $comprobacion->role != 'admin' || $comprobacion->id != $user_id || $comprobacion->api_token != $api_token) {
            return Response()->json(['message' => 'No tienes permisos para cerrar todas las foodtrucks'], 401);
        } else {
            $foodtrucks = foodtruck::all();
            foreach ($foodtrucks as $foodtruck) {
                $foodtruck->status = 'Inactivo';
                $foodtruck->save();
            }
            return Response()->json(['message' => 'Todas las foodtrucks han sido cerradas'], 200);
        }
    }

}