import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Storage } from '@ionic/storage';

// Logged out pages
import { LoginPage } from '../pages/login/login';
import { CalendarPage } from '../pages/calendar/calendar';
import { AboutPage } from '../pages/about/about';

// Logged in pages
import { InternshipListPage } from '../pages/internship-list/internship-list';
import { PostulationListPage } from '../pages/postulation-list/postulation-list';
import { InterviewListPage } from '../pages/interview-list/interview-list';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';

// Providers
import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  loggedInPages: PageInterface[] = [
    { title: 'Calendrier', component: CalendarPage, icon: 'calendar' },
    { title: 'Stages', component: InternshipListPage, icon: 'person' },
    { title: 'Postulations', component: PostulationListPage, icon: 'thumbs-up' },
    { title: 'Entrevues', component: InterviewListPage, icon: 'time' },
    { title: 'Favoris', component: BookmarksPage, icon: 'star-outline' },
    { title: 'A propos', component: AboutPage, icon: 'help' },
    { title: 'Logout', component: CalendarPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Se connecter', component: LoginPage, icon: 'log-in' },
    { title: 'Calendrier', component: CalendarPage, icon: 'calendar' },
    { title: 'A propos', component: AboutPage, icon: 'help' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage
  ) {
    this.initializeApp();

    this.rootPage = CalendarPage;
    // set our app's pages
    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });

    this.listenToLoginEvents();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }


  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.userData.logout();
      }, 1000);
    }
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}
