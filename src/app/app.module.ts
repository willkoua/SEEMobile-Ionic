import { NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { LoginPage } from '../pages/login/login';
import { CalendarPage } from '../pages/calendar/calendar';
import { PostulationListPage } from '../pages/postulation-list/postulation-list';
import { PostulationPage } from '../pages/postulation/postulation';
import { InterviewListPage } from '../pages/interview-list/interview-list';
import { InternshipListPage } from '../pages/internship-list/internship-list';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { AboutPage } from '../pages/about/about';

// Providers
import { UserData } from '../providers/user-data';
import { Postulations } from '../providers/postulations';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
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
    LoginPage,
    CalendarPage,
    PostulationListPage,
    InterviewListPage,
    InternshipListPage,
    BookmarksPage,
    AboutPage,
    PostulationPage
  ],
  providers: [ Postulations, UserData, Storage ]
})
export class AppModule {}
