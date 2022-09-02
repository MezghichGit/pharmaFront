import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categorie } from '../Models/models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getAllCategorie(): Observable<Categorie[]> {
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Categorie[]>(environment.apiUrl + "categories.json", { headers });*/
   return this.http.get<Categorie[]>(environment.apiUrl + "categories.json");
  }

  deleteCategorie(id: any) {
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.delete(environment.apiUrl + "categories/" + id, { headers });*/
    return this.http.delete(environment.apiUrl + "categories/" + id);
  }

  getCategorie(id: any) {
    return this.http.get(environment.apiUrl + "categories/" + id);
  }

  putCategorie(categorie) {
    return this.http.put(environment.apiUrl + "categories/" + categorie['id'], categorie);
  }
}
