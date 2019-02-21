import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  setItem(key, value){
    localStorage.setItem(key,JSON.stringify(value));

  }

  
  getItem(key){
    return JSON.parse(localStorage.get(key));
  }



}
