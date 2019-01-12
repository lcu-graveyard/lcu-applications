import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutStackedDetails, ForgeLayoutStackedConfig } from '../layout-stacked.core';

@Component({
	selector: 'forge-layout-stacked-builder',
	templateUrl: './layout-stacked-builder.component.html',
	styleUrls: ['./layout-stacked-builder.component.scss']
})
export class ForgeLayoutStackedBuilderComponent
	extends ForgeGenericControl<ForgeLayoutStackedDetails, ForgeLayoutStackedConfig>
	implements IControlBuilder<ForgeLayoutStackedDetails, ForgeLayoutStackedConfig> {
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
