
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedService} from './services/shared/shared.service';
import {AppComponent} from './components/application/app.component';
import {HomeComponent} from './components/home/home.component';
import {InternalComponent} from './components/internal/internal.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'internal', component: InternalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternalComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
