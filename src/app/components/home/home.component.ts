import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../interface/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: iProduct[] = [];

  constructor(private itemSvc: ProductService) {}

  ngOnInit(): void {
    this.itemSvc.getAllProducts().subscribe((products) => {
      //mi da errore su questa riga e non capisco l'errore
      this.products = products;
      console.log(products);
    });
  }
}
