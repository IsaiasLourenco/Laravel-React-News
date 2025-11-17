<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'user' => request()->user(),
            'stats' => [
                'users_total' => User::count(),
            ],
            'latest_users' => User::latest()->take(5)->get(['id','name','email','created_at']),
        ]);
    }
}
