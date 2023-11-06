<?php

namespace App\Http\Controllers;

use App\Http\Requests\CouncilRequest;
use App\Http\Resources\CouncilResource;
use App\Models\Council;
use App\Models\LogRecord;
use App\QueryFilters\CouncilFilters;
use Illuminate\Http\Request;

class CouncilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CouncilFilters $filters)
    {
        return CouncilResource::collection(Council::filterBy($filters)->paginate(10));
    }

    public function selector(CouncilFilters $filters)
    {
        return CouncilResource::collection(Council::filterBy($filters)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Council  $council
     * @return \Illuminate\Http\Response
     */
    public function show(Council $council)
    {
        return new CouncilResource($council);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Council  $council
     * @return \Illuminate\Http\Response
     */
    public function update(CouncilRequest $request, Council $council)
    {
        $validator = $request->validated();
        $council->update([
            'name' => $validator['name'],
            'price' => $validator['price'],
        ]);

        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "editou os dados do concelho  " . $council->id . " (" . $council->name . ")"
        ]);

        return new CouncilResource($council);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Council  $council
     * @return \Illuminate\Http\Response
     */
    public function destroy(Council $council)
    {
        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "apagou o concelho  " . $council->id . " (" . $council->name . ")"
        ]);

        $council->delete();

        return response()->json(null, 204);
    }
}
