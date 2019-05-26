import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { TraceService } from './services/trace.service';
import { ProjectService } from './services/project.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { OrderByPipe } from './pipe/order-by.pipe';
import { KeyValuePipe } from './pipe/key-value.pipe';
import { DataTableComponent } from './data-table/data-table.component';
import { DtHeaderComponent } from './data-table/dt-header/dt-header.component';
import { DtFooterComponent } from './data-table/dt-footer/dt-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectComponent,
    OrderByPipe,
    KeyValuePipe,
    DataTableComponent,
    DtHeaderComponent,
    DtFooterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ HeroService, TraceService, ProjectService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
