import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  myForm: FormGroup

  constructor() { }

  ngOnInit() {

    this.myForm = new FormGroup({
      first: new FormControl(''),
      last: new FormControl('')
    })
  }
 submitForm(){
   let data = this.myForm.value
   console.log(data)
 }
  
}
