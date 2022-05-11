import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';

import { FeedbacksComponent } from './description/feedbacks/feedbacks.component';
import { StarRatingComponent } from './description/feedbacks/star-rating/star-rating.component';

@NgModule({
	declarations: [AppComponent, DescriptionComponent, StarRatingComponent, FeedbacksComponent],
	imports: [BrowserModule, BrowserAnimationsModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
