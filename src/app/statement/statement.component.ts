import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  @Input() transfers: Transfer[];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((transfers: Transfer[]) => {
      console.table(transfers)
      this.transfers = transfers
    })
  }

}
