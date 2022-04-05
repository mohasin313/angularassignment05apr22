
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/interface/employe';
import { EmployeService } from 'src/app/services/employe.service';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  id!:number; 
  fname!:string;
  lname!:string;
  email!:any;
  contact!:number;

  constructor(protected pro:EmployeService,protected router:Router) { }

  ngOnInit(): void {
  }

  empadd(){

    let userAdd = {fname:this.fname,lname:this.lname,email:this.email,contact:this.contact}
    this.pro.adduser(userAdd)
    .subscribe(res=>{
      if(res){
        alert(res);
        this.router.navigate(['/list'])
      }
    })
  }

}
