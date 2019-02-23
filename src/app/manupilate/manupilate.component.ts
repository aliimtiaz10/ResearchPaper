import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {PAPERS} from '../mock-papers'
import { Paper } from '../model/Paper';

@Component({
  selector: 'app-manupilate',
  templateUrl: './manupilate.component.html',
  styleUrls: ['./manupilate.component.css']
})
export class ManupilateComponent implements OnInit {

  //constructor() { }
  //paper:Paper = PAPERS[0];

  ngOnInit() {
  }
  //data = {papers:PAPERS};
  data = {
    papers: [
      {
        id : 1,
        title: "example paper",
        authors: [
          {
            id : 1,
            name: "example author",
          }
        ], affiliations: [
          {
              id: 1,
              name: "University of Utopia"
              ,
             author_id: [1]
          }]
      }
    ]
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      papers: this.fb.array([])
    })

    this.setpapers();
  }

  addNewPaper() {
    let control = <FormArray>this.myForm.controls.papers;
    control.push(
      this.fb.group({
        title: [''],
        id: control.length+1,
        authors: this.fb.array([]),
        affiliations: this.fb.array([])
      })
    )
  }

  deletePaper(index) {
    let control = <FormArray>this.myForm.controls.papers;
    control.removeAt(index)
  }

  addNewAuthor(control) {
    control.push(
      this.fb.group({
        name: [''],
        id : control.length+1
      
      
      }))
  }

  deleteAuthor(control, index) {
    control.removeAt(index);
    //add remove logic for dependent organization references as well
  }
  addNewAffiliation(control) {
    control.push(
      this.fb.group({
        name: [''],
        id : control.length+1
      
      
      }))
  }

  deleteAffiliation(control, index) {
    control.removeAt(index);
    //add remove logic for dependent organization references as well
  }

  setpapers() {
    let control = <FormArray>this.myForm.controls.papers;
    this.data.papers.forEach(x => {
      control.push(this.fb.group({
        id:x.id, 
        title: x.title, 
        authors: this.setauthors(x),
        affiliations: this.setaffiliations(x) }))
    })
  }

  setauthors(x) {
    let arr = new FormArray([])
    x.authors.forEach(y => {
      arr.push(this.fb.group({
        id:y.id, 
        name: y.name 
      }))
    })
    return arr;
  }

  setaffiliations(x) {
    let arr = new FormArray([])
    x.affiliations.forEach(y => {
      arr.push(this.fb.group({
        id:y.id, 
        name: y.name 
      }))
    })
    return arr;
  }

  genId(data: any[]): number {
    return data.length > 0 ? Math.max(...data.map(x => x.id)) + 1 : 1;
  }
}


