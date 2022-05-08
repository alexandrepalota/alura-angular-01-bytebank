import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transfers: any[] = [];

  doTransfer($event) {
    console.log($event)
    const transfer = {...$event, date: new Date()}
    this.transfers.push(transfer)
  }
}
