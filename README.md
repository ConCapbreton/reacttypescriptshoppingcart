Dave Gray youtube tutorial (link below) for React Typescript completed 23/07/2024
reactquery as an alternative to useEffect

A comprehensive React TypeScript project that includes almost all lessons included in the tutorial:
- Multiple components
- Context API (createContext) for passing props
- useReducer for handling multiple state properties at once (for both the products page and the cart: id, name, price and quantity)
- React hooks such as useEffect, useState and useMemo
- custom hook (useCart and useProducts)

A new functionality is included (memo) used in both CartLineItem and Product components to "memoize" unchanged items and only re-render the changes made by the user. This increases the app's efficiency but is not neccesary for functionality. 

There is also new, interesting code relating to bringing in images and displaying currency values - see CartLineItem and Product components.

There is a notable exception from this project: BrowserRouter:
The "multiple page" aspect of the app is control with a ternary statement in the App component that displays either the product list or the shopping cart depending on the state controlled by the button in the Header/Nav component.  

link: https://www.youtube.com/watch?v=RVFAyFWO4go