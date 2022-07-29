import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContextComponent } from './context/context.component';
import { DiscussEuComponent } from './discuss-eu/discuss-eu.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ResearchEuComponent } from './research-eu/research-eu.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { VideoComponentComponent } from './video-component/video-component.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'staff',
    component: StaffPageComponent,
  },
  {
    path: 'news',
    component: NewsPageComponent,
  },
  {
    path: 'researchEu',
    component: ResearchEuComponent,
  },
  {
    path: 'staff',
    component: StaffPageComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'discuss-eu',
    component: DiscussEuComponent,
  },
  {
    path: 'contact',
    component: ContactMeComponent,
  },
  {
    path: 'context',
    component: ContextComponent,
  },
  {
    path: 'video',
    component: VideoComponentComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
