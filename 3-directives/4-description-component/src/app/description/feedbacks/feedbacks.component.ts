import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
	IFeedback,
	IProduct,
} from '../../../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-feedbacks',
	templateUrl: './feedbacks.component.html',
	styleUrls: ['./feedbacks.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Input()
	public feedbacks: IFeedback[] | undefined = [];

	@Output()
	public addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

	public addNewFeedback(name: string): void {
		this.addFeedbackEvent.emit(name);
	}
}
