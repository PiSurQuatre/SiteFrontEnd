import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService.getPage(0,20).subscribe(data=>console.log(data));
  }

}
