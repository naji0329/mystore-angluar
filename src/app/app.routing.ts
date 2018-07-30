import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'product', component: ProductDetailComponent,
    },
    {
        path: 'cart', component: CartComponent,
    },
    {
        path: 'examples', component: ExampleComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}
