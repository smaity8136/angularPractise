import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    let requestData = {
      customerName: this.fullName,
      productCode: this.selectedEdition.editionCode,
      acceptPolicy: this.acceptPolicy,
      shipMode: this.selectedShipping
    }

    alert(JSON.stringify(requestData))
  }

  fullName = ""
  editions = [
    {editionCode: 1, editionName: "US", price: "10.99 USD"},
    {editionCode: 1, editionName: "Canada", price: "14.99 CAD"},
    {editionCode: 1, editionName: "International", price: "23.99 USD"}
  ]

  selectedEdition = this.editions[0]
  selectedShipping = ""
  acceptPolicy = false

}
