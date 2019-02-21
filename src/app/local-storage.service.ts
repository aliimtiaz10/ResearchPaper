import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAPERS } from './mock-papers';
import { Paper } from './model/Paper';

export const PAPER_ITEM_KEY = "storedPapers";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {



  constructor() { }


  setItem(key, value){
    localStorage.setItem(key,JSON.stringify(value));

  }

  
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

    
  getItemAsObservable(key:string) : Observable <any[]> {
    return of(JSON.parse(localStorage.getItem(key)));
  }


  public getPapers(): Observable<Paper[]> {

    return of(PAPERS);
  }



}
