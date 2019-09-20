import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  getCity(){
    return this.http.get('http://localhost:3000/api/city')
    //.map(res=>res.json());
  }

  addCity(newCity){
    var headers=new HttpHeaders();
    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/city',newCity,{headers:headers});
  }

  deletecity(id){
    return this.http.delete('http://localhost:3000/api/city/'+id);
    //res=>res.json();
  }

}
