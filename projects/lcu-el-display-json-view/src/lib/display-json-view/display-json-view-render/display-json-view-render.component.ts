import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig } from '../display-json-view.core';

@Component({
	selector: 'forge-display-json-view-render',
	templateUrl: './display-json-view-render.component.html',
	styleUrls: ['./display-json-view-render.component.scss']
})
export class ForgeDisplayJsonViewRenderComponent
	extends ForgeGenericControl<ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig>
	implements IControlRender<ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
