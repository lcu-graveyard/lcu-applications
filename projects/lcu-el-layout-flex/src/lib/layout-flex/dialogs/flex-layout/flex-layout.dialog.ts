import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForgeLayoutFlexDetails } from '../../layout-flex.core';
import { BaseModeledResponse } from '@lcu/core';
import { Status } from '@lcu/common';

//	TODO:  Rename to flex-details
@Component({
	selector: 'flex-layout-dialog',
	templateUrl: './flex-layout.dialog.html',
	styleUrls: ['./flex-layout.dialog.scss']
})
export class FlexLayoutDialog implements OnInit {
	//	Properties
	public Details: ForgeLayoutFlexDetails;

	//	Constructors
	constructor(protected dialogRef: MatDialogRef<FlexLayoutDialog>, @Inject(MAT_DIALOG_DATA) details: ForgeLayoutFlexDetails) {
		this.Details = Object.assign({}, details);
	}

	//	Life Cycle
	public ngOnInit() {
	}

	//	API Methods
	public Save() {
		this.dialogRef.close(<BaseModeledResponse<ForgeLayoutFlexDetails>>{
			Model: this.Details,
			Status: <Status>{
				Code: 0,
				Message: 'Success'
			}
		});
	}
}