import { Component } from '@angular/core';
//import { UsuariosService } from './usuarios.service';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent {
	
	//people:any = [];
	//
	//constructor(private userService : UsuariosService){
	//	this.people = userService.getUsers();
	//}
	
	//constructor(){}
	//
	//miFormulario = new FormGroup({
	//	userName: new FormControl('', [Validators.required]),
	//	userPassword: new FormControl('', [Validators.required])
	//});
	
	
	constructor(private sidenav: SidenavService){		
	}
	
	toggleActive:boolean = false;
	
	toggleSidenav() {
		this.toggleActive = !this.toggleActive;
		this.sidenav.toggle();
	}
	close() {
		this.sidenav.close();
	}
	
	
}
