<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NoteController extends Controller
{
    public function index()
    {
        return Note::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $note = Note::create($request->all());
        return response()->json($note, 201);
    }

    public function show($id)
    {
        $note = Note::find($id);
        if (!$note) {
            return response()->json(['message' => 'Note not found'], 404);
        }
        return response()->json($note);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $note = Note::find($id);
        if (!$note) {
            return response()->json(['message' => 'Note not found'], 404);
        }

        $note->update($request->all());
        return response()->json($note);
    }

    public function destroy($id)
    {
        $note = Note::find($id);
        if (!$note) {
            return response()->json(['message' => 'Note not found'], 404);
        }

        $note->delete();
        return response()->json(['message' => 'Note deleted']);
    }
}
