import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path: '', component:TesteComponent},
  {path: 'person', component:PersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
