import { Component } from "@angular/core";

@Component({
    selector: 'app-databinding',
    templateUrl: './databinding.component.html'
})
export class DatabindingComponent {
    name: string = "Anvika";
    age: number = 22;
    email: string = 'an@gmail.com';

    course: string = "HTML";
    imageUrl: string = "https://th.bing.com/th/id/OIP._Ph8V2iImjMO09vtZ09PgAHaHk?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
}
