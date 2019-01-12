import { Component, Injector } from '@angular/core';
import { IControlRender, PageElement } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayPointerDetails, ForgeDisplayPointerConfig } from '../display-pointer.core';

@Component({
	selector: 'forge-display-pointer-render',
	templateUrl: './display-pointer-render.component.html',
	styleUrls: ['./display-pointer-render.component.scss']
})
export class ForgeDisplayPointerRenderComponent
	extends ForgeGenericControl<ForgeDisplayPointerDetails, ForgeDisplayPointerConfig>
	implements IControlRender<ForgeDisplayPointerDetails, ForgeDisplayPointerConfig> {
		//  Fields
	
		//  Properties
		public get ActivePointer(): PageElement {
			return this.pgSvc.PointersConfig && this.pgSvc.PointersConfig.Pointers ? this.pgSvc.PointersConfig.Pointers[this.Element.Pointer] : null;
		}
	
		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
	
		//	API Methods
	
		//	Helpers
}
