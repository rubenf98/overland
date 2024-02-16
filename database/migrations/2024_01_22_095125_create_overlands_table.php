<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOverlandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('overlands', function (Blueprint $table) {
            $table->id();
            $table->string('token')->unique();
            $table->datetime('pickup_date');
            $table->datetime('return_date');

            $table->string('pickup_place');
            $table->string('return_place')->nullable();
            $table->string('flight')->nullable();

            $table->double('price', 6, 2);
            $table->double('vehicle_price', 5, 2);
            $table->double('vehicle_price_per_day', 5, 2);

            $table->integer('days');
            $table->text('notes')->nullable();
            $table->unsignedBigInteger("insurance_id")->nullable();
            $table->unsignedBigInteger("vehicle_id")->nullable();
            $table->unsignedBigInteger("client_id")->nullable();
            $table->unsignedBigInteger("driver_id")->nullable();
            $table->datetime('confirmed_at')->nullable();
            $table->boolean('archive')->default(false);
            $table->string('status')->default('pendente');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign("insurance_id")->references("id")->on("insurances")->onDelete("set null");
            $table->foreign("vehicle_id")->references("id")->on("vehicles")->onDelete("set null");
            $table->foreign("client_id")->references("id")->on("clients")->onDelete("set null");
            $table->foreign("driver_id")->references("id")->on("drivers")->onDelete("set null");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('overlands');
    }
}
