### Mobx

1. `npm install mobx mobx-react`
2. Create a file called `petStore` in `src`
3. Define the `pets` class and inside create an empty array `pets= []`.

```javascript
class PetStore {
  pets = [],
}
```

4. Import our data file in the store and set the inital value of the pets array to out pets data.

```javascript
import petsData from './petsData';
class PetStore {
  pets = petsData;
}
```

5. `import { makeObservable, observable, action } from "mobx";`.

```javascript
import { makeObservable, observable, action } from 'mobx';
```

6. make a constructor that will make this a store and mark pets as an observable.

```javascript
class PetStore {
  pets = petsData;

  constructor() {
    makeObservable(this, {
      pets: observable,
    });
  }
}
```

7. create a store and export it

```javascript
const petStore = new PetStore();
export default petStore;
```

### Using the store.

1. Instead of getting our pets list from our `petsData` file, we will now get it from our store. In `PetsList.js` import `petStore` and replace the data coming from props with our store.

```javascript
import petStore from '../petStore';
function PetsList() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const pets = petStore.pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLowerCase()) &&
        pet.type.includes(type)
    )
    .map((pet) => <PetItem key={pet.id} pet={pet} />);
    ...
```

### Adopting a pet.

1. We will move our adopt function to the store so we can access it anywere in our app. Move the function to the store.

```javascript
const handleAdopt = (petId) =>
  setPetsData(petsData.filter((pet) => pet.id !== petId));
```

```javascript
handleAdopt = (petId) => {
  this.pets = this.pets.filter((pet) => pet.id !== petId);
};
```

2. Mark this functions as an action in the constructor.

```javascript
  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }
```

3. In `PetItem.js` import our store and replace the fuction thats coming from props to our function that we did in the store.

```javascript
<button
  type="button"
  class="btn btn-info"
  onClick={() => petStore.handleAdopt(pet.id)}
>
  Adopt
</button>
```

### Not observing the change?

1. There's a component that needs to be marked as an observer, can you know which one it is and mark it as an observer?
   It's `PetList.js`

```javascript
import { observer } from 'mobx-react';
```

```javascript
export default observer(PetsList);
```
