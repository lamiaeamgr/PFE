<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;
use App\Models\User;

class Comment extends Model
{
    use HasFactory;

    // Assurez-vous que le modèle Comment correspond à votre table de base de données
    protected $fillable = ['comment', 'post_id', 'user_id']; // Définissez les colonnes que vous pouvez remplir

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}