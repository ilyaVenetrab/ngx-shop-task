import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class AppComponent {}
