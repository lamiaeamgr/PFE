<?php

namespace App\Http\Controllers;
use  Illuminate\Support\Facades\Auth;
use App\Models\Comment;
use App\Models\Post;
use App\Models\PostAttachment;
use App\Models\Reaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\PostReaction;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user', 'attachments', 'comments.user', 'postReactions.user'])->get();
        $currentUser = Auth::user();
        return Inertia::render('home/PostList', ['posts' => $posts, 'currentUser' => $currentUser]);
    }

    
    public function store(Request $request)
    {
        $user=Auth::user();
        $user_id= $user->id;
   
        $validatedData = $request->validate([
            'body' => 'required|string|max:255',
            'attachment' => 'nullable|file|mimes:jpeg,png,mp4|max:2048',
        ]);

        $post = new Post();
        $post->user_id=$user_id;
        $post->body = $validatedData['body'];
        $post->save();

        if ($request->hasFile('attachment')) {
            $attachment = $request->file('attachment');
            $fileName = $attachment->getClientOriginalName();
            $filePath = $attachment->store('public/attachments');
            $relativefilePath = str_replace('public/','',$filePath);

            $postAttachment = new PostAttachment();
            $postAttachment->post_id = $post->id;
            $postAttachment->name = $fileName;
            $postAttachment->path = $relativefilePath;
            $postAttachment->mime = $attachment->getClientMimeType();
            $postAttachment->size = $attachment->getSize();
            $postAttachment->save();
        }
        
        return redirect()->back()->with('success', 'Post created successfully');
    }
    

    public function storeComment(Request $request)
{
    $user = Auth::user();
    $user_id = $user->id;

    $request->validate([
        'comment' => 'required|string',
        'postId' => 'required|exists:posts,id',
    ]);

    $comment = new Comment();
    $comment->comment = $request->input('comment');
    $comment->user_id = $user_id;
    $comment->post_id = $request->input('postId');
    $comment->created_at = now();
    $comment->save();

    
    // return response()->json(['success' => 'Comment added successfully!', 'comment' => $comment]);
}

    public function like(Request $request)
    {
        $postId = $request->input('post_id');
    
        if ($postId) {
            $post = Post::find($postId);
            if ($post) {
                $user = auth()->user();
                $like = $post->postReactions()->where('user_id', $user->id)->first();
    
                if ($like) {
                    $like->delete();
                } else {
                    $postReaction = new PostReaction();
                    $postReaction->post_id = $postId;
                    $postReaction->type = 'LIKE';
                    $postReaction->user_id = $user->id;
                    $postReaction->save();
                }
    
                $likesCount = $post->postReactions()->where('type', 'LIKE')->count();

                // return response()->json(['likesCount' => $likesCount], 200);
            } else {
                return response()->json(['error' => 'Post not found'], 404);
            }
        } else {
            return response()->json(['error' => 'Post ID is not defined or empty'], 400);
        }
    }
    
    
    public function destroy($id)
    {
        $post = Post::find($id);
        if ($post) {
            $post->delete();
            return redirect()->back()->with('success', 'Post deleted successfully.');
        } else {
            return redirect()->back()->with('error', 'Post not found.');
        }
    }

    public function show($id)
    {
        $post = Post::with(['user', 'attachments', 'comments.user', 'postReactions.user'])->find($id);
        $currentUser = Auth::user();
        // return Inertia::render('PostList', ['posts' => $posts, 'currentUser' => $currentUser]);
        
        if ($post || $currentUser) {
            return Inertia::render('PostShow', ['post' => $post, 'currentUser' => $currentUser]);
        } else {
            return redirect()->back()->with('error', 'Post not found.');
        }
    }

}