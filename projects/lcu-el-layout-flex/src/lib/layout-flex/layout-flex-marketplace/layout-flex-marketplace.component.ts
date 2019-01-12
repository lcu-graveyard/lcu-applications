import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutFlexDetails, ForgeLayoutFlexConfig } from '../layout-flex.core';

@Component({
	selector: 'forge-layout-flex-marketplace',
	templateUrl: './layout-flex-marketplace.component.html',
	styleUrls: ['./layout-flex-marketplace.component.scss']
})
export class ForgeLayoutFlexMarketplaceComponent
	extends ForgeGenericControl<ForgeLayoutFlexDetails, ForgeLayoutFlexConfig>
	implements IControlMarketplace<ForgeLayoutFlexDetails, ForgeLayoutFlexConfig> {
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
