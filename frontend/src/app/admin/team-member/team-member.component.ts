import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  teamForm: FormGroup;
  constructor(private service: AdminService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.teamForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      specialty: ['', Validators.required],
      description: ['', Validators.required],
      image: null,
    });
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.teamForm.patchValue({
      image: file
    });
    this.teamForm.get('image').updateValueAndValidity();
  }
  submitForm() {
    const formData: any = new FormData();
    formData.append('firstname', this.teamForm.get('firstname').value);
    formData.append('lastname', this.teamForm.get('lastname').value);
    formData.append('specialty', this.teamForm.get('specialty').value);
    formData.append('description', this.teamForm.get('description').value);
    formData.append('file', this.teamForm.get('image').value);
    this.service.createTeamMember(formData).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
