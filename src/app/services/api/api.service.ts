import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  callApi(
    endpoint: string,
    method: 'get' | 'post' | 'put' | 'delete',
    params = {},
    id: string | null = null,
    files: FileList | null = null
  ): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}${id ? `/${id}` : ''}`;

    if (method === 'get') {
      const queryParams = new HttpParams({ fromObject: params });
      return this.http.get(url, { params: queryParams });
    } else if (method === 'post') {
      if (files) {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append('files', files[i], files[i].name);
        }
        return this.http.post(url, formData);
      } else {
        return this.http.post(url, params);
      }
    } else if (method === 'put') {
      return this.http.put(url, params);
    } else if (method === 'delete') {
      return this.http.delete(url);
    } else {
      throw new Error(`Invalid API method for ${endpoint}`);
    }
  }

  public downloadFile(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
