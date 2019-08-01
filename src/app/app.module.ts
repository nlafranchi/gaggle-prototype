import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignOnPageComponent } from './sign-on-page/sign-on-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountCreationModalComponent } from './account-creation-modal/account-creation-modal.component';
import { GaggleInputComponent } from './gaggle-input/gaggle-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SignOnPageComponent,
    AccountCreationModalComponent,
    GaggleInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
