import { Component, OnInit } from '@angular/core';
import {LocalStorageService,PAPER_ITEM_KEY} from '../local-storage.service';
import {Paper} from '../model/Paper'

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  papers : Paper[] = [];
  selectedPaper: Paper;
  public constructor (private localStorageService : LocalStorageService ){

  }

  ngOnInit() {
    this.loadDummyData();
    //console.log(JSON.stringify(this.papers))
  }

  loadDummyData(){

     this.localStorageService.getItemAsObservable(PAPER_ITEM_KEY).subscribe(papers => {
      if(papers==null || papers==undefined){
      console.log("didnt find in local storage so setting up dummy data")
      this.localStorageService.getPapers().subscribe(pap => {this.papers = pap;
        this.localStorageService.setItem(PAPER_ITEM_KEY,this.papers);
      } );
 
      } else {
        console.log("found from local storage so getting that")
        this.papers = papers;
      }
      });
    }

  onSelect(paper: Paper): void {
    this.selectedPaper = paper;
  }

  renderDummyData(){

  }

}
