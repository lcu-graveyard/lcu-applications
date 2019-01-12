import { Component, Injector, ElementRef } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayContentDetails, ForgeDisplayContentConfig } from '../display-content.core';

@Component({
	selector: 'forge-display-content-render',
	templateUrl: './display-content-render.component.html',
	styleUrls: ['./display-content-render.component.scss']
})
export class ForgeDisplayContentRenderComponent
	extends ForgeGenericControl<ForgeDisplayContentDetails, ForgeDisplayContentConfig>
	implements IControlRender<ForgeDisplayContentDetails, ForgeDisplayContentConfig> {
		//  Fields
	
		//  Properties
		public get IsSourceBased(): boolean {
			return ['img', 'iframe'].indexOf(this.Details.Type) >= 0;
		}
	
		//  Constructors
		constructor(protected elRef: ElementRef, protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
		}
	
		//	API Methods
	
		//	Helpers
		protected controlChanged() {
			if (this.Details.Type) {
				var content = '';
				
				if (!this.IsSourceBased)
					content = `<${this.Details.Type} class="${this.Details.Modifier || ''}">${this.Details.Content || ''}</${this.Details.Type}>`;
				else if (this.Details.Type == 'img')
					content = `<${this.Details.Type} class="${this.Details.Modifier || ''}" src="${this.Details.Content || ''}" />`;
				else if (this.Details.Type == 'iframe')
					content = `<${this.Details.Type} frameborder="0" class="${this.Details.Modifier || ''}" src="${this.Details.Content || ''}"></${this.Details.Type}>`;
	
				this.elRef.nativeElement.innerHTML = content;//this.sanitzer.bypassSecurityTrustHtml();
			}
		} 
}
