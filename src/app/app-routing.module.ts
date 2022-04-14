import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {BaseComponent} from "./shared/components/base/base.component";
import {ListComponent} from "./pages/list/list.component";
import {EditComponent} from "./pages/edit/edit.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: BaseComponent, children: [
      {path: ':model', component: ListComponent},
      {path: ':model/:form', component: EditComponent},
      {path: ':model/:form/:id', component: EditComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
