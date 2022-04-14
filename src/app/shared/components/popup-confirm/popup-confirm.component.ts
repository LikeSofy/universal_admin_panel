import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PopupDialogInterface} from "../../interfaces/popup-dialog.interface";

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss']
})
export class PopupConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PopupDialogInterface) { }

  ngOnInit(): void {
  }

}
