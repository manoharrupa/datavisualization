import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TransactionDetails } from 'src/app/Models/transactionDetails';
import { TranscationServiceService } from 'src/app/services/transcation-service.service';

@Component({
  selector: 'app-addedit-transaction',
  templateUrl: './addedit-transaction.component.html',
  styleUrls: ['./addedit-transaction.component.css']
})
export class AddeditTransactionComponent {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedProduct: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<TransactionDetails> = new EventEmitter<TransactionDetails>();
  modalType = "Add";
  transactionForm: FormGroup;
  userID = 0;
  genders=['M','F'];
  status=['sucess','failure','un-known'];
  transactions:TransactionDetails[]=[];
  constructor(private fb: FormBuilder ,private transactionservice:TranscationServiceService, private toastr: ToastrService,) {this.selectedProduct = new TransactionDetails();

    this.transactionForm = this.fb.group({
      txnId: [this.selectedProduct.txnId],
      amount: [this.selectedProduct.amount, Validators.required],
      bank: [this.selectedProduct.bank, Validators.required],
      city: [this.selectedProduct.city, Validators.required],
      cardType: [this.selectedProduct.cardType, Validators.required],
      expType: [this.selectedProduct.expType, Validators.required],
      gender: [this.selectedProduct.gender, Validators.required],
      txnTime: [this.selectedProduct.txnTime],
      status: [this.selectedProduct.status, Validators.required],
      });
  }
  addEditProduct() {
    let temptransactions = this.transactionservice.transactions;
    this.transactions =  this.transactionservice.transactions;
    const updateTransaction={
      txnId:this.transactionForm.get('txnId')?.value,
      userId: 9999,
      amount:this.transactionForm.get('amount')?.value,
      bank:this.transactionForm.get('bank')?.value,
      city:this.transactionForm.get('city')?.value,
      cardType:this.transactionForm.get('cardType')?.value,
      expType:this.transactionForm.get('expType')?.value,
      gender:this.transactionForm.get('gender')?.value,
      txnTime:this.transactionForm.get('txnTime')?.value,
      status:this.transactionForm.get('status')?.value
      } as TransactionDetails
        this.closeModal();
    // bankend api call

    this.transactionservice.updateProduct(updateTransaction).subscribe((response) => { 
      const indexToDelete = this.transactions.findIndex(
        (item) => item.txnId === updateTransaction.txnId
      );
      if (indexToDelete !== -1) {
        this.transactions.splice(indexToDelete, 1);
      }
      this.transactions.push(updateTransaction);
      this.transactionservice.setTransactionDetails(this.transactions);
      this.toastr.success('Product Updated SuccessfullY');
    }, error =>{
      this.transactions = temptransactions;
      this.toastr.error('Product Update Failed');      
    });
    this.closeModal();
  }
 

  closeModal() {
    this.transactionForm.reset();
    this.clickClose.emit(true);

  }
  ngOnInit(): void {
    this.transactions = this.transactionservice.getTransactionDetails();
    const storedValue = sessionStorage.getItem('userID');
     this.userID = 0;
    if (storedValue !== null) {
      this.userID = parseInt(storedValue);
    }
  }

  ngOnChanges(): void {
    if (this.selectedProduct) {
      this.modalType = 'Edit';
      this.transactionForm.patchValue(this.selectedProduct);
    } else {
      this.transactionForm.reset();
      this.modalType = 'Add';
    }
  }
  addNewProduct(){
   
    const storedValue = sessionStorage.getItem('userID');
    let userID = 0;
    if (storedValue !== null) {
      userID = parseInt(storedValue);
    }
    if (this.transactionForm.valid) {
      const details={
        txnId:this.transactionForm.get('txnId')?.value,
        userId: 9999,
        amount:this.transactionForm.get('amount')?.value,
        bank:this.transactionForm.get('bank')?.value,
        city:this.transactionForm.get('city')?.value,
        cardType:this.transactionForm.get('cardType')?.value,
        expType:this.transactionForm.get('expType')?.value,
        gender:this.transactionForm.get('gender')?.value,
        txnTime:new Date(),
        status:this.transactionForm.get('status')?.value
        } as TransactionDetails
      this.transactionservice.addProduct(details).subscribe((response) => {
        this.transactionservice.getTransactionDetails().push(response);
        this.displayAddEditModal = false;
        this.toastr.success("added new transaction successfully");
      }, error =>{
        this.toastr.warning(error.error.userId);
      });
     
  }
}
}
