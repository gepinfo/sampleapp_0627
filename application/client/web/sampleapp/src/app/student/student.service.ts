import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class StudentService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllValues(data:any){
    return this.http.post(`${this.BaseURL}/`,data);
  }

  GetAllValues(){
    return this.http.get(`${this.BaseURL}/`);
  }

  Update(data:any){
    return this.http.put(`${this.BaseURL}//${data.id}`,data);
  }

  getSpecific(id:number){
    return this.http.get(`${this.BaseURL}//${id}`);
  }

  getSpecificHistory(id:number){
    return this.http.get(`${this.BaseURL}//${id}/history?days=30`);
  }

  DeleteValues(dataId:any){
     return this.http.delete(`${this.BaseURL}//${dataId}`);
  }

  GetEntityById(Id:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/id/` + Id);
  }

  Search(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `//get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}