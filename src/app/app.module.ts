import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignOnPageComponent } from './components/sign-on-page/sign-on-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountCreationModalComponent } from './components/account-creation-modal/account-creation-modal.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { GridIconComponent } from './components/grid-icon/grid-icon.component';
import { UserService } from './services/user.service';
import { ModalService } from './services/modal.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignOnPageComponent,
    AccountCreationModalComponent,
    MainPageComponent,
    HeaderComponent,
    GridIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
