import { Component, Injector } from '@angular/core';
import { IControlBuilder, PageElement, PointersConfig } from '@lcu/elements';
import { ForgeGenericControl, ComponentSelectorDialog, ComponentSelectorDialogConfig, ComponentSelectorDialogResult } from '@lcu/daf-ui';
import { ForgeDisplayPointerDetails, ForgeDisplayPointerConfig } from '../display-pointer.core';
import { ForgeDisplayCreatePointerBuilderDialog } from '../dialogs/create-pointer/create-pointer.dialog';
import { BaseModeledResponse, isResultSuccess } from '@lcu/core';

@Component({
	selector: 'forge-display-pointer-builder',
	templateUrl: './display-pointer-builder.component.html',
	styleUrls: ['./display-pointer-builder.component.scss']
})
export class ForgeDisplayPointerBuilderComponent
	extends ForgeGenericControl<ForgeDisplayPointerDetails, ForgeDisplayPointerConfig>
	implements IControlBuilder<ForgeDisplayPointerDetails, ForgeDisplayPointerConfig> {
		//  Fields
		protected pointerCheck: string;
	
		//  Properties
		public get ActivePointer(): PageElement {
			return this.pgSvc.PointersConfig && this.pgSvc.PointersConfig.Pointers ? this.pgSvc.PointersConfig.Pointers[this.Element.Pointer] : null;
		}
	
		public Loading: boolean;
	
		public get PointersConfig(): PointersConfig {
			return this.pgSvc.PointersConfig;
		}
	
		public get PointersKeys(): string[] {
			return this.pgSvc.PointersConfig && this.pgSvc.PointersConfig.Pointers ? Object.keys(this.pgSvc.PointersConfig.Pointers) : [];
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
		public CreatePointer() {
			var dialogRef = this.pgUiSvc.Dialog.Open(ForgeDisplayCreatePointerBuilderDialog, {},
				(result: BaseModeledResponse<string>) => {
					if (isResultSuccess(result)) {
						if (!this.pgSvc.PointersConfig.Pointers[result.Model]) {
							this.Element.Pointer = result.Model;
	
							this.ResetElement();
						} else {
							this.pgUiSvc.Notify.Signal(`The pointer already exists with name ${result.Model}.`);
						}
					}
				}, '90%');
		}
	
		public ResetElement() {
			this.pgSvc.PointersConfig.Pointers[this.Element.Pointer] = <PageElement>{};
	
			this.Save();
		}
	
		public Save() {
			this.pgSvc.SavePointersConfig().subscribe(status => {
			});
		}
	
		public SelectElement() {
			var dialogRef = this.pgUiSvc.Dialog.Open(ComponentSelectorDialog, <ComponentSelectorDialogConfig>{
				AllowedTypes: [],
				ExcludeTypes: [],
			}, (result: BaseModeledResponse<ComponentSelectorDialogResult>) => {
				if (isResultSuccess(result)) {
					this.pgSvc.PointersConfig.Pointers[this.Element.Pointer] = <PageElement>{
						Control: Object.assign({}, result.Model.Control),
						Order: 500,
						Title: '',
						BuilderState: result.Model.BuilderState
					};
	
					this.Save();
				}
			}, '90%');
		}
	
		//	Helpers
		protected hasConfiguredPointer() {
			if (this.PointersKeys.length == 0)
				return false;
	
			return this.PointersKeys.some(pk => !!this.pgSvc.PointersConfig.Pointers[pk].Control);
		}
		
		protected updateElement() {
			super.updateElement();
			
			this.Save();
		}
}
