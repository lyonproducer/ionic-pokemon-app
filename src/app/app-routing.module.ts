import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-list',
    pathMatch: 'full'
  },
  {
    path: 'home-list',
    loadChildren: () => import('./pages/home-list/home-list.module').then( m => m.HomeListPageModule)
  },
  {
    path: 'pokemon-detail/:id',
    loadChildren: () => import('./pages/pokemon-detail/pokemon-detail.module').then( m => m.PokemonDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
