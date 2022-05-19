import { Inject, Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { BASE_URL_TOKEN } from './config';

export interface IRes<T> {
	data: T;
	error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {
	public constructor(@Inject(BASE_URL_TOKEN) private readonly _baseUrl: string) {}

	public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const { url, headers } = request;
		headers.append('Content-Type', 'application/json');
		const req = request.clone({
			headers: headers.append('Content-Type', 'application/json'),
			url: `${this._baseUrl}${url}`,
		});

		return next.handle(req).pipe(
			filter(
				(event: HttpEvent<unknown>): event is HttpResponse<{ data: unknown }> =>
					event instanceof HttpResponse,
			),
			map((res: HttpResponse<{ data: unknown }>) => {
				return res.clone({ body: res.body && res.body.data });
			}),
		);
	}
}
