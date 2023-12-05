import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServersComponent,
    ServerComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
