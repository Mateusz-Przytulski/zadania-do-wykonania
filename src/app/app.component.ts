import { Component, VERSION } from "@angular/core";
import { Zadanie } from "./zadanie";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nazwaZadania = "";
  dataWykonania = "";
  skonczony = false;
  zamienPrzycisk = false;

  config: { [key: string]: string } = null;
  constructor() {
    this.config = {
      title: "Lista Zadań",
      footer: "© Lista zadań do wykonania",
      nameTask: "Dodaj zadanie oraz datę wykonania"
    };
    this.sortowanieZadan();
  }

  zadania: Zadanie[] = [
    { nazwa_zadania: "Siłownia", doKiedy: "2020-05-01", skonczone: false },
    { nazwa_zadania: "Odkurzanie", doKiedy: "2020-05-04", skonczone: false },
    { nazwa_zadania: "Dentysta", doKiedy: "2020-06-04", skonczone: false },
    { nazwa_zadania: "Zakupy", doKiedy: "2020-06-04", skonczone: true }
  ];

  wyczyscListeZadan() {
    this.zadania = [];
  }

  utworzZadanie() {
    const zadania: Zadanie = {
      nazwa_zadania: this.nazwaZadania,
      doKiedy: this.dataWykonania,
      skonczone: false
    };
    this.zadania.push(zadania);
    this.nazwaZadania = "";
    this.dataWykonania = "";
    this.sortowanieZadan();
  }

  zamienaPrzycisku() {
    this.zamienPrzycisk = !this.zamienPrzycisk;
  }

  ukonczoneZadanie(zadanie: Zadanie) {
    zadanie.skonczone = true;
    this.sortowanieZadan();
  }

  skasujZadanie(zadanie: Zadanie) {
    this.zadania = this.zadania.filter(e => e !== zadanie);
  }

  private sortowanieZadan() {
    this.zadania = this.zadania.sort((a: Zadanie, b: Zadanie) =>
      a.nazwa_zadania === b.nazwa_zadania ? 0 : a.skonczone ? 1 : -1
    );
  }
}
