import {NgModule} from '@angular/core';
import {MatButtonModule, MatDividerModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatButtonModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatButtonModule,
    ],
})
export class MaterialModule {
}
