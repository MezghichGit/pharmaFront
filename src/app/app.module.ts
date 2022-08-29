import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { PharmaListComponent } from './pharma-list/pharma-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddPrefixPipe } from './pipes/add-prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategorieListComponent,
    PharmaListComponent,
    PatientListComponent,
    PostListComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    AddPrefixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
