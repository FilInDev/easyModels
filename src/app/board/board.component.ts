import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { AutosizeModule } from 'ngx-autosize';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  user_name: string = 'user';

  cards_of_key_partners: card[] = [];

  cards_of_key_actions: card[] = [];
  cards_of_key_resources: card[] = [];
  cards_of_value_proposition: card[] = [];
  cards_of_customer_relationships: card[] = [];
  cards_of_channels: card[] = [];
  cards_of_customer_segments: card[] = [];
  cards_of_cost_structure: card[] = [];
  cards_of_income_streams: card[] = [];

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
  changeText(index, id_block) {
    switch (id_block) {
      case 0:
        this.cards_of_key_partners[index].show_text = false;
        break;
      case 1:
        this.cards_of_key_actions[index].show_text = false;
        break;
      case 2:
        this.cards_of_key_resources[index].show_text = false;
        break;
      case 3:
        this.cards_of_value_proposition[index].show_text = false;
        break;
      case 4:
        this.cards_of_customer_relationships[index].show_text = false;
        break;
      case 5:
        this.cards_of_channels[index].show_text = false;
        break;
      case 6:
        this.cards_of_customer_segments[index].show_text = false;
        break;
      case 7:
        this.cards_of_cost_structure[index].show_text = false;
        break;
      case 8:
        this.cards_of_income_streams[index].show_text = false;
        break;
      default:
        console.log(index, id_block);
        break;
    }
  }
  onCtrlEnter(index, id_block) {
    switch (id_block) {
      case 0:
        this.cards_of_key_partners[index].show_text = true;
        this.cards_of_key_partners[index].date = Date.now();
        break;
      case 1:
        this.cards_of_key_actions[index].show_text = true;
        this.cards_of_key_actions[index].date = Date.now();
        break;
      case 2:
        this.cards_of_key_resources[index].show_text = true;
        this.cards_of_key_resources[index].date = Date.now();
        break;
      case 3:
        this.cards_of_value_proposition[index].show_text = true;
        this.cards_of_value_proposition[index].date = Date.now();
        break;
      case 4:
        this.cards_of_customer_relationships[index].show_text = true;
        this.cards_of_customer_relationships[index].date = Date.now();
        break;
      case 5:
        this.cards_of_channels[index].show_text = true;
        this.cards_of_channels[index].date = Date.now();
        break;
      case 6:
        this.cards_of_customer_segments[index].show_text = true;
        this.cards_of_customer_segments[index].date = Date.now();
        break;
      case 7:
        this.cards_of_cost_structure[index].show_text = true;
        this.cards_of_cost_structure[index].date = Date.now();
        break;
      case 8:
        this.cards_of_income_streams[index].show_text = true;
        this.cards_of_income_streams[index].date = Date.now();
        break;
      default:
        console.log(index, id_block);
        break;
    }
  }
  addCard(type) {
    switch (type) {
      case 0:
        this.cards_of_key_partners.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 1:
        this.cards_of_key_actions.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 2:
        this.cards_of_key_resources.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 3:
        this.cards_of_value_proposition.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 4:
        this.cards_of_customer_relationships.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 5:
        this.cards_of_channels.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 6:
        this.cards_of_customer_segments.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 7:
        this.cards_of_cost_structure.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;
      case 8:
        this.cards_of_income_streams.push({
          name: this.user_name,
          text: '',
          date: Date.now(),
          show_text: false,
        });
        break;

      default:
        console.log(type);
        break;
    }
  }
}
type card = {
  name: string;
  text: string;
  date: number;
  show_text: boolean;
};
