import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadPowerComponent } from './dad-power/dad-power.component';
import { PatienceComponent } from './patience/patience.component';
import { FunComponent } from './fun/fun.component';

const routes: Routes = [
  {
    path: '',
    component: DadPowerComponent,
    children: [
      {
        path: 'patience',
        component: PatienceComponent
      }, {
        path: 'fun',
        component: FunComponent
      }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
