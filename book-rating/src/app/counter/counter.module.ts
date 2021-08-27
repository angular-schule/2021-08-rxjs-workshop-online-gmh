import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './+state/counter.reducer';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
  ],
})
export class CounterModule {}
