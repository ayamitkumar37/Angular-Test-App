import {Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = '';
  public tenantList: any[] = [];
  selectedName: boolean;
  check = []
  demoChk = [];
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    for (let i = 0; i < 12; i++) {
      this.tenantList.push({
        value: i,
        name: ('tenant' + [i]),
        id: ('id-' + i)

      });
    }
  }
  onSelected(name) {
    console.log('event');
    this.selectedName = (name);
    console.log(this.selectedName);
  }
  toggleSelect(value, event) {
    if (event.target.checked) {
      this.demoChk.push(value);
    }
    else if (!event.target.checked) {
      const indexx = this.demoChk.indexOf(value);
      this.demoChk.splice(indexx, 1);
    }
    console.log(this.demoChk)
  }
}
