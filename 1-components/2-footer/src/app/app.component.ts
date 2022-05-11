import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title = '1. Интерполяция и связывание (Footer)';
}
