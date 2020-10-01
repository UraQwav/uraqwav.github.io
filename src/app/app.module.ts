import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { MySkilsComponent } from './components/for-home-page/my-skils/my-skils.component';
import { SomeMyWorkComponent } from './components/for-home-page/some-my-work/some-my-work.component';
import { MyStudyComponent } from './components/for-home-page/my-study/my-study.component';
import { MyContactsComponent } from './components/for-home-page/my-contacts/my-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent,
    HomePageComponent,
    BlogPageComponent,
    PortfolioPageComponent,
    MySkilsComponent,
    SomeMyWorkComponent,
    MyStudyComponent,
    MyContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
