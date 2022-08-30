import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent implements OnInit {
  nomCat: any;
  idCat: any;
  constructor(private categorieService: CategorieService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    // récupération de l'id de la catégorie
    this.route.paramMap.subscribe(
      params => {
        this.idCat = params.get('id');
      }
    );

    // récupération de l'objet catégorie

    this.categorieService.getCategorie(this.idCat).subscribe(
      categorie =>{
          this.nomCat = categorie["libelle"];
      }
    );
  }

  putCategorie()
  {
    let categorie={
      "id":this.idCat,
      "libelle":this.nomCat
    };
    this.categorieService.putCategorie(categorie).subscribe(
      data=>{
        this.router.navigate(['listCategorie']);
      }
    );
  }

}
