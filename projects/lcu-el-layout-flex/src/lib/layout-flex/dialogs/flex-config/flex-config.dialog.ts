import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForgeLayoutFlexConfig } from '../../layout-flex.core';
import { BaseModeledResponse } from '@lcu/core';
import { Status } from '@lcu/common';


@Component({
	selector: 'flex-config-dialog',
	templateUrl: './flex-config.dialog.html',
	styleUrls: ['./flex-config.dialog.scss']
})
export class FlexConfigDialog implements OnInit {
	//	Properties
	public Config: ForgeLayoutFlexConfig;

	//	Constructors
	constructor(protected dialogRef: MatDialogRef<FlexConfigDialog>, @Inject(MAT_DIALOG_DATA) config: ForgeLayoutFlexConfig) {
		this.Config = Object.assign({}, config);

		if (!this.Config.Align || !this.Config.Align.LT || !this.Config.Align.GT || typeof(this.Config.Align) === 'string')
			this.Config.Align = Object.assign({
				LT: {},
				GT: {}
			}, this.Config.Align || <any>{});

        if (!this.Config.Offset || !this.Config.Offset.LT || !this.Config.Offset.GT || typeof(this.Config.Offset) === 'string')
			this.Config.Offset = Object.assign({
					LT: {},
					GT: {}
			}, this.Config.Offset || <any>{});

        if (!this.Config.Order || !this.Config.Order.LT || !this.Config.Order.GT || typeof(this.Config.Order) === 'string')
			this.Config.Order = Object.assign({
					LT: {},
					GT: {}
			}, this.Config.Order || <any>{});

        if (!this.Config.Size || !this.Config.Size.LT || !this.Config.Size.GT || typeof(this.Config.Size) === 'string')
			this.Config.Size = Object.assign({
					LT: {},
					GT: {}
			}, this.Config.Size || <any>{});
	}

	//	Life Cycle
	public ngOnInit() {
	}

	//	API Methods
	public Save() {
		this.dialogRef.close(<BaseModeledResponse<ForgeLayoutFlexConfig>>{
			Model: this.Config,
			Status: <Status>{
				Code: 0,
				Message: 'Success'
			}
		});
	}
}