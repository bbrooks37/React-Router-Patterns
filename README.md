# **React Router Patterns**

## **Part 1: React Router Dog Finder**

Build an app that routes to different dogs and displays information on that dog when you’re at that route.

The routes should look like this:

- */dogs* is the homepage and shows all three dogs
- Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to */dogs/whiskey*.
- every other endpoint not listed should redirect you to */dogs.*

[react-router-dogfinder-starter-code.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87cd2dac-ab3f-463d-9956-f9fcd363a4f8/react-router-dogfinder-starter-code.zip)

### **Recommended Structure**

You can preload the *<App />* component with the following *defaultProps* for convenience:

```jsx
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
```

The *<App />* should render:

- a *<Nav />* component with the dogs’ names passed as props
- a *<Switch>* with your *<Route />* declarations

Here is an Example Snippet from the `render` method of *<App />* To Get You Started:
