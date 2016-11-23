import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { CalendarPage } from '../pages/calendar/calendar';
import { PostulationListPage } from '../pages/postulation-list/postulation-list';
import { InterviewListPage } from '../pages/interview-list/interview-list';
import { InternshipListPage } from '../pages/internship-list/internship-list';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    CalendarPage,
    PostulationListPage,
    InterviewListPage,
    InternshipListPage,
    BookmarksPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    CalendarPage,
    PostulationListPage,
    InterviewListPage,
    InternshipListPage,
    BookmarksPage,
    AboutPage
  ],
  providers: []
})
export class AppModule {}
