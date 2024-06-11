import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';





@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})

export class StudentComponent implements OnInit {
    public student:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
        cls: '',
    }




    constructor (
        private studentService: StudentService,
    ) { }

    ngOnInit() {
        this.student.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }



  modalpopup: boolean = false;
  Updatemodalpopup: boolean = false;
  show:any = -999;
  deleteshow:any;



  openModal() {
    this.modalpopup = true;
  }

  updateModelPopup(){
    this.Updatemodalpopup = true;
  }

  deleteShow(index:any){
    this.deleteshow = index;
  }

  deleteConfirm(data:any){
    this.Delete(data.id);
    this.deleteshow = -999
  }

}





