import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutStackedDetails, ForgeLayoutStackedConfig } from '../layout-stacked.core';

@Component({
	selector: 'forge-layout-stacked-render',
	templateUrl: './layout-stacked-render.component.html',
	styleUrls: ['./layout-stacked-render.component.scss']
})
export class ForgeLayoutStackedRenderComponent
	extends ForgeGenericControl<ForgeLayoutStackedDetails, ForgeLayoutStackedConfig>
	implements IControlRender<ForgeLayoutStackedDetails, ForgeLayoutStackedConfig> {
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
