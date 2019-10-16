import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadPowerComponent } from './dad-power/dad-power.component';

const routes: Routes = [
  {
    path: '',
    component: DadPowerComponent,
    // children: [
    //   {
    //     path: '',
    //     children: [
    //       {

    //       }
    //     ]

    //   }
    // ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
