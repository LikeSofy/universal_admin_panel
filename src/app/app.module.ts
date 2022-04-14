import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './shared/components/base/base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LoginComponent } from './pages/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./shared/interceptors/auth.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {
  TextAreaInputQuestionComponent
} from "./shared/components/dynamic-question/questions/text-area-input-question/text-area-input-question.component";
import {
  SelectQuestionComponent
} from "./shared/components/dynamic-question/questions/select-question/select-question.component";
import {
  PasswordInputQuestionComponent
} from "./shared/components/dynamic-question/questions/password-input-question/password-input-question.component";
import {
  MultipleSelectQuestionComponent
} from "./shared/components/dynamic-question/questions/multiple-select-question/multiple-select-question.component";
import {
  InputQuestionComponent
} from "./shared/components/dynamic-question/questions/input-question/input-question.component";
import {
  FileInputQuestionComponent
} from "./shared/components/dynamic-question/questions/file-input-question/file-input-question.component";
import {DynamicQuestionComponent} from "./shared/components/dynamic-question/dynamic-question.component";
import {DynamicFormComponent} from "./shared/components/dynamic-form/dynamic-form.component";
import {ListComponent} from "./pages/list/list.component";
import {DynamicTableCardComponent} from "./shared/components/dynamic-table-card/dynamic-table-card.component";
import {DynamicTableComponent} from "./shared/components/dynamic-table/dynamic-table.component";
import {SearchComponent} from "./shared/components/search/search.component";
import {PopupConfirmComponent} from "./shared/components/popup-confirm/popup-confirm.component";
import {EditComponent} from "./pages/edit/edit.component";
import { SubQuestionComponent } from './shared/components/dynamic-question/questions/sub-question/sub-question.component';
import {DynamicFormCardComponent} from "./shared/components/dynamic-form-card/dynamic-form-card.component";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    TextAreaInputQuestionComponent,
    SelectQuestionComponent,
    PasswordInputQuestionComponent,
    MultipleSelectQuestionComponent,
    InputQuestionComponent,
    FileInputQuestionComponent,
    DynamicQuestionComponent,
    DynamicFormComponent,
    ListComponent,
    DynamicTableCardComponent,
    DynamicTableComponent,
    SearchComponent,
    PopupConfirmComponent,
    EditComponent,
    SubQuestionComponent,
    DynamicFormCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    AngularEditorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
