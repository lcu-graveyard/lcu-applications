import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig, ForgeLayoutSwitchState } from '../layout-switch-state.core';

@Component({
	selector: 'forge-layout-switch-state-builder',
	templateUrl: './layout-switch-state-builder.component.html',
	styleUrls: ['./layout-switch-state-builder.component.scss']
})
export class ForgeLayoutSwitchStateBuilderComponent
	extends ForgeGenericControl<ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig>
	implements IControlBuilder<ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig> {
		//  Fields
	
		//  Properties
		public get CurrentState(): ForgeLayoutSwitchState {
			return this.CurrentStateKey ? this.Details.States[this.CurrentStateKey] : null;
		}
	
		public CurrentStateKey: string;
	
		public NewState: string;
	
		public get StateKeys(): string[] {
			var states = this.Details.States ? Object.keys(this.Details.States) : [];
	
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
	
		//	API Methods
		public AddState() {
			if (this.NewState) {
				if (!this.Details.States)
					this.Details.States = {};
	
				if (!this.Details.States[this.NewState]) {
					this.Details.States[this.NewState] = {
						Order: 0,
						Text: '',
						//Element: null,
					};
	
					this.NewState = '';
				} else {
					this.pgUiSvc.Notify.Signal('The state already exists, edit existing state or add a new one.');
				}
			}
		}
	
		//	Helpers
		protected controlChanged() {
			super.controlChanged();
	
			var stateKeys = this.StateKeys;
	
			if (!this.CurrentStateKey && stateKeys && stateKeys.length > 0)
				this.CurrentStateKey = stateKeys[0];
		}
	
		protected loadDefaultConfig() {
			return <ForgeLayoutSwitchStateConfig>{
				State: this.CurrentStateKey
			};
		}
}
