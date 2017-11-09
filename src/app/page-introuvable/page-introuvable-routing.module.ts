import { Routes, RouterModule } from "@angular/router";
import { PageIntrouvableComponent } from "./page-introuvable.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: PageIntrouvableComponent,
        data: {
            titre: 'Page introuvable'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageIntrouvableRoutingModule {}