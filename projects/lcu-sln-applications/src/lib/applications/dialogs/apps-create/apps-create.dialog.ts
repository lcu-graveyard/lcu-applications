import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { isResultSuccess, BaseModeledResponse } from '@lcu/core';
import { ApplicationModel, ApplicationLookupModel } from '@lcu/apps';
import { ForgeApplicationsService } from '@lcu/daf-common';
import { AppsCreateDialogConfig } from '../../applications.core';

@Component({
	selector: 'applications-create-dialog',
	templateUrl: './apps-create.dialog.html',
	styleUrls: ['./apps-create.dialog.scss']
})
export class AppsCreateDialog implements OnInit {
	//	Properties
	public Application: ApplicationModel;

	public Error: string;

	public IsAPI: boolean;

	public Loading: boolean;

	//	Constructors
	constructor(protected appsSvc: ForgeApplicationsService, protected dialogRef: MatDialogRef<AppsCreateDialog>,
		@Inject(MAT_DIALOG_DATA) protected config: AppsCreateDialogConfig) {
		this.Application = <ApplicationModel>{
			Lookup: <ApplicationLookupModel>{
				PathRegex: config.Path
			}
		};

		this.IsAPI = config.ViewType == 'API';
	}

	//	Life Cycle
	public ngOnInit() {
	}

	//	API Methods
	public CreateApplication(): void {
		this.Loading = true;

		this.Error = null;

		if (this.IsAPI)
			this.Application.API = <any>{};
		else
			this.Application.View = <any>{};

		if (!this.Application.Hosts)
			this.Application.Hosts = [];

		if (this.Application.Hosts.indexOf(this.config.Host) < 0)
			this.Application.Hosts.push(this.config.Host);

		this.appsSvc.SaveAll([this.Application]).subscribe(
			(result) => {
				if (isResultSuccess(result)) {
					this.dialogRef.close(<BaseModeledResponse<boolean>>{
						Model: true,
						Status: result.Status
					});
				} else {
					this.Error = result.Status.Message;

					this.Loading = false;
				}
			},
			(err) => {
				this.Loading = false;
			},
			() => {
			});
	}
}
