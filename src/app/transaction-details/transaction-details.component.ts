import { Component, OnChanges, OnInit, SimpleChanges,  } from '@angular/core';
import { TransactionDetails } from '../Models/transactionDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranscationServiceService } from '../services/transcation-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css'],
})
export class TransactionDetailsComponent implements OnInit, OnChanges {
  transactions: TransactionDetails[]=[];

  searchFilter: string = '';
  filterProperties: string[] = ['bank', 'cardType', 'city', 'status', 'txnId', 'txnTime'];
 
  constructor(private fb: FormBuilder, private transcationServiceService : TranscationServiceService, private toastr: ToastrService
    ) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.transactions = this.transcationServiceService.getTransactionDetails();
  }
  onRowEditInit(product: TransactionDetails) {
    console.log(product);
  }
  ngOnInit(): void {
    const storedValue = sessionStorage.getItem('userID');
    let numberValue = 0;
    if (storedValue !== null) {
      numberValue = parseInt(storedValue);
    }
    this.transcationServiceService.getAllTransactionDetails(9999).subscribe(response =>{
      this.transactions = response;
      this.transcationServiceService.transactions = this.transactions;
    }, error =>{
      this.toastr.error(error.error.error);  
    }
    );
  }

  deleteProduct(txnId: number) {
    this.transcationServiceService.deletePrdouct(txnId).subscribe(response => {  
      const indexToDelete = this.transactions.findIndex(
        (item) => item.txnId === txnId
      );
      if (indexToDelete !== -1) {
        this.transactions.splice(indexToDelete, 1);
      }
      this.toastr.success('Product Deleted SuccessfullY');
    }, error =>{
        this.toastr.error(error.error.error);    
    });
    
  }
  showEditModal(txnId: number) {
    this.selectedProduct = this.transactions.filter(
      (product) => product.txnId === txnId
    )[0];
    // this.transactionForm.patchValue(this.selectedProduct);
    this.displayAddEditModal = true;
    /// backend changes
  }
  hideAddModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }
  
  showAddModal() {
    

    this.displayAddEditModal = true;
    this.selectedProduct = null;
  }
  saveorUpdateProductList(newData: TransactionDetails) {
    if (this.selectedProduct && newData.txnId === this.selectedProduct.id) {
      const productIndex = this.transactions.findIndex(data => data.txnId === newData.txnId);
      // this.transactions[productIndex] = newData;
    } else {
      this.transactions.unshift(newData);
    }

    //this.getProductList();
  }
  displayAddEditModal = false;
  selectedProduct: any = null;
}
