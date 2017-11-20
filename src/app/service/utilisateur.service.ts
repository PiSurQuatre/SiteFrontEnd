import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Page } from '../entitee/page.entitee';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class UtilisateurService {

    private API_URL = environment.API_URL;

    constructor(private http: HttpClient) { }


    getPage(page: number, taille: number): Observable<Page>{

        return this.http.get<Page>(this.API_URL + "/api/utilisateurs?page="+page+"&taille="+taille);
    }

}


