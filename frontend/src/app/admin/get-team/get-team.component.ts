import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-team',
  templateUrl: './get-team.component.html',
  styleUrls: ['./get-team.component.css']
})
export class GetTeamComponent implements OnInit {
  private team: any = [];

  constructor(private service: AdminService) { }

  ngOnInit() {
   this.getTeamOurteam();
  }
  getTeamOurteam() {
    this.service.getTeam().subscribe((data: any) => {
      this.team = data;
      console.log(this.team);
    });
  }
  deleteTeampage(id) {
    this.service.deleteTeampage(id).subscribe((data: any) => {
      console.log(data);
    });
  }
}
