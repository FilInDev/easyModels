import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { PinchZoomModule } from 'ngx-pinch-zoom';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  name:string='user';
  cards_of_key_partners:card[]=[];
  cards_of_key_actions:card[]=[];
  cards_of_key_resources:card[]=[];
  cards_of_value_proposition:card[]=[];
  cards_of_customer_relationships:card[]=[];
  cards_of_channels:card[]=[];
  cards_of_customer_segments:card[]=[];
  cards_of_cost_structure:card[]=[];
  cards_of_income_streams:card[]=[];

  temp_text:string="";
  vamps = [
    { name: 'Bad Vamp' },
    { name: 'Petrovitch the Slain' },
    { name: 'Bob of the Everglades' },
    { name: 'The Optimistic Reaper' },
  ];

  vamps2 = [
    { name: 'Dracula' },
    { name: 'Kurz' },
    { name: 'Vladislav' },
    { name: 'Deacon' },
  ];
  constructor(private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup('segments', {
      // ...
    });

    // this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
    //   console.log(args);
    // });
  }
  ngOnInit() {}
}
type card = {
  name:string[];
  text:string[];
  date:number;
}