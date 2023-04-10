<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class usuario extends Model
{
    use HasFactory, Notifiable;

    protected $fillable =[
        'api_token',
        'expires_at',
        'nombre',
        'email',
        'role'

    ];
}


