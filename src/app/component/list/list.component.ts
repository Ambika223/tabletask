import { Component } from "@angular/core";
import { colors, colorsText, fruits, fruitsText, products, productsText } from "src/app/const/listdata";
import { Colors, Product } from "src/app/modules/list";

@Component({
    selector: "app-list",
    templateUrl: './list.component.html',
    styleUrls: ['/list.component.scss']
})
export class listComponent {
    productsText = productsText;
    products = products;

    fruitsText = fruitsText;
    fruits = fruits;

    colorsText = colorsText;
    colors = colors;

    // flag = true

}