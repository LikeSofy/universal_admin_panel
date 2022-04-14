import {Form} from "./form.interface";
import {Controller} from "./controller.interface";

export interface Config{
  loginForm: Form
  controllers: {[key: string]: Controller}
}
