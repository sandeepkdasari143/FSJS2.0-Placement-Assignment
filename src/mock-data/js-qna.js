export const jsQNA = [
    {
        questionText: "Q.1 What is Hoisting in Javascript ?",
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q1-what-is-hoisting-in-hoisting-in-javascript-is-a-mechanism-where-variable-and-function-declarations-are-moved-to-the-top-of-their-respective-scopes-during-the-compilation-phase-before-the-code-is-executed-essentially-its-as-if-the-declarations-are-physically-moved-to-the-top-of-the-code'
    },
    {
        questionText: `Q.2 What are different higher order functions in JS? What is the difference between .map()
        and .forEach() ?`,
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q2-what-are-different-higher-order-functions-in-js-what-is-the-difference-between-map-and-foreach'
    },{
        questionText: 'Q.3 What is the difference between .call() .apply() and .bind()? explain with an example',
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q3-what-is-the-difference-between-call-apply-and-bind-explain-with-an-example'
    },{
        questionText: "Q.4 Explain Event bubbling and Event Capturing in JavaScript with suitable examples ",
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q4-explain-event-bubbling-and-event-capturing-in-javascript-with-suitable-examples'
    },{
        questionText: 'Q.5 What is function currying with example?',
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q5-what-is-function-currying-with-an-example'
    },{
        questionText: `Q.6 Explain execution context diagram of following code snippets, use white board to draw execution context diagram.`,
        subQuestions: [
        "Code Snippet 1",
        "console.log('First');",
        "setTimeout(() => console.log('Second'), 0);",
        "console.log('Third');",
        "Code Snippet 2",
        "console.log('First');",
        "function secondCall() {",
        "console.log('Second');",
        "}",
        "setTimeout(secondCall, 2000);",
        "setTimeout(() => console.log('Third'), 0);",
        "console.log('Third');"],
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q6-explain-the-execution-context-diagram-of-the-following-code-snippets-use-a-white-board-to-draw-the-execution-context-diagram'
    },{
        questionText: "Q.7 What are promises? What are the different states of a promise? Support your answer with an example where you need to create your own promise.",
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q7-what-are-promises-what-are-the-different-states-of-a-promise-support-your-answer-with-an-example-where-you-need-to-create-your-promise'
    },{
        questionText: 'Q.8 What is ‘this’ keyword in JavaScript? explain with an example & create',
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q8-what-is-the-this-keyword-in-javascript-explain-with-an-example-andamp-create'
    },{
        questionText: 'Q.9 Explain event loop Call Stack Callback queue and Micro Task queue in Your Words',
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q9-explain-event-loop-call-stack-callback-queue-and-micro-task-queue-in-your-words'
    },{
        questionText: 'Q.10 Explain Debouncing and Create a project where you are using Debouncing ',
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q10-explain-debouncing-and-create-a-project-where-you-are-using-debouncing'
    },{
        questionText: 'Q.11 Explain Closures and Use cases of Closures',
        linkToAnswer: 'https://sandeepkdasari.hashnode.dev/javascript-qa#heading-q11-explain-closures-and-use-cases-of-closures'
    },{
        questionText: 'Q.12 Create a Blog web app using JavaScript',
        subQuestions: ['Fetch data from https://jsonplaceholder.typicode.com/posts and show it to ui', 'User can also add new blog', 'Add Delete functionality also'],
        linkToAnswer: 'https://github.com/sandeepkdasari143/blog-app-DOM'
    },
]