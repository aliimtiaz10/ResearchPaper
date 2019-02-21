import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { Paper } from '../model/Paper';


@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.css']
})
export class PaperDetailComponent implements OnInit,OnChanges {
  @Input() paper: Paper;
  keyMap : Map<number,number[]> = new Map<number,number[]>();
  ngOnChanges(): void {
    // if(this.paper!=null){
    //   console.log( " NG ON CHANGES "+JSON.stringify(this.paper))
    //   this.paper.authors.forEach(author => {
    //     this.paper.affiliations.forEach(affiliation => {
    //       let abcList : number[] = affiliation.author_id.filter(authID => authID === author.id)
    //       console.log("PUSING "+author.id +"  "+abcList)
    //       this.keyMap.set(author.id,abcList);
    //     })
    //   })
  
    // }
  }

  
  constructor() { }

  ngOnInit() {

    if(this.paper!=null){
      console.log( " NG ON CHANGES "+JSON.stringify(this.paper))
      this.paper.authors.forEach(author => {
        this.paper.affiliations.forEach(affiliation => {
          let abcList : number[] = affiliation.author_id.filter(authID => authID === author.id)
          console.log("PUSING "+author.id +"  "+abcList)
          this.keyMap.set(author.id,abcList);
        })
      })
  
    }
  }

}
