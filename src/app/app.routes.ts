import {Routes, RouterModule} from '@angular/router';

// Import router components
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

// Routes Configuration
const appRoutes: Routes = [
  {
    path: '',
    redirectTo:'/',
    terminal: true
  },
  {
    path: 'about',
    component: AboutComponent,
  }
]
