nextjs
- a react framework to build full stack web apps
- with react alone , it is not feasible to build fully featured app ready for production
- react is a lib for building user interfaces
- it uses react for building ui
- also provides additional features to build production ready app
    - routing,
        - tranditional react requires a 3rd paty packages and configuration for routing
        - nextjs simplifies this with file based routing
    - API routes , we can build both frontend and backend in next app
    - optimized rendering,g
        - allows both client side and server side rendering
        - better SEO
    - Data fetching
        - suppoerts built in async await components
    - Out of the box Optimization for fonts images and scripts
    - dev and prod build systems
    - bundling
    - compiling
    - and more

React servcer components (RSC)
- newe architecture-introduced by react-adopted by nextjs
- new approach by dividing the react components by dividing into two types:
    - server components
        - by default , next js treats all components as server components
        - can perform reading files, fetching data from db
        - cant use react hooks or user interactions
    - client components
        - use-clent at top
        - regular react components

routing
- file based routing s/m
- urls you can access in your browser are deermined by how we arrange files and folders in code
