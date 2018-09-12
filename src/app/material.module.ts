import { NgModule } from "@angular/core";


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';


const MATERIAL = [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule
    
];

@NgModule ({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule { }