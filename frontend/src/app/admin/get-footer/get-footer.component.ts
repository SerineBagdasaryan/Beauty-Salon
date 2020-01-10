import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-footer',
  templateUrl: './get-footer.component.html',
  styleUrls: ['./get-footer.component.css']
})
export class GetFooterComponent implements OnInit {
  private footerData: any = {};
  constructor(private  service: AdminService) { }

  ngOnInit() {
    this.getFooter();
  }
getFooter() {
    this.service.getfooterData().subscribe((data: any) => {
      this.footerData = data[0];
    });
}
  deleteFooter(id) {
    this.service.deleteFooter(id).subscribe((data: any) => {
       console.log(data);
    });
  }
}
