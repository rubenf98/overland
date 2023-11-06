<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRequest;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use App\Models\LogRecord;
use App\QueryFilters\ClientFilters;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ClientFilters $filters)
    {
        return ClientResource::collection(Client::filterBy($filters)->paginate(10));
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
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return new ClientResource($client);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(ClientRequest $request, Client $client)
    {
        $validator = $request->validated();
        $client->update([
            'name' => $validator['name'],
            'cc' => Arr::get($validator, 'cc'),
            'nif' => Arr::get($validator, 'nif'),
            'country' => Arr::get($validator, 'country'),
            'email' => $validator['email'],
            'phone' => $validator['phone'],
        ]);

        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "editou os dados do cliente  " . $client->id . " (" . $client->name . ")"
        ]);

        return new ClientResource($client);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "apagou o cliente  " . $client->id . " (" . $client->name . ")"
        ]);

        $client->delete();

        return response()->json(null, 204);
    }
}
