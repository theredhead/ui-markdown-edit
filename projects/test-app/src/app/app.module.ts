import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UiMarkdownEditModule } from 'projects/ui-markdown-edit/src/lib/ui-markdown-edit.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, UiMarkdownEditModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
