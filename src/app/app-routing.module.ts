import { RouterModule, Routes } from '@angular/router';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { NgModule } from '@angular/core';
import { BartenderComponentComponent } from './bartender-component/bartender-component.component';
import { AddComponentComponent } from './add-component/add-component.component';

export const routes: Routes = [
    {
        path: '',
        component: MenuComponentComponent
    },
    {
        path: 'menu',
        component: MenuComponentComponent
    },
    {
        path: 'queue',
        component: BartenderComponentComponent
    },
    {
        path: 'add',
        component: AddComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  