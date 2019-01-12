import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayChartsDetails, ForgeDisplayChartsConfig } from '../display-charts.core';

@Component({
	selector: 'forge-display-charts-render',
	templateUrl: './display-charts-render.component.html',
	styleUrls: ['./display-charts-render.component.scss']
})
export class ForgeDisplayChartsRenderComponent
	extends ForgeGenericControl<ForgeDisplayChartsDetails, ForgeDisplayChartsConfig>
	implements IControlRender<ForgeDisplayChartsDetails, ForgeDisplayChartsConfig> {
		//  Fields
	
		//  Properties
	
		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
	
		//	API Methods
		public ValueFormatting() {
			if (this.Details.Info.ValueFormatting)
				eval(this.Details.Info.ValueFormatting);
		}
	
		//	Helpers
}
