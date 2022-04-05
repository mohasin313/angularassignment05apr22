import { Component, OnInit } from '@angular/core';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
  providers:[SortPipe]
})
export class SortComponent implements OnInit {

  array = [1,2,4,3,8,6,5];


  constructor(private sort:SortPipe) { }

  ngOnInit(): void {
    this.array.sort();
  }

  sort_asc(){
   this.array = this.sort.transform('asc',this.array)
  }

  sort_desc(){
    this.array = this.sort.transform('desc',this.array)
  }
}
