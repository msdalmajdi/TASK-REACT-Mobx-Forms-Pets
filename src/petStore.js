import { action, makeObservable, observable } from "mobx";
import petsData from "./petsData";
class PetStore {
  pets = petsData;

  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };
  addNewPet = (newPet) => {
    newPet["id"] = Math.max(...this.pets.map((pet) => pet["id"])) + 1;
    this.pets.push(newPet);
  };

  updateCurrentPet = (updatedPet) => {
    const indexOfObject = this.pets.findIndex((object) => {
      return object.id === updatedPet["id"];
    });

    this.pets[indexOfObject] = updatedPet;

    //this.pets.splice(indexOfObject, 1);

    //this.pets.push(updatedPet);
  };
}

const petStore = new PetStore();
export default petStore;
