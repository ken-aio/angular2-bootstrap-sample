import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {
  CollapseDirective, DROPDOWN_DIRECTIVES, Ng2BootstrapConfig, Ng2BootstrapTheme
} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.html',
  styleUrls: ['app/navbar/navbar.css'],
  providers: [],
  directives: [CORE_DIRECTIVES, CollapseDirective, DROPDOWN_DIRECTIVES],
  pipes: []
})
export class Navbar {

  constructor() {}

}
