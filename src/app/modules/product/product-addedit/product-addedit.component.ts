import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-addedit',
  templateUrl: './product-addedit.component.html',
  styleUrls: ['./product-addedit.component.css']
})
export class ProductAddeditComponent implements OnInit {

  items: any = [];
  apiUrl: string = environment.apiUrl;
  model: any = {};
  productId: string;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
      console.log('Query Parameter Value:', this.productId);
    });

    if (this.productId) {
      console.log('called the product')
      this.getProduct();
    }
  }

  onFileChange(event: any) {
    const files: FileList = event.target.files;

    this.apiService.callApi('upload/files', 'post', {}, null, files).subscribe(
      (response) => {
        console.log('File upload successful:', response);
        this.items = response;
      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );
  }

  formSubmit(event: any){
    this.model.images = this.items;
    this.apiService.callApi('products','post',this.model).subscribe(
      (response) => {
        console.log('data uploaded: ', response);
        Swal.fire({
          icon: 'success',
          title: `Product ${this.model._id? 'updated': 'added'} successfully`,
          showConfirmButton: false,
          timer: 1500
        });
        this.model = response;
      },
      (error) => {
        console.log(error)
      }
    )
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

  deleteImage(index){
    this.items.splice(index,1);
  }
  goBack(){
    this.location.back();
  }
}
