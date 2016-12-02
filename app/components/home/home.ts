import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Course, CourseService} from '../../services/course-service';


@Component({
  selector: 'course-library-home-page',
  styleUrls: ['app/components/home/home.css'],
  template: `
    
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          INPUT HERE
        </div>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let course of courses" class="col-sm-4 col-lg-4 col-md-4">
        - {{ course.title }}
      </div>
    </div>
  `
})
export default class HomeComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

}