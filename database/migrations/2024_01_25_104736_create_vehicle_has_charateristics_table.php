<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicleHasCharateristicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_has_charateristics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("vehicle_id");
            $table->unsignedBigInteger("charateristic_id");
            $table->string('value')->nullable();
            $table->timestamps();

            $table->foreign("vehicle_id")->references("id")->on("vehicles")->onDelete("cascade");
            $table->foreign("charateristic_id")->references("id")->on("charateristics")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicle_has_charateristics');
    }
}
