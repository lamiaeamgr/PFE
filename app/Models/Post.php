<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\PostAttachment;
use App\Models\User;
use App\Models\Comment;
use App\Models\PostReaction;


class Post extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['post'];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function attachments()
    {
        return $this->hasMany(PostAttachment::class);
    }
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function postReactions()
    {
        return $this->hasMany(PostReaction::class);
    }
}