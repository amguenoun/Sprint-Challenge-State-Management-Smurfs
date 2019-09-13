1. What problem does the context API help solve?

It helps store data on a context object and can be used in the necessary components without passing it down through props 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are a bridge between the events and the state, allowing for consisten changes in the state. Reducers recreate the state with the necessary changes and then update the current state. The store represents the state of the app globablly, this is why it is known as the single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state for the entire application while component state is only the state within one component. In big projects, Application state is best in order to keep the application in a consistent state. In small projects, component state is fine due to the reduced amount of complexity.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a middleware that allows for action creators to be written as thunks, or functions that are returned by another function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, it can be a little difficult to keep track of all the moving parts but when it's set up, it makes sense. It also has great dev tools.