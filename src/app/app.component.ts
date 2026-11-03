import { Component } from '@angular/core';
import { IaccountArr, IbookArr, IcityArr, IcourseArr, IcustomerArr, IdoctorArr, IempArr, IflightArr, IgymArr, IhotelArr, ImemberArr, ImobileArr, ImovieArr, IorderArr, IproductArr, IprojectArr, IrestaurantArr, IstudentArr, IteacherArr, IvehicleArr } from './modules/table';
import { accountArr, bookArr, cityArr, courseArr, customerArr, doctorArr, empArr, flightArr, gymArr, hotelArr, memberArr, mobileArr, movieArr, orderArr, productArr, projectArr, restaurantArr, studentArr, teacherArr, vehicleArr } from './const/tabledata';

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
  projectArr: Array<IprojectArr> = projectArr;
  cityArr: Array<IcityArr> = cityArr;
  mobileArr: Array<ImobileArr> = mobileArr;
  memberArr: Array<ImemberArr> = memberArr;
  gymArr: IgymArr[] = gymArr;
}
