import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-transcation-details',
  templateUrl: './add-transcation-details.component.html',
  styleUrls: ['./add-transcation-details.component.css']
})
export class AddTranscationDetailsComponent {


@Input() displayAddEditModal: boolean = true;
  @Input() selectedProduct: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType = "Add";

  transactionForm = this.fb.group({
    txn_id: ["", Validators.required],
    amount: [0, Validators.required],
    bank: ["",Validators.required],
    city: ["", Validators.required],
    card_type: ["", Validators.required],
    exp_type: ["",Validators.required],
    gender: ["", Validators.required],
    txn_date: ["", Validators.required],
    txn_status: ["", Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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

  closeModal() {
    this.transactionForm.reset();
    this.clickClose.emit(true);
  }
addEditProduct() {
  this.clickAddEdit.emit();
  this.closeModal();
  const msg = this.modalType === 'Add' ? 'Product added' : 'Product updated';
    // this.productService.addEditProduct(this.transactionForm.value, this.selectedProduct).subscribe(
    //   response => {
    //     this.messageService.add({ severity: 'success', summary: 'Success', detail: msg });
    //   },
    //   error => {
    //     this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
    //     console.log('Errror occured');
    //   }
    // )
  }
}