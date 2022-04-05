import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/interface/employe';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  pdata:Employe[] = [];
  mg:any;
  constructor(private pro:EmployeService) { }

  ngOnInit(): void {
    this.pro.getuser()
    .subscribe((res:Employe[])=>{
      this.pdata = res;
      console.log(this.pdata)
    })
  }

  delete(id:any){
    if(confirm('Do you want to delete this record?')){
      this.pro.deleteuser(id)
      .subscribe(res =>{
        if(res)
        {
          alert(res);
          this.pro.getuser()
          .subscribe((res:Employe[])=>{
            this.pdata = res;
            console.log(this.pdata)
          })
        }
      })
    }
    
  }



}
