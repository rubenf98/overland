<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlockDateResource;
use App\Models\BlockDate;
use App\QueryFilters\BlockDateFilters;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BlockDateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(BlockDateFilters $filters)
    {
        return BlockDateResource::collection(BlockDate::filterBy($filters)->where("date", ">", Carbon::now())->orderBy('date', 'DESC')->get());
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
     * @param  \App\Models\BlockDate  $blockDate
     * @return \Illuminate\Http\Response
     */
    public function show(BlockDate $blockDate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BlockDate  $blockDate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BlockDate $blockDate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BlockDate  $blockDate
     * @return \Illuminate\Http\Response
     */
    public function destroy(BlockDate $blockDate)
    {
        //
    }
}
