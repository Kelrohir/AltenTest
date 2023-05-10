import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})

export class AppRoutingModule {}
