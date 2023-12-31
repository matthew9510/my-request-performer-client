import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventdetailsComponent } from "./components/event-detail/event-detail.component";
import { ManageEventsComponent } from "./components/manage-events/manage-events.component";
import { RequestsComponent } from "./components/requests/requests.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PayoutComponent } from "./components/dashboard/payout/payout.component";
import { HistoryComponent } from "./components/dashboard/history/history.component";
import { ProfileComponent } from "./components/dashboard/profile/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { RequestDetailComponent } from "./components/request-detail/request-detail.component";
import { TranslocoRootModule } from "./transloco-root.module";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { BottomNavComponent } from "./components/bottom-nav/bottom-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import * as moment from "moment";
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatListModule,
  MatDialogModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatInputModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatMenuModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
} from "@angular/material";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CreateEventComponent } from "./components/create-event/create-event.component";
import { EventOverviewComponent } from "./components/event-overview/event-overview.component";
import { HeaderComponent } from "./components/header/header.component";
import { AddVenueComponent } from "./components/add-venue/add-venue.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { AuthService } from "./services/auth.service";
import { CurrencyPipe } from "@angular/common";
import { RequestsService } from "./services/requests.service";
import { EventService } from "./services/event.service";
import { PayoutService } from "./services/payout.service";
import { VenueService } from "./services/venue.service";
import { OrderModule } from "ngx-order-pipe";

// Configuring the Amplify provider with specified Amplify JS modules
// https://aws-amplify.github.io/docs/js/angular#option-2-configuring-the-amplify-provider-with-specified-amplify-js-modules
import {
  AmplifyAngularModule,
  AmplifyService,
  AmplifyModules,
} from "aws-amplify-angular";
import Auth from "@aws-amplify/auth";
import { AuthGuard } from "./guards/auth.guard";
import { NotAuthGuard } from "./guards/not-auth.guard";
import { RegisterGuard } from "./guards/register.guard";
import { DebounceClickDirective } from "./directives/debounce-click.directive";
import { AdminComponent } from "./components/admin/admin.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { RedirectComponent } from "./components/redirect/redirect.component";
import { CopyrightComponent } from "./components/copyright/copyright.component";
import { FilterOriginalRequestsPipe } from "./pipes/filter-original-requests.pipe";
import { GenericErrorModalComponent } from "./components/generic-error-modal/generic-error-modal.component";
import { EndUserLicenseAgreementComponent } from "./components/end-user-license-agreement/end-user-license-agreement.component";
import { CustomScrollDirective } from './directives/custom-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    DashboardComponent,
    PayoutComponent,
    HistoryComponent,
    ProfileComponent,
    EventdetailsComponent,
    ManageEventsComponent,
    RequestsComponent,
    RequestDetailComponent,
    ConfirmDialogComponent,
    BottomNavComponent,
    HeaderComponent,
    AddVenueComponent,
    FilterPipe,
    LoginComponent,
    EventOverviewComponent,
    ErrorPageComponent,
    DebounceClickDirective,
    AdminComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    RedirectComponent,
    CopyrightComponent,
    FilterOriginalRequestsPipe,

    GenericErrorModalComponent,

    EndUserLicenseAgreementComponent,

    CustomScrollDirective,
  ],
  entryComponents: [
    ConfirmDialogComponent,
    GenericErrorModalComponent,
    EndUserLicenseAgreementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    TranslocoRootModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    LayoutModule,
    ScrollingModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    AmplifyAngularModule,
    MatStepperModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatMenuModule,
    OrderModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  providers: [
    FilterPipe,
    {
      provide: AmplifyService,
      useFactory: () => {
        return AmplifyModules({
          Auth,
        });
      },
    },
    CurrencyPipe,
    RequestsService,
    EventService,
    PayoutService,
    AuthService,
    AuthGuard,
    NotAuthGuard,
    VenueService,
    RegisterGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
