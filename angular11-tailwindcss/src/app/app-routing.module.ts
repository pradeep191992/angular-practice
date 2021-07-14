import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'product/:title',
    pathMatch: 'full',
    loadChildren: () => import('./feature/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  // {
  //   path: 'product/:title',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./feature/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  // },
  {
    path: 'post-list',
    pathMatch: 'full',
    loadChildren: () => import('./feature/post-list/post-list.module').then(m => m.PostListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
