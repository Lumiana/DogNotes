// 1803518 Annemari Mustonen

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

// Routing paths for the needed pages
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
 // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
 // { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
 // { path: 'tab6', loadChildren: './tab6/tab6.module#Tab6PageModule' },
 // { path: 'tab7', loadChildren: './tab7/tab7.module#Tab7PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
