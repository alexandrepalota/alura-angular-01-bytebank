import { Transfer } from './../models/transfer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: Transfer[]
  private url = 'http://localhost:3000/transfers'

  constructor(private httpClient: HttpClient) {
    this.transferList = []
  }

  get transfers() {
    return this.transferList
  }

  getAll(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url)
  }

  addTransfer(transfer: any) {
    this.hydrate(transfer)
    this.transferList.push(transfer)
  }

  private hydrate(transfer: Transfer) {
    transfer.date = new Date()
  }

}
