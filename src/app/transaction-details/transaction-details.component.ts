import { Component, OnInit } from '@angular/core';
import { TransactionDetails } from '../Models/transactionDetails';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  products1: TransactionDetails[];
  displayAddEditModal = false;
  selectedProduct: any = null;

  constructor() {
    this.products1=[{txn_id:1,amount:2000,bank:'sbi',card_type:'visa',city:'bng',exp_type:'sports',gender:'M',txn_date:new Date(),txn_status:'success'}]
    this.selectedProduct=this.products1[0];
  }
  onRowEditInit(product: TransactionDetails){
    console.log(product);
    
}
ngOnInit(): void {
}

onRowEditSave(product: TransactionDetails){
    if (product.txn_id > 0) {
        // delete this.clonedProducts[product.id];
        // this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    }
    else {
        // this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    }
}

onRowEditCancel(product: TransactionDetails,index: number) {
    // this.products2?[index] = this.clonedProducts[0];
    // delete this.clonedProducts[product.id];
}
deleteProduct(product:TransactionDetails){
  console.log(product);
  
}
showDialog(){

}
showAddModal() {
  this.displayAddEditModal = true;
  this.selectedProduct = null;
}

hideAddModal(isClosed: boolean) {
  this.displayAddEditModal = !isClosed;
}
saveorUpdateProductList(newData: any) {
  if (this.selectedProduct && newData.id === this.selectedProduct.id) {
  //   const productIndex = this.products.findIndex(data => data.id === newData.id);
  //   this.products[productIndex] = newData;
  // } else {
  //   this.products.unshift(newData);
  // }

  //this.getProductList();
}
}
showEditModal(product: TransactionDetails) {
  this.displayAddEditModal = true;
  this.selectedProduct = product;
}
}
