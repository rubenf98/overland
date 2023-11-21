import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Layout from "./components/Layout";
import Homepage from "./components/client/Homepage";
import Login from "./components/dashboard/Login";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardActivity from "./components/dashboard/activity/Activity";
import Home from "./components/dashboard/homepage/Home";
import BlockPeriod from "./components/dashboard/blockPeriod/BlockPeriod";
import Reservation from "./components/dashboard/reservation/Reservation";
import About from "./components/client/About";
import ReservationDetails from "./components/dashboard/reservation/ReservationDetails";
import Client from "./components/dashboard/client/Client";
import Contact from "./components/client/Contact";
import Confirmation from "./components/client/Confirmation";
import Success from "./components/client/Success";
import Error from "./components/client/Error";
import Levada from "./components/client/Levada";
import Tour from "./components/client/Tour";
import ActivityDetails from "./components/dashboard/activity/ActivityDetails";
import Safari from "./components/client/Safari";
import LogRecord from "./components/dashboard/logRecord/LogRecord";
import Council from "./components/dashboard/council/Council";
import ClientDetails from "./components/dashboard/client/ClientDetails";
import Privacy from "./components/client/Privacy";

export const history = createBrowserHistory();

function Router() {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route path="/painel/logs" element={<Layout><Dashboard><LogRecord /></Dashboard></Layout>} />
                <Route path="/painel/reservas/:reservationId" element={<Layout><Dashboard><ReservationDetails /></Dashboard></Layout>} />
                <Route path="/painel/reservas" element={<Layout><Dashboard><Reservation /></Dashboard></Layout>} />
                <Route path="/painel/datas" element={<Layout><Dashboard><BlockPeriod /></Dashboard></Layout>} />
                <Route path="/painel/concelhos" element={<Layout><Dashboard><Council /></Dashboard></Layout>} />
                <Route path="/painel/clientes/:clientId" element={<Layout><Dashboard><ClientDetails /></Dashboard></Layout>} />
                <Route path="/painel/clientes" element={<Layout><Dashboard><Client /></Dashboard></Layout>} />
                <Route path="/painel/atividades/:activityId" element={<Layout><Dashboard><ActivityDetails /></Dashboard></Layout>} />
                <Route path="/painel/atividades" element={<Layout><Dashboard><DashboardActivity /></Dashboard></Layout>} />
                <Route path="/painel" element={<Layout><Dashboard><Home /></Dashboard></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route exact path="/confirmation" element={<Layout><Confirmation /></Layout>} />
                <Route exact path="/success" element={<Layout><Success /></Layout>} />
                <Route exact path="/error" element={<Layout><Error /></Layout>} />
                {/* <Route exact path="/booking" element={<Layout enable><Checkout /></Layout>} />
                <Route exact path="/activity/:activityId" element={<Layout enable><Activity /></Layout>} />
                <Route exact path="/category/:category" element={<Layout enable><Activities /></Layout>} /> */}
                <Route exact path="/safaries" element={<Layout enable><Safari /></Layout>} />
                <Route exact path="/tours/:tourId" element={<Layout enable><Tour /></Layout>} />
                <Route exact path="/levadas/:levadaId" element={<Layout enable><Levada /></Layout>} />
                <Route exact path="/about" element={<Layout enable><About /></Layout>} />
                <Route exact path="/privacy" element={<Layout enable><Privacy /></Layout>} />
                <Route exact path="/contact" element={<Layout enable><Contact /></Layout>} />
                <Route exact path="/" element={<Layout enable><Homepage /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
