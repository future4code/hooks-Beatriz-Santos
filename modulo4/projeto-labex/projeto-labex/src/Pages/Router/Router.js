import { BrowserRouter , Routes , Route } from "react-router-dom";

import  HomePage             from   '../HomePage/HomePage';
import  LoginPage            from   '../LoginPage/LoginPage';
import  ListTripsPage        from   '../ListTripsPage/ListTripsPage';
import  AdminHomePage        from   '../AdminHomePage/AdminHomePage';
import  CreateTripPage       from   '../CreateTripPage/CreateTripPage';
import  TripDetailsPage      from   '../TripDetailsPage/TripDetailsPage';
import  ApplicationFormPage  from   '../ApplicationFormPage/ApplicationFormPage';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  index   element   =   {<HomePage />}  />
                <Route  path  =  { '/LoginPage' }  element   =   {  <LoginPage />  }   />
                <Route  path  =  { '/ListTrips' }  element   =   { <ListTripsPage   /> } />
                <Route  path  =  { '/AdminHome' }  element   =   { <AdminHomePage   /> } />
                <Route  path  =  {'/CreateTrips'}  element   =   { <CreateTripPage  /> } />
                <Route  path  =  {'/TripDetails'}  element   =   { <TripDetailsPage /> } />
                <Route  path  =  {'/ApplicationForm'}  element = { <ApplicationFormPage /> } />
            </Routes>
        </BrowserRouter>
    )
}