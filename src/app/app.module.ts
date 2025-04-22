import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryGameComponent } from './pages/memory-game/memory-game.component';
import { ConfettiComponent } from './components/confetti/confetti.component';
import { SaveScoreModalComponent } from './components/save-score-modal/save-score-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { LoaderFullScreenComponent } from './components/loader-full-screen/loader-full-screen.component';
import { SimpleSnackbarComponent } from './components/simple-snackbar/simple-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryGameComponent,
    ConfettiComponent,
    SaveScoreModalComponent,
    ScoreListComponent,
    LoaderFullScreenComponent,
    SimpleSnackbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
