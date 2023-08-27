import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { SigninComponent } from './signin/signin.component';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { MainComponent } from './main/main.component';

registerLocaleData(localePtBr);

const APP_ROUTES: Routes = [
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
  {
    path: '', component: MainComponent, pathMatch: 'full', children: [
      { path: '', component: HomeComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    PoModule,
    PoTemplatesModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    RouterModule.forRoot(APP_ROUTES),

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
