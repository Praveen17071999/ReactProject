

export default [
    {   
        id:1,
        heading: "Declarative",
        description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug."
    },

    {   
        id:2,
        heading:"Component-Based",
        description:"Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
    },

    {
        id:3,
        heading:"Learn Once, Write Anywhere",
        description: "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native."
    },

    {   
        id:4, 
        heading: "A Simple Component",
        description: "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props. JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step."
    },

    {
        id:5,
        heading: "A Stateful Component",
        description: "In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render()."
    },

    {
        id:6,
        heading: "An Application",
        description:"Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation."
    },
    
    {
        id:7,
        heading: "A Component Using External Plugins",
        description: "React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time."
    }

]