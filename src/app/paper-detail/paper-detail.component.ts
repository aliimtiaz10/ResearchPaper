import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Paper } from '../model/Paper';


@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.css']
})
export class PaperDetailComponent implements OnInit, OnChanges {
  @Input() paper: Paper;
  keyMap: Map<number, number[]> = new Map<number, number[]>();
  ngOnChanges(): void {
  }


  constructor() { }

  ngOnInit() {
    if (this.paper != null) {
      this.paper.authors.forEach(author => {
        let affiliationsIDList: Array<number> = [];
        this.paper.affiliations.forEach(affiliation => {
          let matchList: number[] = affiliation.author_id.filter(authID => authID == author.id)
          if (matchList.length > 0) {
            affiliationsIDList.push(affiliation.id);
            console.log("PUSING " + author.id + "  " + JSON.stringify(affiliationsIDList))
            this.keyMap.set(author.id, affiliationsIDList);
          }
        })
      })

    }
  }

  sortByID(a, b) {
    if (a.id < b.id)
      return -1;
    if (a.id > b.id)
      return 1;
    return 0;
  }

}
