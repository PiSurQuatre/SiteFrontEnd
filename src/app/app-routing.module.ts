import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      titre: 'Accueil'
    },
    children: [
      {
        path: 'accueil',
        pathMatch: 'full',
        data: {
          title: 'Accueil'
        },
        loadChildren: './accueil/accueil.module#AccueilModule'
      },
      {
        path: 'about',
        pathMatch: 'full',
        data: {
          title: 'A propos de moi'
        },
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'page-introuvable',
        pathMatch: 'full',
        data: {
          title: 'Page introuvable'
        },
        loadChildren: './page-introuvable/page-introuvable.module#PageIntrouvableModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'page-introuvable'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
