import {Component} from 'angular2/angular2';

@Component({
	selector: 'home',
	template: `<h1>Hi from home @ {{time}}</h1>`,
	styles: [`h1 { 
					color: grey;
					font-size: 19px;
					font-family: Verdana;
				 }`]
})
export class HomeComponent {
	public time: string;
		
	constructor() {
		setInterval(() => this.time = new Date().toLocaleTimeString(), 1000);
	}
}
