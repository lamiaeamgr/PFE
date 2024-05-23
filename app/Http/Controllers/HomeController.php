<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Follower;
use App\Models\User;
use App\Models\Post;


class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // Method to fetch followers for a given user

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
            });
    
            // Formatte les données de l'utilisateur
            $userData = [
                'id' => $user->id,
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'avatar_path' => $user->avatar_path,
                // Ajoute d'autres données de l'utilisateur si nécessaire
            ];

            $posts = Post::with(['user', 'attachments', 'comments.user', 'postReactions.user'])->get();
            // Envoie les données à la vue
            return Inertia::render('Home', [
                'userData' => $userData,
                'followers' => $formattedFollowers,
                'posts' => $posts,
                 'currentUser' => $user
            ]);
        }
    
        // Gère le cas où l'utilisateur n'est pas authentifié (optionnel)
        return redirect()->route('login'); // Ou une autre route appropriée
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
