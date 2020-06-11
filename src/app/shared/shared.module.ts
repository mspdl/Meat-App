import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { OrderService } from "app/order/order.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                OrderService,
                RestaurantsService,
                ShoppingCartService
            ]
        }
    }
}