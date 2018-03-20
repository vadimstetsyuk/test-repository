import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'switch-data',
    templateUrl: './switch-data.component.html'
})
export class SwitchDataComponent {
    @Output() onChangeOption: EventEmitter<string>;

    constructor() {
        this.onChangeOption = new EventEmitter();
    }

    changeData(item: string) {
        this.onChangeOption.emit(item);        
    }
}