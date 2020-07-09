import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PrimengModule } from "./primeNG/primeng.module";
import { QuizComponent } from "./quiz/quiz.component";
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, QuizComponent, SanitizeHtmlPipe],
  imports: [BrowserModule, AppRoutingModule, PrimengModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
