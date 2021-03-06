import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../../../../../../../shared/mocks/6-routing/categories';

@Component({
	selector: 'ngx-shop-side-menu',
	templateUrl: './side-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
	@Input()
	public categories: ICategory[] = [];

	public constructor(private router: Router) {}

	public currentName: string | null = null;

	public hover(name: string): void {
		this.currentName = name;
	}

	public mouseLeave(): void {
		this.currentName = null;
	}

	public redirectTo(subCategoryId: string): void {
		this.router.navigate(['/category', subCategoryId]);
	}
}
