export interface Transaction {
    id:string;
    title:string;
    amount:number;
    type: 'income' | 'expense';
    description?:string;
    category: string;
}