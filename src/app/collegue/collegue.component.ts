import { Component, OnInit } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  col: Collegue = collegueMock;
  constructor() { }

  ngOnInit(): void {
  }

}
