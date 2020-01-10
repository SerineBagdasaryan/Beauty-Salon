import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
private team: any = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.teamData();
  }
  teamData() {
    this.service.teamData().subscribe((data: any) => {
      this.team = data;
      console.log(this.team);
    });
  }
}
