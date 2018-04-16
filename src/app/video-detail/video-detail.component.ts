import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})

@NgModule({
  imports: [ BrowserModule, FormsModule],       // module dependencies
  declarations: [ AppComponent],   // components and directives
  bootstrap: [ AppComponent ],     // root component
  providers: []                    // services
})
export class VideoDetailComponent implements OnInit {

  private editTitle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick() {
    this.editTitle = true;
  }

}
