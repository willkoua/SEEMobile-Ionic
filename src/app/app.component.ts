import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

// Pages
import { CalendarPage } from '../pages/calendar/calendar';
import { PostulationListPage } from '../pages/postulation-list/postulation-list';
import { InterviewListPage } from '../pages/interview-list/interview-list';
import { InternshipListPage } from '../pages/internship-list/internship-list';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = CalendarPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Calendrier', component: CalendarPage },
      { title: 'Postulations', component: PostulationListPage },
      { title: 'Entrevues', component: InterviewListPage },
      { title: 'Stages', component: InternshipListPage },
      { title: 'Favoris', component: BookmarksPage },
      { title: 'A propos', component: AboutPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
