import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'material-nav-yatu',
  templateUrl: './material-nav-yatu.component.html',
  styleUrls: ['./material-nav-yatu.component.css']
})
export class MaterialNavYatuComponent {
	
	customHandSet:string = "(max-width: 799.99px) and (orientation: portrait), (max-width: 1379.99px) and (orientation: landscape)";

	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(this.customHandSet)
		.pipe(map(result => result.matches));
	
	constructor(private breakpointObserver: BreakpointObserver){		
	}
	

}