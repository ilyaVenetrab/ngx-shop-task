import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../../shared/mocks/4-services/product-information';

@Injectable()
export class ProductsService {
	public constructor(private _httpClient: HttpClient) {}

	public getProductById(id: string): Observable<IProduct> {
		return this._httpClient.get<IProduct>(`api/products/${id}`);
	}
}
