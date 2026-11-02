import { Component } from '@angular/core';
import { IaccountArr, IbookArr, IcourseArr, IcustomerArr, IdoctorArr, IempArr, IflightArr, IhotelArr, ImovieArr, IorderArr, IproductArr, IrestaurantArr, IstudentArr, IteacherArr, IvehicleArr } from './modules/table';
import { accountArr, bookArr, courseArr, customerArr, doctorArr, empArr, flightArr, hotelArr, movieArr, orderArr, productArr, restaurantArr, studentArr, teacherArr, vehicleArr } from './const/tabledata';

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
  hotelArr: Array<IhotelArr> = hotelArr;
  doctorArr: Array<IdoctorArr> = doctorArr;
  restaurantArr: Array<IrestaurantArr> = restaurantArr;
  accountArr: Array<IaccountArr> = accountArr;
  flightArr: Array<IflightArr> = flightArr;
}
