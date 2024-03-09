import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: "Trunks",
    power: 10
  }];

  emitDeleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }

}
