import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { DateService } from '../main/shared/date/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  peopleList = [
    {"name": "Patty", "like": "ui"},
    {"name": "Jena Bernard", "like": "nono"}
  ]

  userTyping: String= "";
  userForm: FormControl = new FormControl('placeholder');

  name: String = "";
  mail: String = "";
  like: String = '';
  showUserFormGroup = false;


  userFormGroup: FormGroup = new FormGroup(
    {
      name: new FormControl(''),
      mail: new FormControl('')
    }
  );

  // dateService: DateService;

  // Injection de dépendance
  constructor(public dateService: DateService) { 
    // this.dateService = dateService // => pas besoin en mettant public dans le constructeur
  }

  ngOnInit(): void {

  }

  showUserFormGroupData(){
    this.name = this.userFormGroup.value.name;
    this.mail = this.userFormGroup.value.mail;
    this.showUserFormGroup = true;
  }

  addSomeone(formValues: any){
    this.peopleList.push(
      {name: formValues.name, like: formValues.like}
    );
  }

}
