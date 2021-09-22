import { Component, OnInit } from '@angular/core';
import { KittenService } from '../kitten.service';
import { Kitten } from '../model/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  public allKitten:Kitten[];
  constructor(private kittenService:KittenService) { }

  ngOnInit(): void {
    this.getAllKitten();
    console.log(this.allKitten);
  }

  getAllKitten(): void{
    this.kittenService.getAllkitten().subscribe(kittens => this.allKitten = kittens);
  }

  adopt(): void{

  }

}
