<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlockDateController;
use App\Http\Controllers\BlockPeriodController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CharateristicController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ConfirmReservationInvokable;
use App\Http\Controllers\CouncilController;
use App\Http\Controllers\ErrorReservationInvokable;
use App\Http\Controllers\ExtraController;
use App\Http\Controllers\FetchRelevantReservationsInvokable;
use App\Http\Controllers\FetchReservationsPerMonthInvokable;
use App\Http\Controllers\GetPaymentDetailsInvokable;
use App\Http\Controllers\InsuranceController;
use App\Http\Controllers\IsActivityAvailableInvokable;
use App\Http\Controllers\IsVehicleAvailableInvokable;
use App\Http\Controllers\LogRecordController;
use App\Http\Controllers\OverlandController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\SimulatePriceInvokable;
use App\Http\Controllers\UpdateActivityStatusInvokable;
use App\Http\Controllers\UpdateVehicleStatusInvokable;
use App\Http\Controllers\VehicleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/selector/categories', [CategoryController::class, 'selector']);
Route::get('/selector/activities', [ActivityController::class, 'selector']);
Route::get('/selector/councils', [CouncilController::class, 'selector']);
Route::get('/selector/vehicles', [VehicleController::class, 'selector']);
Route::get('/selector/insurances', [InsuranceController::class, 'selector']);

Route::post('login', [AuthController::class, 'login']);
Route::post('logout', 'App\Http\Controllers\AuthController@logout');
Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
Route::get('me', 'App\Http\Controllers\AuthController@me');

Route::get('get-payment-details', GetPaymentDetailsInvokable::class);

Route::apiResource('contact', 'App\Http\Controllers\ContactController');

Route::get('/simulate', SimulatePriceInvokable::class);
Route::put('/confirm/reservation', ConfirmReservationInvokable::class);
Route::put('/error/reservation', ErrorReservationInvokable::class);

Route::put('/activity-status/{activity}', UpdateActivityStatusInvokable::class);
Route::put('/vehicle-status/{vehicle}', UpdateVehicleStatusInvokable::class);

Route::get('/reservations-per-month', FetchReservationsPerMonthInvokable::class);
Route::get('/reservations-relevant', FetchRelevantReservationsInvokable::class);

Route::get('/is-available', IsActivityAvailableInvokable::class);
Route::get('/is-vehicle-available', IsVehicleAvailableInvokable::class);

Route::apiResource('logRecord', LogRecordController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('activities', ActivityController::class);
Route::apiResource('councils', CouncilController::class);
Route::apiResource('clients', ClientController::class);
Route::apiResource('vehicles', VehicleController::class);
Route::apiResource('reservations', ReservationController::class);
Route::apiResource('blocked-dates', BlockDateController::class);
Route::apiResource('blocked-periods', BlockPeriodController::class);
Route::apiResource('insurances', InsuranceController::class);
Route::apiResource('extras', ExtraController::class);
Route::apiResource('charateristics', CharateristicController::class);
Route::apiResource('overlands', OverlandController::class);
