import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; // Import the ContactComponent
import { AcceuilComponent } from './acceuil/acceuil.component';
const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
