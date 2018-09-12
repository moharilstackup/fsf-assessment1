import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form.component';
import { ThankyouComponent } from './components/thankyou.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const routes : Routes = [
    // { path: '', redirectTo: '/registrationForm', pathMatch: 'full' },
    { path: '', component: RegistrationFormComponent },
    { path: 'registrationForm', component : RegistrationFormComponent },
    { path: 'thankyou' , component : ThankyouComponent},
    { path: '**' , component : PageNotFoundComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 declarations: []
})
export class AppRoutingModule { }