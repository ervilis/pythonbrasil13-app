import { Component } from '@angular/core';

import { PresentationsPage } from '../presentations/presentations';
import { TutorialsPage } from '../tutorials/tutorials';
import { HomePage } from '../home/home';
import { SprintsPage } from '../sprints/sprints';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PresentationsPage;
  tab3Root = TutorialsPage;
  tab4Root = SprintsPage;

  constructor() {

  }
}
