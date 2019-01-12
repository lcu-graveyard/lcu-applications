import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig } from '../display-json-view.core';

@Component({
	selector: 'forge-display-json-view-builder',
	templateUrl: './display-json-view-builder.component.html',
	styleUrls: ['./display-json-view-builder.component.scss']
})
export class ForgeDisplayJsonViewBuilderComponent
	extends ForgeGenericControl<ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig>
	implements IControlBuilder<ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig> {
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
