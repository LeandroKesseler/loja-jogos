import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PainelPrincipalComponent } from './componentes/painel-principal/painel-principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RodapeComponent, PainelPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja-jogos';
}

const routes: Routes = [
  { path: 'painel-principal', component: PainelPrincipalComponent },
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

@NgModule({
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule
  ],
  })
  export class AppModule { }