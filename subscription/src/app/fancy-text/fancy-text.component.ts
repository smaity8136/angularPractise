import {Component} from '@angular/core'

@Component({
    selector: "fancy-text",
    //template: "<input type='text' style='border-color:black; border-width:thin; border-radius:6px; height:20pt;'>",
   // styles: ["input[type='text'] {border-color:black; border-width:thin; border-radius:6px; height:20pt;}"],

   styleUrls: ["./fancy-text.component.css"],
    template: "<input type='text'/>"
})

export class FancyText{

}