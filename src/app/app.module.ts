import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MultCardComponent } from './mult-card/mult-card.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './directives/autofocus.directive';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    MainNavComponent,
    MultCardComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
