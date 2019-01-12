import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Status } from '@lcu/common';
import { BaseModeledResponse } from '@lcu/core';

@Component({
	selector: 'create-pointer-dialog',
	templateUrl: './create-pointer.dialog.html',
	styleUrls: ['./create-pointer.dialog.scss']
})
export class ForgeDisplayCreatePointerBuilderDialog implements OnInit {
	//	Fields

	//	Properties
	public Name: string;

	//	Constructors
	constructor(protected dialogRef: MatDialogRef<ForgeDisplayCreatePointerBuilderDialog>, @Inject(MAT_DIALOG_DATA) details: any) {
	}

	//	Life Cycle
	public ngOnInit() {
	}

	//	API Methods
	public Cancel() {
		this.dialogRef.close(<BaseModeledResponse<string>>{
			Model: null,
			Status: <Status>{
				Code: 1,
				Message: 'Cancelled'
			}
		});
	}

	public Save() {
		this.dialogRef.close(<BaseModeledResponse<string>>{
			Model: this.Name,
			Status: <Status>{
				Code: 0,
				Message: 'Success'
			}
		});
	}
}
