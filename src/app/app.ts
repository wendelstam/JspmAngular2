import {bootstrap, Component, provide} from 'angular2/angular2';
import {RouteConfig, Route, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HomeComponent} from './home/home';
import {DemoComponent} from './demo/demo';

@Component({
	selector: 'app-root',
	template: `
			  <h1>Hi @ {{time}}</h1>
			  <div>
			  	<ul>
				  <li> <a [router-link]="['/Home']">Home</a></li>
				  <li> <a [router-link]="['/Demo', {'idParam':'12345'}]">Demo</a></li>
				</ul>
				<div class="container">
			  		<router-outlet></router-outlet> 
				</div>
			  </div>
			  `,
	styles: [`
			  h1 {
					color: grey;
					font-size: 19px;
					font-family: Verdana;
				 }
			  .container {
				  	border: 1px solid gray;
					margin: 10px;
					padding: 10px;
				  }`],
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	new Route({ path: '/', component: HomeComponent, as: 'Home' }),
	new Route({ path: '/demo/:idParam', component: DemoComponent, as: 'Demo' })
])
class AppComponent {
	public time: string;

	constructor() {
		setInterval(() => this.time = new Date().toLocaleTimeString(), 1000);
	}
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);