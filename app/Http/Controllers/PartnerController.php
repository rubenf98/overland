<?php

namespace App\Http\Controllers;

use App\Http\Requests\PartnerRequest;
use App\Http\Resources\PartnerResource;
use App\Models\Partner;
use App\Models\User;
use App\QueryFilters\PartnerFilters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(PartnerFilters $filters)
    {
        return PartnerResource::collection(Partner::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PartnerRequest $request)
    {
        $validator = $request->validated();
        DB::beginTransaction();
        $user = User::create([
            "name" => $validator["name"],
            "email" => $validator["email"]
        ]);

        $partner = Partner::create([
            "name" => $validator["name"],
            "user_id" => $user->id
        ]);
        DB::commit();

        return new PartnerResource($partner);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function show(Partner $partner)
    {
        return new PartnerResource($partner);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Partner $partner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Partner $partner)
    {
        //
    }
}
