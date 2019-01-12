import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutFlexDetails, ForgeLayoutFlexConfig } from '../layout-flex.core';

@Component({
	selector: 'forge-layout-flex-render',
	templateUrl: './layout-flex-render.component.html',
	styleUrls: ['./layout-flex-render.component.scss']
})
export class ForgeLayoutFlexRenderComponent
	extends ForgeGenericControl<ForgeLayoutFlexDetails, ForgeLayoutFlexConfig>
	implements IControlRender<ForgeLayoutFlexDetails, ForgeLayoutFlexConfig> {
		//  Fields

		//  Properties

		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
		}

		//	Life Cycle

		//	API Methods
		public SafeNum(value: number) {
			if (value >= 0)
				return value;
			else
				return undefined;
		}

		public SafeStr(value: string) {
			if (value)
				return value;
			else
				return undefined;
		}

		//	Helpers
}
