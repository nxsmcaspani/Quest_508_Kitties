import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KittenService } from '../kitten.service';
import { CatBreed, Kitten } from '../model/kitten.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {
  
  public kitten:Kitten = new Kitten();
  public catBreedList=CatBreed;
  
  @Output()
  createCat: EventEmitter<number> = new EventEmitter();

  constructor(private kittenService:KittenService, private router: Router) { }

  ngOnInit(): void {
  }

  addKitten(kitten:Kitten){
    this.kittenService.addKitten(kitten);
    this.router.navigateByUrl('');
  }
}
