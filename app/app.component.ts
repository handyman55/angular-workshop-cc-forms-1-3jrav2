import { Component } from '@angular/core';

export interface User {
  first?: string;
  last?: string;
}

@Component({
  selector: 'my-app',
  template: `
      <form #f="ngForm" (ngSubmit)="onSubmit(f)" class="container">
        <input  
          [ngModel]="user.username"
          name="username"
          required
          minlength="3"
          placeholder="Your username (required)"
          class="form-control is-invalid"
          #userNameInput="ngModel">

        <div class="alert alert-danger">
          Display a different message for both, required and minlength error
        </div>

        <button type="submit"
          class="btn btn-primary">SEND</button>
             
        <hr />
        <pre>Username: {{ userNameInput.value }}</pre>
        <pre>Errors: {{userNameInput.errors | json}}</pre>
      </form>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user: User = <User>{}

  onSubmit(form: any): void {
    console.log('Form:', form.value);
  }
}


/*
EXERCISES:
 
1. Display the alert only when input is not valid otherwise don't show it
TIP: use ngIf in binding with `firstName.errors`

----
2. Disable Button when form is invalid
TIP: [disabled]="f.invalid"

----
3. Apply the is-invalid class when input is not valid

TIP: <input [ngClass]="{'className': EXPRESSION}" />

----  
4. Do not display errors when app starts.
Errors should be shown only when user interacts with the form

TIP: Use `f.dirty` or `f.touched` properties

----
5. Display a different message if error is 'required' or 'minlength'
TIP: <div *ngIf="userNameInput.errors?.required"> ....</div>

----
6. Display the number of missing chars when error is minlength. I.e.

"Missing 4 chars", "Missing 3 chars", ...

----  
7. When start, the input should automatically display the username 'guest'
 
TIP 1:  user: User = <User>{ username: 'guest'}
TIP 2: or in the constructor: 
 
this.user.username = 'guest'`

*/