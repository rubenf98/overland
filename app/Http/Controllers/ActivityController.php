<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreActivityRequest;
use App\Http\Requests\UpdateActivityRequest;
use App\Http\Resources\ActivityResource;
use App\Models\Activity;
use App\Models\LogRecord;
use App\QueryFilters\ActivityFilters;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ActivityFilters $filters)
    {
        return ActivityResource::collection(Activity::filterBy($filters)->paginate(9));
    }


    public function selector(ActivityFilters $filters)
    {
        return ActivityResource::collection(Activity::filterBy($filters)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreActivityRequest $request)
    {
        $validator = $request->validated();
        $imageName = uniqid() . '.' . $request->banner->extension();
        $request->file('banner')->storeAs(
            'public/activities',
            $imageName
        );


        $record = Activity::create([
            'name' => [
                'pt' => $validator['name_pt'],
                'en' => $validator['name_en'],
            ],
            'category_id' => $validator['category_id'],
            'price' => $validator['price'],
            'minimum' => $validator['minimum'],
            'image' => '/storage/activities/' . $imageName,
            'description1' => [
                'pt' => $validator['description1_pt'],
                'en' => $validator['description1_en'],
            ],
            'description2' => [
                'pt' => $validator['description2_pt'],
                'en' => $validator['description2_en'],
            ],
            'description3' => [
                'pt' => $validator['description3_pt'],
                'en' => $validator['description3_en'],
            ],

        ]);

        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "criou a atividade " . $record->id . " com o nome " . $validator['name_pt']
        ]);

        return new ActivityResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        return new ActivityResource($activity);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateActivityRequest $request, Activity $activity)
    {
        $validator = $request->validated();
        $activity->update([
            'name' => [
                'pt' => $validator['name_pt'],
                'en' => $validator['name_en'],
            ],
            'category_id' => $validator['category_id'],
            'price' => $validator['price'],
            'description1' => [
                'pt' => $validator['description1_pt'],
                'en' => $validator['description1_en'],
            ],
            'description2' => [
                'pt' => $validator['description2_pt'],
                'en' => $validator['description2_en'],
            ],
            'description3' => [
                'pt' => $validator['description3_pt'],
                'en' => $validator['description3_en'],
            ],
        ]);

        if ($request->has('banner')) {
            $imageName = uniqid() . '.' . $request->banner->extension();
            $request->file('banner')->storeAs(
                'public/activities',
                $imageName
            );

            $activity->image =  '/storage/activities/' . $imageName;
            $activity->save();
        }

        return new ActivityResource($activity);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        $activity->delete();

        return response()->json(null, 204);
    }
}
