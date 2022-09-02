import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/jwt-interceptor.service';

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
    AddPrefixPipe,
    CategorieEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
