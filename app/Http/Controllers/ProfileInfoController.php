<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileInfoController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('BasicInfo', ['user' => $user]);
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $validatedData = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'required|string|max:15',
            'city' => 'required|string|max:255',
            'bio' => 'nullable|string'
        ]);

        $user->firstname = $validatedData['firstname'];
        $user->lastname = $validatedData['lastname'];
        $user->email = $validatedData['email'];
        $user->phone = $validatedData['phone'];
        $user->city = $validatedData['city'];
        $user->bio = $validatedData['bio'];
        $user->save();

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }

}