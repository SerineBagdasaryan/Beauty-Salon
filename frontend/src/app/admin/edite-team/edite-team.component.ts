import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edite-team',
  templateUrl: './edite-team.component.html',
  styleUrls: ['./edite-team.component.css']
})
export class EditeTeamComponent implements OnInit {
  teamForm: FormGroup;
  private data: any = {};
  constructor(private service: AdminService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
    console.log(this.teamForm.value, 'fd');
  }
  createForm() {
    this.teamForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      specialty: ['', Validators.required],
      description: ['', Validators.required],
      imageName: ['', Validators.required],
      image: [null],
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
    this.route.params.subscribe(params => {
    const formData: any = new FormData();
    formData.append('firstname', this.teamForm.get('firstname').value);
    formData.append('lastname', this.teamForm.get('lastname').value);
    formData.append('specialty', this.teamForm.get('specialty').value);
    formData.append('description', this.teamForm.get('description').value);
    formData.append('imageName', this.teamForm.get('imageName').value);
    formData.append('id', params.id);
    formData.append('image', this.teamForm.get('image').value);
    this.service.updateTeam(formData).subscribe((data: any) => {
      console.log(data);
    });
    });
  }
  ngOnInit() {
       this.route.params.subscribe(params => {
        this.service.editTeam(params.id).subscribe((res: any) => {
          this.data = res[0];
          console.log(res);
      });
        // console.log(this.data);
    });
  }

}
