import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number = 12;
  target: number = 222;

  constructor(private service: TransferService, private router: Router) {}

  doTransfer() {
    console.log('Requested new transfer');
    const valueEmit: Transfer = { value: this.value, target: this.target };
    this.service.addTransfer(valueEmit).subscribe(result => {
      console.log(result)
      this.clearFields();
      this.router.navigateByUrl('statement')
    }, (error) => console.error(error))
  }

  clearFields() {
    this.value = 0;
    this.target = 0;
  }
}
