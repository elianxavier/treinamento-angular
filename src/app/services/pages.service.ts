import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class PagesService{

    headers = new HttpHeaders({
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'app': environment.app        
    })
    constructor(
        private http: HttpClient
    ){}

    getPages(){
      return this.http.get(`${environment.apiUrl}/pages`, {headers: this.headers})
    }
  }