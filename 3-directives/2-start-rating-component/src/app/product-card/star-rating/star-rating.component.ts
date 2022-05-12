import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-shop-star-rating',
	templateUrl: './star-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	@Input()
	public feedbackRate: number | undefined = 0;

	public stars: number[] = [0, 1, 2, 3, 4];

	public highlight(index: number): boolean {
		return index < Math.round(this.feedbackRate || 0);
	}
}
