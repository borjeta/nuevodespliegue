<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\foodtruck;
use Dotenv\Repository\RepositoryInterface;
use Illuminate\Http\Request;

class FoodtruckController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return foodtruck::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //guarda una foodtruck en bd
        $foodtruck = new foodtruck();
        $foodtruck->name = $request->name;
        $foodtruck->description = $request->description;
        $foodtruck->save();
        return $foodtruck;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //busca la foodtruck por id
        $foodtruck = foodtruck::find($id);
        return $foodtruck;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $api_token =  $request->header('api_token');
        $user_id = $request->header('user_id');
        $role = $request->header('role');


        $foodtruck = new foodtruck();
        $foodtruck =  foodtruck::where('id', $request->id)->where('user_id', $user_id)->first();
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(foodtruck $foodtruck)
    {
        $foodtruck->delete();
        return Response()->json(['message' => 'Foodtruck eliminado correctamente'], 200);
    }

    public function getFoodtrucksByUser($id)
    {
        $foodtrucks = foodtruck::where('user_id', $id)->get();
        return $foodtrucks;
    }
    public function abrirfoodtruck($id)
    {
        $foodtruck = foodtruck::find($id);
        $foodtruck->status = 'Activo';
        $foodtruck->save();
        return $foodtruck;
    }

    public function cerrarfoodtruck($id)
    {
        $foodtruck = foodtruck::find($id);
        $foodtruck->status = 'Inactivo';
        $foodtruck->save();
        return $foodtruck;
    }
}
