import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'task tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor( private uiService:UiService) { 
    this.uiService.onToggle().subscribe( val => this.showAddTask = val)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask()
  }
}
