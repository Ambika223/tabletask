import { Component } from '@angular/core';
import { IbookArr, IcourseArr, IcustomerArr, IempArr, ImovieArr, IorderArr, IproductArr, IstudentArr, IteacherArr, IvehicleArr } from './modules/table';
import { bookArr, courseArr, customerArr, empArr, movieArr, orderArr, productArr, studentArr, teacherArr, vehicleArr } from './const/tabledata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tabletask';
  empArr: Array<IempArr> = empArr;
  studentArr: Array<IstudentArr> = studentArr;
  productArr: Array<IproductArr> = productArr;
  courseArr: Array<IcourseArr> = courseArr;
  bookArr: Array<IbookArr> = bookArr;
  customerArr: Array<IcustomerArr> = customerArr;
  orderArr: Array<IorderArr> = orderArr;
  movieArr: Array<ImovieArr> = movieArr;
  teacherArr: Array<IteacherArr> = teacherArr;
  vehicleArr: Array<IvehicleArr> = vehicleArr;
}
