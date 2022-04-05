import { Component, OnInit } from '@angular/core';
import { SearchPipe } from 'src/app/pipe/search.pipe';

@Component({
  selector: 'app-searchpipe',
  templateUrl: './searchpipe.component.html',
  styleUrls: ['./searchpipe.component.css'],
  providers:[SearchPipe]
})
export class SearchpipeComponent implements OnInit {

  search!:string;
  
  array = ["Cras justo odio mohasin","Dapibus ac facilisis in","Morbi leo risus mohasin","Porta ac consectetur ac","Vestibulum at eros mohasin"];

  constructor(private text:SearchPipe) { }

  ngOnInit(): void {
    
  }

  check(){
    let arr=[];
    arr = this.text.transform(this.search,this.array)
    if(arr.length > 0){
      this.array = arr;
    }else{
      this.array = this.array
    }
  }

}
