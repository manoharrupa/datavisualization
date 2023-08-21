import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registrationForm: FormGroup;
  
  loading=false;
  today=new Date();
  countryCodes = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+91', name: 'India' },
    // Add more country codes 
  ];
  /**
   *
   */
  constructor(private fb:FormBuilder,private toastr: ToastrService){
    this.registrationForm=this.fb.group({
    firstName:['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    email:    ['', [Validators.required, Validators.email]],
    gender:   ['', [Validators.required,this.validateGender]],
    dob:      ['', Validators.required],
    aadharNumber: ['',[Validators.required, Validators.pattern(/^\d{12}$/)]],
    countryCode: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    password: ['', [Validators.required, Validators.minLength(8),this.passwordValidator()]],
    confirmPassword: ['', Validators.required],
    
  },{
    validator: this.passwordMatchValidator ,// Custom validator function
  })

  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   console.log(this.registrationForm);
   
  }
  
  get d(){
    return this.registrationForm.controls;
  }

  maxDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  passwordValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const errors= {};
      console.log(errors);

      if (!/[A-Z]/.test(value)) {
        Object.assign(errors, { uppercase: true });
        console.log(errors);
      }

      if (!/[a-z]/.test(value)) {
        Object.assign(errors, { lowercase: true });
        console.log(errors);
      }

      if (!/\d/.test(value)) {
        Object.assign(errors,  { digit: true });
        console.log(errors);
      }
      
      if (!/[^a-zA-Z0-9]/.test(value)) {
        Object.assign(errors,  { specialcase: true });
      }
          

      return errors;
    };
  }
  onSubmit() {
    console.log(this.registrationForm.controls);
    
    if (this.registrationForm.valid) {
      this.toastr.success("Registration is Successfull");
    } else {
      this.toastr.warning("Registration Form is invalid");
    }
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    console.log(password);
    console.log(confirmPassword);
    console.log(password === confirmPassword ? null : { mismatch: true });
    if(password!==confirmPassword){
      group.get('confirmPassword')?.setErrors({ mismatch: true });
      return {mismatch : true}
    }
    else{
      group.get('confirmPassword')?.setErrors(null);

       return null; 
    }
      }
      validateGender(control: FormControl) {
        if (control.value === "") {
          control.setErrors({required: true})
          return { required: true };
        }
        else{
          control.setErrors(null);
          return null;
        }
        
      }
      Oncancel(){
        this.registrationForm.reset();
      }


}
