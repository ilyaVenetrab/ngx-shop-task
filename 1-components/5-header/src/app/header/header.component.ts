import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ngx-shop-header',
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Output()
	public goToBasket: EventEmitter<string> = new EventEmitter<string>();

	public counter: number = 5;

	public redirectTo(): void {
		this.goToBasket.emit();
	}
}
