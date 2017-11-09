import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIntrouvableComponent } from './page-introuvable.component';
import { PageIntrouvableRoutingModule } from './page-introuvable-routing.module';

@NgModule({
  imports: [
    PageIntrouvableRoutingModule,
    CommonModule
  ],
  declarations: [PageIntrouvableComponent]
})
export class PageIntrouvableModule { }
