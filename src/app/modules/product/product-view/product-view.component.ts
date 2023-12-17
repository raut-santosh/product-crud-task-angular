import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  items: any = [];
  model: any = {};
  productId: string;
  apiUrl: string = environment.apiUrl;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log('Query Parameter Value:', this.productId);
    });

    if (this.productId) {
      console.log('called the product',this.productId)
      this.getProduct();
    }
  }

  getProduct(){
    this.apiService.callApi('products','get', null, this.productId).subscribe(
      (response) => {
        console.log('response of : ',response);
        this.model = response;
        this.items = response.images;
      },
      (error) => {
        console.log('error of', error)
      }
    )
  }

  goBack(){
    this.location.back();
  }
}
