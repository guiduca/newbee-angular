import { Component, OnInit } from '@angular/core';
import {PALOWANS} from '../mock-palowan'

@Component({
  selector: 'app-hierarchy-palowan',
  templateUrl: './hierarchy-palowan.component.html',
  styleUrls: ['./hierarchy-palowan.component.css']
})
export class HierarchyPalowanComponent implements OnInit {

  palowans = PALOWANS;
  constructor() { }

  ngOnInit() {
  }

}
