import {bootstrap, Component} from 'angular2/angular2';

@Component({
	selector: 'app-root',
	template: `<h1>Hi @ {{time}}</h1>`,
	styles: [`h1 { 
					color: grey;
					font-size: 19px;
					font-family: Verdana;
				 }`]
})
class AppComponent {
	public time: string;
	
	constructor() {
		setInterval(() => this.time = new Date().toLocaleTimeString(), 1000);
	}
}

bootstrap(AppComponent);