import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayContentDetails, ForgeDisplayContentConfig } from '../display-content.core';

@Component({
	selector: 'forge-display-content-marketplace',
	templateUrl: './display-content-marketplace.component.html',
	styleUrls: ['./display-content-marketplace.component.scss']
})
export class ForgeDisplayContentMarketplaceComponent
	extends ForgeGenericControl<ForgeDisplayContentDetails, ForgeDisplayContentConfig>
	implements IControlMarketplace<ForgeDisplayContentDetails, ForgeDisplayContentConfig> {
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
