import { Routes, RouterModule } from "@angular/router";
import { AccueilComponent } from "./accueil.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: AccueilComponent,
        data: {
            titre: 'Dans accueil'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccueilRoutingModule {}