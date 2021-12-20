import { action, makeObservable, observable } from 'mobx';
import petsData from './petsData';
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
}

const petStore = new PetStore();
export default petStore;
