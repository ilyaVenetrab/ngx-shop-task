import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartProductComponent } from './cart-product/cart-product.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [CartComponent, CartProductComponent, OrderFormComponent],
	imports: [CartRoutingModule, SharedModule],
})
export class CartModule {}
