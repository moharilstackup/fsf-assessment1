import { NgModule } from "@angular/core";

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';


const MATERIAL = [
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule
    
];

@NgModule ({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule { }