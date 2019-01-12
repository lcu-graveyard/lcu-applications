import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig } from '../layout-switch-state.core';

@Component({
	selector: 'forge-layout-switch-state-render',
	templateUrl: './layout-switch-state-render.component.html',
	styleUrls: ['./layout-switch-state-render.component.scss']
})
export class ForgeLayoutSwitchStateRenderComponent
	extends ForgeGenericControl<ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig>
	implements IControlRender<ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig> {
		//  Fields
	
		//  Properties
		public CurrentStateKey: string;
	
		public get StateKeys(): string[] {
			var states = this.Details && this.Details.States ? Object.keys(this.Details.States) : [];
	
			return states.sort((a, b) => {
				var aState = this.Details.States[a].Order;
	
				var bState = this.Details.States[b].Order;
	
				if (aState < bState)
					return -1;
				if (aState > bState)
					return 1;
				else
					return 0;
			});
		}
	
		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
		}
	
		//	API Methods
	
		//	Helpers
		protected controlChanged() {
			super.controlChanged();
	
			var stateKeys = this.StateKeys;
	
			if (!this.CurrentStateKey && stateKeys && stateKeys.length > 0)
				this.CurrentStateKey = stateKeys[0];
		}
}
