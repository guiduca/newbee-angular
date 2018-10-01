import { Component, OnInit, Input } from '@angular/core';
import {Palowan} from '../palowan'

@Component({
  selector: 'app-palowan-info',
  templateUrl: './palowan-info.component.html',
  styleUrls: ['./palowan-info.component.css']
})
export class PalowanInfoComponent implements OnInit {
  @Input() palowan: Palowan;
  constructor() { }

  ngOnInit() {
  }

}
