import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { CursosComponent } from './cursos/cursos.component';

//import { FormsModule } from '@angular/forms';
//import { UsuariosService } from 'usuarios.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DataTableYatuComponent } from './data-table-yatu/data-table-yatu.component';
import { MaterialNavYatuComponent } from './material-nav-yatu/material-nav-yatu.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    DataTableYatuComponent,
    MaterialNavYatuComponent,
    //CursosComponent
  ],
  imports: [
    BrowserModule,
	//FormsModule
	ReactiveFormsModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	LayoutModule,
	MatToolbarModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule
  ],
  providers: [ /*UsuariosService*/ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
