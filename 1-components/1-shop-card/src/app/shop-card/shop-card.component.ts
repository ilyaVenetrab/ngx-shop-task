import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ngx-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {}
