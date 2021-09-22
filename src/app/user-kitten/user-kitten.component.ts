import { Component, OnInit } from '@angular/core';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {
  public myKitten:Kitten[];
  constructor() { }

  ngOnInit(): void {
  }

}
