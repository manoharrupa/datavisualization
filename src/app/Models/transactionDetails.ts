export class TransactionDetails{
    userId:number=0;
    txnId:number = 0;
    amount:number =0;
    bank:string = '';
    cardType:string ='';
    city:string = '';
    expType:string= '';
    gender:string = '';
    txnTime:Date= new Date();
    status:string = '';
    updatedTime: Date = new Date();
    constructor(){

    }
}