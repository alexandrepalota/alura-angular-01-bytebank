import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number = 12;
  target: number = 222;

  transfer() {
    console.log('Requested new transfer');
    const valueEmit = { value: this.value, target: this.target };
    this.onTransfer.emit(valueEmit);
  }
}
