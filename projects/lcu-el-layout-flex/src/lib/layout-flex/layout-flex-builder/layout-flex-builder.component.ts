import { Component, Injector } from '@angular/core';
import { isResultSuccess } from '@lcu/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutFlexDetails, ForgeLayoutFlexConfig } from '../layout-flex.core';
import { FlexLayoutDialog } from '../dialogs/flex-layout/flex-layout.dialog';
import { FlexConfigDialog } from '../dialogs/flex-config/flex-config.dialog';

@Component({
	selector: 'forge-layout-flex-builder',
	templateUrl: './layout-flex-builder.component.html',
	styleUrls: ['./layout-flex-builder.component.scss']
})
export class ForgeLayoutFlexBuilderComponent
	extends ForgeGenericControl<ForgeLayoutFlexDetails, ForgeLayoutFlexConfig>
	implements IControlBuilder<ForgeLayoutFlexDetails, ForgeLayoutFlexConfig> {
		//  Fields
	
		//  Properties
	
		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
	
		//	API Methods
		public BuildTemplateContext(config: ForgeLayoutFlexConfig, i: number) {
			return {
				config: config,
				i: i
			};
		}
	
		public OpenConfig(config: ForgeLayoutFlexConfig) {
			var dialogRef = this.pgUiSvc.Dialog.Open(FlexConfigDialog, config, (result) => {
				if (isResultSuccess(result))
					config = Object.assign(config, result.Model);
			}, "90%");
		}
	
		public OpenDetails() {
			var dialogRef = this.pgUiSvc.Dialog.Open(FlexLayoutDialog, this.Details, (result) => {
				if (isResultSuccess(result))
					this.Element.Control.Details = Object.assign(this.Details, result.Model);
			}, "90%");
		}
	
		public SafeNum(value: number) {
			if (value >= 0)
				return value;
			else
				null;
		}
	
		public SafeStr(value: string) {
			if (value)
				return value;
			else
				null;
		}
	
		//	Helpers
}
