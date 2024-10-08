import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'message/:id',
    loadChildren: () =>
      import('./view-message/view-message.module').then(
        (m) => m.ViewMessagePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'cadastro-atleta',
    loadChildren: () =>
      import('./cadastro-atleta/cadastro-atleta.module').then(
        (m) => m.CadastroAtletaPageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'cadastro-treino',
    loadChildren: () =>
      import('./cadastro-treino/cadastro-treino.module').then(
        (m) => m.CadastroTreinoPageModule
      ),
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./perfil/perfil.module').then(
        (m) => m.PerfilModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
