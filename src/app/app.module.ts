import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './core/services/api.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from "./core/core.module";
import { TitleService } from "./core/services/title.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule
    ],
    providers: [
        ApiService,
        TitleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
