import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { ApitrainComponent } from './apitrain/apitrain.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'home', component: MainComponent},
  { path: 'user', component: UserComponent},
  { path: 'api/train', component: ApitrainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    ApitrainComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule // notmalement oui car le router est dans un module à part entière
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
