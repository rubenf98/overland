<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('activity_id');
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('council_id');
            $table->string('token')->unique();
            $table->string('payment_method')->nullable();
            $table->datetime('date');
            $table->integer('participants');
            $table->double('price', 6, 2);
            $table->double('transportation_price', 6, 2);
            $table->double('activity_price', 6, 2);
            $table->string('status')->default('pendente');
            $table->text('notes')->nullable();
            $table->text('address')->nullable();
            $table->datetime('confirmed_at')->nullable();
            $table->datetime('payed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('council_id')->references('id')->on('councils');
            $table->foreign('activity_id')->references('id')->on('activities');
            $table->foreign('client_id')->references('id')->on('clients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
