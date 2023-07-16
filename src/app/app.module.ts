import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryGameComponent } from './pages/memory-game/memory-game.component';
import { ConfettiComponent } from './components/confetti/confetti.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryGameComponent,
    ConfettiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
