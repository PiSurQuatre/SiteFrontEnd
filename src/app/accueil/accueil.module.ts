import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import { AccueilRoutingModule } from './accueil-routing.module';

@NgModule({
  imports: [
    AccueilRoutingModule,
    CommonModule
  ],
  declarations: [AccueilComponent]
})
export class AccueilModule { }
