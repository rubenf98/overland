<?php

namespace App\Http\Controllers;

use App\Http\Resources\CouncilResource;
use App\Models\Council;
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Council  $council
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Council $council)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Council  $council
     * @return \Illuminate\Http\Response
     */
    public function destroy(Council $council)
    {
        $council->delete();

        return response()->json(null, 204);
    }
}
