import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private host = 'localhost';
  private port = 8080;
  private baseUrl: string = 'http://' + this.host + ':' + this.port + '/api/products?size=100';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
