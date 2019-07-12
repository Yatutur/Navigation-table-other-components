import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsuariosService {
	getUsers(){
		return [{
			"nombre": "Antonio",
			"edad": 33,
			"hobby": 'buscar trabajo'
		},
		{
			"nombre": "Pepe",
			"edad": 50,
			"hobby": 'coser'
		}];
	}
}