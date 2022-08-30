import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PharmaListComponent } from './pharma-list/pharma-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'listCategorie', component:CategorieListComponent},
  {path:'editCategorie/:id', component:CategorieEditComponent},
  {path:'listPharma', component:PharmaListComponent},
  {path:'listPatient', component:PatientListComponent},
  {path:'listPost', component:PostListComponent},
  {path:'registration', component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
