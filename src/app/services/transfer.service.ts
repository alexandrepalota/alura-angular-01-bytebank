import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: any[]

  constructor() {
    this.transferList = []
  }

  get transfers() {
    return this.transferList
  }

  addTransfer(transfer: any) {
    this.hydrate(transfer)
    this.transferList.push(transfer)
  }

  private hydrate(transfer: any) {
    transfer.date = new Date()
  }

}
