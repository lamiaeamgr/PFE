<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Follower;
use App\Models\User;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;


class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Vérifie si l'utilisateur est authentifié
        if (Auth::check()) {
            // Récupère l'utilisateur actuellement authentifié
            $user = Auth::user();
    
            // Récupère les IDs des suiveurs de l'utilisateur
            $followerIds = Follower::where('user_id', $user->id)->pluck('follower_id');
    
            // Récupère les données des utilisateurs qui suivent l'utilisateur
            $followers = User::whereIn('id', $followerIds)->get();
    
            // Formatte les données des suiveurs
            $formattedFollowers = $followers->map(function ($follower) {
                return [
                    'id' => $follower->id,
                    'firstname' => $follower->firstname,
                    'lastname' => $follower->lastname,
                    'avatar_path' => $follower->avatar_path,
                ];
            });            $followerCount = Follower::where('user_id', $user->id)->count();


    
            // Formatte les données de l'utilisateur
            $userData = [
                'id' => $user->id,
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'avatar_path' => $user->avatar_path,
                'cover_path' => $user->cover_path,
                // Ajoute d'autres données de l'utilisateur si nécessaire
            ];
    
            // Envoie les données à la vue
            return Inertia::render('Profile/Profile', [
                'followerCount'=>$followerCount,
                'userData' => $userData,
                'followers' => $formattedFollowers,
            ]);
        }
    
        // Gère le cas où l'utilisateur n'est pas authentifié (optionnel)
        return redirect()->route('login'); // Ou une autre route appropriée
    }

   // In ProfileController or a similar controller
public function updateCoverPhoto(Request $request)
{
    $user = auth()->user();
    if ($request->hasFile('cover_photo')) {
        $file = $request->file('cover_photo');
        $path = $file->store('cover_photos', 'public');
        $user->cover_path = $path;
        $user->save();
    }
}

public function updateAvatarPhoto(Request $request)
{
    $user = auth()->user();
    if ($request->hasFile('avatar_photo')) {
        $file = $request->file('avatar_photo');
        $path = $file->store('avatar_photos', 'public');
        $user->avatar_path = $path;
        $user->save();
    }
}

    /**
     * Show the form for creating a new resource.
     */

     
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
