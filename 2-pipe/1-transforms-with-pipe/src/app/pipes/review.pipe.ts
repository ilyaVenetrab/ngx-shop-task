import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
	public transform(_countOfReviews: number | undefined): string {
		return '';
	}
}
