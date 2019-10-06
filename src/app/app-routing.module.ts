// 0702280 Annemari Mustonen

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

// Routing paths for the needed pages
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
