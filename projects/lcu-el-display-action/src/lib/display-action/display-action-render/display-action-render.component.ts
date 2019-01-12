import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayActionDetails, ForgeDisplayActionConfig } from '../display-action.core';
import { Router } from '@angular/router';
import { scrollTo } from '@lcu/apps';

@Component({
	selector: 'forge-display-action-render',
	templateUrl: './display-action-render.component.html',
	styleUrls: ['./display-action-render.component.scss']
})
export class ForgeDisplayActionRenderComponent
	extends ForgeGenericControl<ForgeDisplayActionDetails, ForgeDisplayActionConfig>
	implements IControlRender<ForgeDisplayActionDetails, ForgeDisplayActionConfig> {
		//  Fields
	
		//  Properties
	
		//  Constructors
		constructor(protected router: Router, protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
	
		//	API Methods
		public GoTo(location: string, rootPath: any[] = ['/']): void {
			this.router.navigate(rootPath).then(
				(value) => {
					scrollTo(location, -this.Details.ScrollOffset);
				});
		}
	
		public Navigate(location: string, external: boolean): void {
			if (!external)
				this.router.navigate([location]);
			else
				window.open(location, '_blank');
		}
	
		//	Helpers
}
