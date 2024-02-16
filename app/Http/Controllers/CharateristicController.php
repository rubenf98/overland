<?php

namespace App\Http\Controllers;

use App\Http\Resources\CharateristicResource;
use App\Models\Charateristic;
use Illuminate\Http\Request;

class CharateristicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CharateristicResource::collection(Charateristic::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\Charateristic  $charateristic
     * @return \Illuminate\Http\Response
     */
    public function show(Charateristic $charateristic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Charateristic  $charateristic
     * @return \Illuminate\Http\Response
     */
    public function edit(Charateristic $charateristic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Charateristic  $charateristic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Charateristic $charateristic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Charateristic  $charateristic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Charateristic $charateristic)
    {
        //
    }
}
