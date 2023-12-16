import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-addedit',
  templateUrl: './product-addedit.component.html',
  styleUrls: ['./product-addedit.component.css']
})
export class ProductAddeditComponent implements OnInit {

  items = [];
  apiUrl = environment.apiUrl;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
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
}
