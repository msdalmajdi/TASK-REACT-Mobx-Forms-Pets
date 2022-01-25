# 🐶 Pets Form 

In this task, you are going to crate a form to add a new pet to the pets website. You are going to use `MOBX` and `react-bootstrap`.

## Instructions
- Fork and clone [this repository](https://github.com/JoinCODED/TASK-REACT-SP-Pets-Forms) to your `Development` folder.





### 1. Bootstrap Modal

1. `npm install react-bootstrap bootstrap@5.1.3`
2. Create a file called `PetCreateModal.js` in `Components`
3. Setup your component and import `Modal` from bootstrap. [Create the modal as the docs suggets](https://react-bootstrap.github.io/components/modal/)
4. Create a state for showing the modal with an intial value of `false`.
5. Create a `handleClose` and `handleShow` functions that changes our state to `false` or `true`.
6. Create a button that when pressed calls the `handleShow` function.


### 2. Bootstrap Form

1. In the Modal body create a form with the following fields: `name`,`type` and image docs are your friend! [click here for the docs](https://react-bootstrap.github.io/components/forms/)
2. Create a state to hold our data.
3. Create a `handleChange` method that modifies our state object and pass it to every field in their `onChange` property. 
4. Add a `name` property to each field that matches the state object.
5. Create a `handleSubmit` method that for now console logs our state data and closes the modal. Also pass this method to your submit button.
6. Don't forget to prevent the page from refreshing.
7. Import our modal in `PetsList` and render it at the top.

### 3. Creating in mobx.

1. In our `petStore` let's create a method for adding a pet.
2. It takes an argument with our pet data but we still need an `id`, can you genereta an `id`?
3. In `PetCreateModal.js` import our store and in `handleSubmit` call our new method and pass it our state.

### 4. Updating a pet data.

1. Create a file called `PetUpdateModal.js` in `Components`
2. Copy the same modal from your `PetCreateModal` component and fix the namings.
3. Import the update modal in your `PetItem` component below the adopt button.
4. For updating, we need the old values for the user to see, so let's pass the old data from `PetItem` to our modal using props.
5. In our update modal get those props to create an inital value for our state, also add an id value because we already have one. but how to show them in our fields? hint: use the `value` property.
6. In our mobx store create an `update` method thats takes an arguemnt and replaces the old pet with the new data coming with the same `id`. Don't forget to mark it as an `action`.
7. In `PetUpdateModal` call this new method in the `handleSubmit` function.
