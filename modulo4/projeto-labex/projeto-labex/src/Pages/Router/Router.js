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
                <Route  index   element   =   { <HomePage /> }  />    
                <Route  path  =  { '/login' }  element   =   {  <LoginPage />  }   />
                <Route  path  =  { '/trips/List' }  element   =   { <ListTripsPage   /> } />
                <Route  path  =  { '/admin/trips/list' }  element    =  { <AdminHomePage   /> } />
                <Route  path  =  { '/adimin/trips/:id' }  element    =  { <TripDetailsPage /> } />
                <Route  path  =  { '/admin/trips/create' }  element  =  { <CreateTripPage  /> } />
                <Route  path  =  { '/trips/application' }   element  =  { <ApplicationFormPage /> } />
            </Routes>
        </BrowserRouter>
    )
}