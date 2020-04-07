import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlashService } from './flash.service';
import { FlashComponent } from './flash/flash.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FlashComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FlashService]
})
export class AppModule { }
