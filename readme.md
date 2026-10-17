

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: getElementById finds a specific element rooted with the id. 
getElementsByClassName get all the elements connected to the class as objects.
querySelector gets you the first element that matches the query.
querySelectorAll get you all the elements that matches that query or condition. 
2. How do you **create and insert a new element into the DOM**?
Answer: to create element document.createElement("div") is used and to insert the element to a container we to use appendChild(div).
3. What is **Event Bubbling** and how does it work?
Event bubbling is a phenomenon when a childs event is triggred,automatically the if the parent contains a eventListener, it will also run. We can it by using e.stopPropagation()
4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is when parent acts as the listen handler for all the child. we can use document.closest for it

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() stops the browsers default action,Like: constant reloading 
stopPropagation() stops eventBubbling. 
---



