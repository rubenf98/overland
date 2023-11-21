<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Nova reserva na plataforma Overland</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        .boxstatusorder {
            width: 25%;
            font-size: 14px;
        }

        .boxstatusorder p {
            margin: 0;
            padding: 0;
        }

        .boxstatusorder:last-child {
            margin: 0 0 10px 0;
        }

        .persdetail {}

        .persdetail p {
            margin: 0px;
            font-size: 14px;
            opacity: .8;
        }

        .persdetail h3 {
            margin: 0 0 10px 0;
            padding: 0;
        }

        .hireorderdetail {
            margin-top: 15px;
        }

        .hiremainbox h4 {
            margin-bottom: 12px;
        }

        .hirecar .hiredate {
            flex: 1;
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 10px;
            margin: 0 10px 0 0;
            background: #fbfbfb;
        }

        .hirecar .hiredate:last-child {
            margin: 0;
        }

        .hirecar .hiredate p {
            padding: 0;
            margin: 0px 0 5px;
        }

        .hirecar .hiredate p span {
            display: block;
        }

        .hireordata {
            margin: 0 0 7px 0;
        }

        .hireordata div {
            float: right;
        }

        .hiretotal {
            margin: 10px 0 7px 0;
            color: #144D5C;
            border-top: 1px solid #ddd;
            padding: 10px 0 0 0;
            font-size: 16px;
            font-weight: bold;
        }

        .smalltext {
            font-size: 12px;
        }

        .Stile7 {
            color: #009900;
        }

        .confirmado {
            color: #009900;
        }

        .pendente {
            color: #ff0000;
        }

        .Stile10 {
            font-size: 14px;
            font-weight: bold;
        }

        .Stile16 {
            font-size: 16px;
        }

        .vrc-email-summ-status {
            font-weight: bold;
        }

        .vrc-emailc-footer {
            margin-top: 35px
        }

        @media screen and (max-width : 580px) {
            .boxstatusorder {
                margin: 0;
            }

            .boxstatusorder:last-child {
                margin-bottom: 0;
            }

            .hirecar .hiredate {
                margin: 5px 0 10px;
            }
        }
    </style>

</head>

<body>

    <div class="vrc-emailc-wrap"
        style="max-width: 720px; background: #fff; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin: 0 auto; padding: 24px;">
        <div class="vrc-emailc-logo" style="text-align: center; margin: 8px 0;">
            <img src="https://overlandmadeira.com/images/logo.svg" alt="Logo" border="0" width="48"
                style="display: block; width: 120px; max-width: 120px; min-width: 120px; margin: auto">
        </div>

        <div class="container" style="font-family: 'Century Gothic', Tahoma, Arial;">
            <p class="Stile1" style="font-size: 18px; font-weight: bold;">Overland Madeira</p>
            <div class="statusorder"
                style="display: flex; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; margin-bottom: 15px;">
                <div class="boxstatusorder" style="width: 25%; padding:10px; box-sizing: border-box;">
                    <span class="vrc-email-summ-lbl"
                        style="display: block; font-weight: bold; margin-bottom: 2px; font-size: 1.1em;">
                        Order Number
                    </span>
                    <span class="vrc-email-summ-values">{{$reservation->id}}</span>
                </div>
                <div class="boxstatusorder" style="width: 25%; padding:10px; box-sizing: border-box;">
                    <span class="vrc-email-summ-lbl"
                        style="display: block; font-weight: bold; margin-bottom: 2px; font-size: 1.1em;">
                        Confirmation Number
                    </span>
                    <span class="vrc-email-summ-values">{{$reservation->token}}</span>
                </div>
                <div class="boxstatusorder" style="width: 25%; padding:10px; box-sizing: border-box;">
                    <span class="vrc-email-summ-lbl"
                        style="display: block; font-weight: bold; margin-bottom: 2px; font-size: 1.1em;">
                        Order Date
                    </span>
                    <span class="vrc-email-summ-values">{{$reservation->created_at}}</span>
                </div>
            </div>
            <div class="persdetail">
                <h3 style="font-size: 18px; font-weight: bold;">
                    Personal Details
                </h3>
                <p>Name: {{$reservation->client->name}}</p>
                <p>Email: {{$reservation->client->email}}</p>
                <p>Phone: {{$reservation->client->phone}}</p>
                <p>Identity card / passport: {{$reservation->client->cc}}</p>
            </div>
            <div class="hiremainbox">
                <h4 style="font-size: 18px; font-weight: bold; margin-bottom: 12px;">
                    Activity: {{$reservation->activity->title}}
                </h4>
                <div class="hirecar" style="display: flex; flex-wrap: wrap;">
                    <div class="hiredate"
                        style="flex: 1; border:1px solid #eee; border-radius:4px; padding:10px; margin:0 10px 0 0; background:#fbfbfb;">
                        <p style="padding: 0; margin: 0px 0 5px; display: inline-block; margin-right: 10px;">
                            <span class="Stile12" style="font-size: 14px;font-weight: bold;">
                                Date
                            </span>
                            <span class="Stile9" style="font-size: 14px;">{{$reservation->date}}</span>
                        </p>
                    </div>
                    <div class="hiredate"
                        style="flex: 1; border:1px solid #eee; border-radius:4px; padding:10px; margin:0 10px 0 0; background:#fbfbfb;">
                        <p style="padding: 0; margin: 0px 0 5px; display: inline-block; margin-right: 10px;">
                            <span class="Stile12" style="font-size: 14px;font-weight: bold;">
                                Location
                            </span>
                            <span class="Stile9" style="font-size: 14px;">{{$reservation->address}}</span>
                        </p>
                    </div>
                </div>
                <div class="hireorderdetail" style="margin-top: 15px;">
                    <p><span style="font-size: 18px; font-weight: bold;">
                            Order Details
                        </span></p>

                    <div style="font-size: 14px;">
                        <span>Activity</span>
                        <div style="float: right">{{$reservation->activity_price}} EUR</div>
                    </div>

                    <div style="font-size: 14px;">
                        <span>Transportation</span>
                        <div style="float: right">{{$reservation->transportation_price}} EUR</div>
                    </div>


                    <div class="hireordata hiretotal"
                        style="margin:0 0 7px 0; margin: 10px 0 7px 0; color: #144D5C; border-top: 1px solid #ddd; padding: 10px 0 0 0; font-size: 16px; font-weight: bold;">
                        <span>
                            Total
                        </span>
                        <div style="float:right;"><strong>{{$reservation->price}} EUR</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>