import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatBottomSheetModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatRippleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './Component/search/search.component';
import { HomeComponent } from './Component/home/home.component';
import { SlideshowComponent } from './Component/slideshow/slideshow.component';
import { SlideComponent } from './Component/slide/slide.component';
import { CategoryComponent } from './Component/Categories/category/category.component';
import { HorizontalScrollComponent } from './Shared/horizontal-scroll/horizontal-scroll.component';
import { HorizontalListComponent } from './Component/horizontal-list/horizontal-list.component';
import { CatItemComponent } from './Component/cat-item/cat-item.component';
import { GridDealsComponent } from './Component/grid-deals/grid-deals.component';
import { GridDealsItemComponent } from './Component/grid-deals-item/grid-deals-item.component';
import { SingleBannerComponent } from './Component/single-banner/single-banner.component';

import { LoginComponent } from './Component/Login/login/login.component';
import { LoginBottomSheetComponent } from './Component/Login/login-bottom-sheet/login-bottom-sheet.component';
import { JoinSocialComponent } from './Component/join-social/join-social.component';
import { HorizontalDealsComponent } from './Component/horizontal-deals/horizontal-deals.component';
import { HorizontalDealItemsComponent } from './Component/horizontal-deals/horizontal-deal-items/horizontal-deal-items.component';
import { ViewAllComponent } from './Component/view-all/view-all.component';
import { ViewAllItemComponent } from './Component/view-all/view-all-item/view-all-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SlideshowComponent,
    SlideComponent,
    CategoryComponent,
    HorizontalScrollComponent,
    HorizontalListComponent,
    CatItemComponent,
    GridDealsComponent,
    GridDealsItemComponent,
    SingleBannerComponent,
    LoginComponent,
    LoginBottomSheetComponent,
    JoinSocialComponent,
    HorizontalDealsComponent,
    HorizontalDealItemsComponent,
    ViewAllComponent,
    ViewAllItemComponent
  ],
  imports: [
    OverlayModule,
    NgbModule.forRoot(),
    MatBottomSheetModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    ScrollingModule
  ],
  entryComponents: [LoginBottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
