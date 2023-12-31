import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryGameComponent } from './pages/memory-game/memory-game.component';

const routes: Routes = [{
  path: '',
  component: MemoryGameComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
