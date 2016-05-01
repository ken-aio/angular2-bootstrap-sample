import {Component} from 'angular2/core';
import {Navbar} from './navbar/navbar';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: 'app/root.html',
  styleUrls: ['app/root.css'],
  directives: [Navbar],
  pipes: []
})
export class AppRoot {
}
