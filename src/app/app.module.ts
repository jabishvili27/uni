import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContextComponent } from './context/context.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ResearchEuComponent } from './research-eu/research-eu.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DiscussEuComponent } from './discuss-eu/discuss-eu.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { AdminComponent } from './admin/admin.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [	
    AppComponent,
    LanguageSelectorComponent,
    AboutPageComponent,
    HorizontalMenuComponent,
    FooterComponent,
    ContextComponent,
    StaffPageComponent,
    NewsPageComponent,
    ResearchEuComponent,
    BlogComponent,
    ContactMeComponent,
    DiscussEuComponent,
    VideoComponentComponent,
      AdminComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
