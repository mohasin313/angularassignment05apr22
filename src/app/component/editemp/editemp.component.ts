import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/interface/employe';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  id!:number; 
  fname!:string;
  lname!:string;
  email!:any;
  contact!:number;

  constructor(protected r:ActivatedRoute,protected pro:EmployeService,protected router:Router) { }

  ngOnInit(): void {
    this.id = this.r.snapshot.params['id'];
    this.pro.getuserdeatils(this.id)
    .subscribe(res=>{
      
      this.fname=res[0].fname;
      this.lname=res[0].lname;
      this.email=res[0].email;
      this.contact=res[0].contact;
    })
  }

  empedit(){
    let editEmp={id:this.id,fname:this.fname,lname:this.lname,email:this.email,contact:this.contact}
    this.pro.updateuserdetails(this.id,editEmp)
      .subscribe(res=>{
        if(res){
          alert('Employee updated successfully');
          this.router.navigate(["/list"])
        }
      })
    }
  

}
