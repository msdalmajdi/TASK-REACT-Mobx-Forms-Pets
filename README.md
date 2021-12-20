### Bootstrap Modal

1. `npm install react-bootstrap bootstrap@5.1.3`
2. Create a file called `CreateModal.js` in `Components`
3. Setup your component and import `Modal` from bootstrap.
4. Create a state for showing the modal with an intial value of `false`.
5. Create a `handleClose` and `handleShow` functions that changes our state to `false` or `true`.
6. Create a button that when pressed calls the `handleShow` function.
7. create your modal as the docs suggests [docs](https://react-bootstrap.github.io/components/modal/)

### Bootstrap form.

1. In the Modal body create a form with the following fields: name,type and image, docs are your friend! [docs](https://react-bootstrap.github.io/components/forms/)
2. Create a state to hold our data.
3. Create a `handleChange` method that modifies our state object and pass it to every field in their `onChange` proprety.
4. Create a `handleSubmit` method that for now console logs our state data and closes the modal. Also pass this method to your submit button.
5. Don't forget to prevent the page from refreshing.
6. Import our modal in `PetsList` and render it at the top.

### Creating in mobx.

1. In our `petStore` let's create a method for adding a pet. Don't forget to mark it as an actions.
2. It takes an argument with our pet data but we still need an `id`, can you genereta an `id`?
3. In `CreateModal.js` import our store and in `handleSubmit` call our new method and pass it our state.

### Updating a pet data.

1. Create a file called `UpdateModal.js` in `Components`
2. Copy the same modal from your `CreateModal` component and fix the namings.
3. Import the update modal in your `PetItem` component below the adopt button.
4. For updating, we need the old values for the user to see, so let's pass the old data from `PetItem` to our modal using props.
5. In our update modal get those props to create an inital value for our state, also add an id value because we already have one. but how to show them in our fields? hint: use the `value` proprety.
6. In our mobx store create an `update` method thats takes an arguemnt and replaces the old pet with the new data coming with the same `petId`.
