import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { CalendarPage } from '../pages/calendar/calendar';
import { PostulationListPage } from '../pages/postulation-list/postulation-list';
import { PostulationPage } from '../pages/postulation/postulation';
import { InterviewListPage } from '../pages/interview-list/interview-list';
import { InternshipListPage } from '../pages/internship-list/internship-list';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { AboutPage } from '../pages/about/about';

// Providers
import { Postulations } from '../providers/postulations';

@NgModule({
  declarations: [
    MyApp,
    CalendarPage,
    PostulationListPage,
    InterviewListPage,
    InternshipListPage,
    BookmarksPage,
    AboutPage,
    PostulationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarPage,
    PostulationListPage,
    InterviewListPage,
    InternshipListPage,
    BookmarksPage,
    AboutPage,
    PostulationPage
  ],
  providers: [ Postulations ]
})
export class AppModule {}
