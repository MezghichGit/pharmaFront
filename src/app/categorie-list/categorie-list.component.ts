import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../Models/models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  categories:Categorie[];
  constructor(private categorieService:CategorieService, private router: Router) { }
  ngOnInit(): void {
      this.refresh();
  }

  deleteCategorie(id:number){
    this.categorieService.deleteCategorie(id).subscribe(
     // data =>console.log(data)
     data =>this.refresh()
    );
  }

  refresh()
  {
    this.categorieService.getAllCategorie().subscribe(
      data=>{
        this.categories = data;
        //console.log(this.categories);
      }
    );
  }

  updateCategorie(id:any){
    this.router.navigate(['editCategorie' + '/' + id]);
  }

}
