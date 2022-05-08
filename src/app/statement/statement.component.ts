import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  @Input() transfers: any[];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.transfers = this.service.transfers
  }

}
