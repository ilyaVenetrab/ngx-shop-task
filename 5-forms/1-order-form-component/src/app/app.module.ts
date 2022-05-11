import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
	declarations: [AppComponent, OrderFormComponent],
	imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
