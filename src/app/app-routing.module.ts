import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { authGuard } from './services/auth.guard';


const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: RegistrationComponent},
{path: '',component: AppLayoutComponent, canActivate: [authGuard],
  children: [{ path: '', redirectTo: '/details', pathMatch: 'full' },
    {path: 'details', component: TransactionDetailsComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
