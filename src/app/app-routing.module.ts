import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientInfoComponent } from './form-client-info/form-client-info.component';
import { RecapClientInfoComponent } from './recap-client-info/recap-client-info.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
