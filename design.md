# Design of SUSE-APP

SUSE-APP has the following design goals, in this order:
- Keeping things simple
- Should look and feel like any other SUSE webPage
- Should provide an overview of the available products and about RMT 

This document describes both the overall philosophy, and also specific design
patterns used to achieve these goals

# Philosophy

We are using styled-components, which allows us to shifts focus from merely styling HTML elements or React components through className to defining components that contain their own styles and are easily reusable across the entire project.

The styles become an integral part of the component here, thereby eliminating the key part; i.e the CSS classes.

The project is brocken down into components and pages. 

The routing logic is kept inside pages directory. Each page is a react class component having some state. A page component uses other components to assemble the page like lego blocks.

Advantages —
- Quickly see what routes are available in the app.
- Central location for all routing logic.
- Keeping page components separated from other components leads to less crowding.

We have used the same fonts used in SUSE website in our APP `GlobalStyles.js` which is avaialable throughout the website.

