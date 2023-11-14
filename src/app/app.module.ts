import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormSumaComponent } from './componentes-bs/form-suma/form-suma.component';
import { FormListaAlumnosComponent } from './componentes-bs/form-lista-alumnos/form-lista-alumnos.component';
import { FormCalculoImcComponent } from './componentes-bs/form-calculo-imc/form-calculo-imc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormSumaComponent,
    FormListaAlumnosComponent,
    FormCalculoImcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
