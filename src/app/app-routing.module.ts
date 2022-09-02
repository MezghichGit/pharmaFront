import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PharmaListComponent } from './pharma-list/pharma-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { path: 'listCategorie', component: CategorieListComponent, canActivate: [AuthGuardService] },
  { path: 'editCategorie/:id', component: CategorieEditComponent, canActivate: [AuthGuardService] },
  { path: 'listPharma', component: PharmaListComponent, canActivate: [AuthGuardService] },
  { path: 'listPatient', component: PatientListComponent, canActivate: [AuthGuardService] },
  { path: 'listPost', component: PostListComponent, canActivate: [AuthGuardService] },
  { path: 'dashbaord', component: DashboardComponent , canActivate: [AuthGuardService]},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
