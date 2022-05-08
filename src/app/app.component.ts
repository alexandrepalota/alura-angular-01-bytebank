import { TransferService } from './services/transfer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferService) {}

  doTransfer($event) {
    this.service.addTransfer($event)
  }
}
