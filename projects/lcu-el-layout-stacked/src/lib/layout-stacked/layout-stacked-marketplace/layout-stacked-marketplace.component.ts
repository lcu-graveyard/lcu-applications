import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutStackedDetails, ForgeLayoutStackedConfig } from '../layout-stacked.core';

@Component({
	selector: 'forge-layout-stacked-marketplace',
	templateUrl: './layout-stacked-marketplace.component.html',
	styleUrls: ['./layout-stacked-marketplace.component.scss']
})
export class ForgeLayoutStackedMarketplaceComponent
	extends ForgeGenericControl<ForgeLayoutStackedDetails, ForgeLayoutStackedConfig>
	implements IControlMarketplace<ForgeLayoutStackedDetails, ForgeLayoutStackedConfig> {
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
