import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadPowerComponent } from './dad-power/dad-power.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    DadPowerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent,
    DadPowerComponent
  ]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
  }
  
  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('steven-root', appElement);
    
    const dadPower = createCustomElement(DadPowerComponent, { injector: this.injector });
    customElements.define('steven-dad-power', dadPower);
  }
}
