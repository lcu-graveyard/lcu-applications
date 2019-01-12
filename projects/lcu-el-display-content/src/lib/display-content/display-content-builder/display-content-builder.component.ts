import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayContentDetails, ForgeDisplayContentConfig } from '../display-content.core';
import { NgxEditorModel } from 'ngx-monaco-editor';

@Component({
	selector: 'forge-display-content-builder',
	templateUrl: './display-content-builder.component.html',
	styleUrls: ['./display-content-builder.component.scss']
})
export class ForgeDisplayContentBuilderComponent
	extends ForgeGenericControl<ForgeDisplayContentDetails, ForgeDisplayContentConfig>
	implements IControlBuilder<ForgeDisplayContentDetails, ForgeDisplayContentConfig> {
		//  Fields
	
		//  Properties
		public ContentEditorOptions: NgxEditorModel;
	
		public get IsSourceBased(): boolean {
			return ['img', 'iframe'].indexOf(this.Details.Type) >= 0;
		}
	
		//  Constructors
		constructor(protected injector: Injector) {
			super(injector);
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
	
			this.ContentEditorOptions = <NgxEditorModel>{
				//theme: 'vs-dark',
				language: 'html'
			};
		}
	
		//	API Methods
	
		//	Helpers
}
