import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,FontAwesomeModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit{

  faCoffee = faCoffee; 
  faTrash = faTrash; 
  faEdit = faEdit; 
  faHome = faHome; 
  faArrowRight = faArrowRight; 

  title = 'angular_17_crud_local_storage';

  @ViewChild('addNewModal') model: ElementRef | undefined;

  studentObj: Student = new Student();
  studentList: Student[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem("angular17crud");
    if(localData != null){
      this.studentList = JSON.parse(localData)
    }
  }

  filteredStudentList: Student[] = [];

  openAddNew(){       
    const model = document.getElementById("addNewModal");
    if(model != null){
      model.style.display = 'block';
    }
  }

  closeAddNew() {
    if( this.model != null){
      this.model.nativeElement.style.display = 'none';
    };  
    this.studentObj = new Student();   
  }

  onEdit(item: Student){
    this.studentObj = item;
    this.openAddNew();
  }

  onDelete(item:Student){
    const isDelete = confirm("Are you sure that you want to delete this data?  ${item.id} ");
    if (isDelete){
      const currentRecord = this.studentList.findIndex(m => m.id === this.studentObj.id); //find will error for splice function belows
      this.studentList.splice(currentRecord,1);
      localStorage.setItem('angular17crud',JSON.stringify(this.studentList));
    }
  }

  toDetails(){
    confirm("This function is not finished yet!");
  }

  saveStudent(){
    debugger;
    const isLocalPresent = localStorage.getItem("angular17crud");
    if(isLocalPresent != null){
      const oldArr = JSON.parse(isLocalPresent);
      this.studentObj.id = oldArr.length + 1; 
      oldArr.push(this.studentObj); 
      this.studentList = oldArr;
      localStorage.setItem('angular17crud', JSON.stringify(oldArr)); // Update localStorage
    }
    else {
      const newArr = [];
      newArr.push(this.studentObj);
      this.studentObj.id = 1;
      this.studentList = newArr; 
      localStorage.setItem('angular17crud',JSON.stringify(newArr))
    }
    this.studentObj = new Student();
    
  } 

  updateStudent(){
    const currentRecord = this.studentList.find(m => m.id === this.studentObj.id);
    if( currentRecord != undefined ){
      currentRecord.name = this.studentObj.name;
      currentRecord.address = this.studentObj.address;
      currentRecord.mobileNo = this.studentObj.mobileNo;
    };
    localStorage.setItem('angular17crud',JSON.stringify(this.studentList));
    this.studentObj = new Student(); 
  }

 


}



export class Student {
  id: number;
  name: string;
  mobileNo: string; 
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;
  
  constructor(){
    this.id = 0,
    this.name = '',
    this.mobileNo = '',
    this.email = '',
    this.city = '',
    this.state = '',
    this.pincode = '',
    this.address = ''
  }
}

