import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products:IProducts[];
categories:ICategory[];
selectedCategoryId:number|"All"="All";

constructor(){
  this.products=[
    { Id:1,Name:'Laptop',Price:300,ImgUrl:'images/plant2.jpg',Qty:4,CatId:1},
    { Id:2,Name:'IPhone',Price:500,ImgUrl:'images/plant3.jpg',Qty:7,CatId:2},
    { Id:3,Name:'IPad',Price:200,ImgUrl:'images/plant5.jpg',Qty:9,CatId:3},
    { Id:4,Name:'Mac Book',Price:800,ImgUrl:'images/plant4.jpg',Qty:1,CatId:4},
    { Id:5,Name:'Computer',Price:9000,ImgUrl:'images/plant6.jpg',Qty:8,CatId:5},
    { Id:6,Name:'Handfree',Price:400,ImgUrl:'images/plant7.jpg',Qty:2,CatId:6}
  
  ]
  this.categories=[
    {Id:1,Name:"Laptop"},
    {Id:2,Name:"IPad"},
    {Id:3,Name:"Phone"},
    {Id:4,Name:"Hand Free"}
  
  ]
}
 
get filterProducts():IProducts[]{
if(this.selectedCategoryId==='All'){
return this.products;
}else{
  return this.products.filter(p=>p.CatId===this.selectedCategoryId)
}
}

selectCategory(id:number|'All'){
  this.selectedCategoryId=id;
}


AddToCart(){}
}
