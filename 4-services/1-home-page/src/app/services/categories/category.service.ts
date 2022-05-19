import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../../../../../../shared/mocks/4-services/categories';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
	public constructor(private _httpClient: HttpClient) {}

	public getCategory(): Observable<ICategory[]> {
		return this._httpClient.get<ICategory[]>('api/categories');
	}
}
