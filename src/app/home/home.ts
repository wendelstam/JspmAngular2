import {Component} from 'angular2/angular2';
import {TABS_DIRECTIVES} from "./../tab/tabs"

@Component({
	selector: 'home',
	template: `
				<h1>Hi from home container @ {{time}}</h1>
				<tabs>
					<tab tab-title="Foo">
						Content of tab Foo
					</tab>
					<tab tab-title="Bar">
						Content of tab Bar
					</tab>
				</tabs>
				`,
	directives: [TABS_DIRECTIVES],
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