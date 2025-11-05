// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import { MainComponent } from './layout/main/main.component';

// Charts
import { NgChartsModule } from 'ng2-charts';

// ⬇️ เพิ่ม import Interceptors
import { ApiBaseInterceptor } from './interceptors/api-base.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    HttpClientModule,
  ],
  providers: [
    // ⬇️ สำคัญ: ให้ ApiBaseInterceptor มาก่อน เพื่อเติม base URL ก่อน
    { provide: HTTP_INTERCEPTORS, useClass: ApiBaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,  multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
