import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionDetails } from '../Models/transactionDetails';

@Injectable({
  providedIn: 'root'
})
export class TranscationServiceService {
  private baseUrl = "http://localhost:8080/transaction"
  private addNewProductUrl = this.baseUrl+'/create';
  private UpdateTransactionUrl = this.baseUrl+"/updateTransaction";
  private getTransactions = this.baseUrl+ "/getTransactionData"
  private deleteUrl = this.baseUrl+ "/deleteTransaction"
  transactions:TransactionDetails[] =[];
 
  constructor(private http: HttpClient) {
    
  } 
  
  addProduct(newProduct:TransactionDetails){
      return this.http.post<any>(this.addNewProductUrl, newProduct);
  }
  updateProduct(updatedProduct:TransactionDetails){
    return this.http.put<any>(this.UpdateTransactionUrl, updatedProduct);
  }
  
  deletePrdouct(txnId:number){
    const deleteUrlWithId = `${this.deleteUrl}/${txnId}`;
    return this.http.delete<any>(deleteUrlWithId);
  }
  getAllTransactionDetails(userID: number){
    const getTranscationsUrl = `${this.getTransactions}/${userID}`;
    return this.http.get<any>(getTranscationsUrl);
  }
  getTransactionDetails(){
    return this.transactions;
  }

  setTransactionDetails(transactions: TransactionDetails[]){
   this.transactions = transactions;
  }




}
