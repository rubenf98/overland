<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOverlandHasExtrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('overland_has_extras', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("overland_id");
            $table->unsignedBigInteger("extra_id");
            $table->timestamps();

            $table->foreign("overland_id")->references("id")->on("overlands")->onDelete("cascade");
            $table->foreign("extra_id")->references("id")->on("extras")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('overland_has_extras');
    }
}
