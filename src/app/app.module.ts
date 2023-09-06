import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { AddeditTransactionComponent } from './transaction-details/addedit-transaction/addedit-transaction.component';
import { Router ,RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    TransactionDetailsComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    TransactionDetailsComponent,
    FilterPipe,
    AddeditTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    HttpClientModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    DialogModule,
    CommonModule,
    RouterModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
