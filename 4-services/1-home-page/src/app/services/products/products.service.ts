import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductsResponse } from '../../../../../../shared/mocks/4-services/products';

@Injectable()
export class ProductsService {
	public constructor(private _httpClient: HttpClient) {}

	public getProducts(): Observable<IProductsResponse> {
		return this._httpClient.get<IProductsResponse>('api/products/suggestion ');
	}
}
