import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import * as moment from 'moment';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: any = [];
  apiUrl = environment.apiUrl;
  constructor(private location:Location, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.apiService.callApi('products', 'get').subscribe(
      (response) => {
        console.log('response : ', response);
        this.items = response;
      },
      (error) => {
        console.log('error : ', error);
      }
    )
  }

  deleteProduct(id){
    this.apiService.callApi('products', 'delete', null, id).subscribe(
      (response) => {
        console.log('product deleted :', response);
        Swal.fire({
          icon: 'success',
          title: `Product successfully deleted.`,
          showConfirmButton: false,
          timer: 1500
        });
        this.getAllProducts();
      },
      (error) => {
        console.log('error: ', error)
      }
    )
  }

  goBack(){
    this.location.back();
  }

  updatedOn(date){
    return moment(date).fromNow();
  }
}
