import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';

  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm() {
    this.name = 'ironman';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    });
  }

}
