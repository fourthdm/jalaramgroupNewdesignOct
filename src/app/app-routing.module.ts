import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: '' },
  { path: 'About', component: AboutComponent, title: '' },
  { path: 'Projects', component: ServiceComponent, title: '' },
  { path: 'Capabilities', component: CapabilitiesComponent, title: "" },
  { path: 'Contact', component: ContactComponent, title: 'Contact Jalaramgroup' },
  { path: 'Product', component: ProductComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
