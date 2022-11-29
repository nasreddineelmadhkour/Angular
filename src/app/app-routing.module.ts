import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductComponent } from './product/product.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'emploi',component:OffresEmploiComponentComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'add',component:AddProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'template-driven-form',component:TemplateDrivenFormComponent},
  {path:'**',component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
