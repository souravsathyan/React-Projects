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

Routing Conventions

- all routes must be in the app folder
- route files must be names either page.js or page.tsx
- each folder represents a segment of a URL path

catch all segments

- [...slug] : using single file for multiple purpose

file colocation

- next js only takes export default components
- why?
  - becaues of the file based routing and ensures that there is only single entry point.

Route Groups

- for organizing the routes (file structure) without impacting URL
- (auth)

Layout

- a ui that is shared by multiple pages
- easy to create
  - create a react component from a layout.tsx/jsx
  - that component takes a children prop which next js populate with page data
- nextjs will automatically create if not created manually

MEta data

- meta data can be set in layout and page
- layout will apply to all pages
- page meta data to taht speific page
- when meta data exists in multiple pages along a route, they merge together with page meta data and override layout metadata for matching properties.
- 2 types
- static
- already defined metadata
- dynamic
- dynamically generated from routes, paramets, external data,
- will not work in use-client directive page
- title
- can be given as string or object
- as object
  - defeault : as fallback
  - template : display a specific value in all metadata
  - absolute : used to override parent's metatags

link

- used to navigate between pages

usePathname

- used to get the current path

params

- object containing all the params passed in the url
- available in layout.tsx

searchParams

- object containing all the search params passed in the url like ?page=2, fileters=a,b,c
- not available in layout.tsx

## templates

- they are UI shared among multiple pages
- when ever user navigates between routes sharing a template
  - a new template instance is created
  - states are reseted
  - effects are cleared.
  - dom elements are recreated
- some times we need fresh instatnce in the layout for every child component
- layout only renders differnet child and keeps the shared components same
- useful when we want to run exit/entry animation, useEffect, etc

error.tsx

- automatically wraps route segments and their nested routes in react error boundary
- can create custom error ui for specific segments using the file system hierarchy
- isolates the error to affected segments
  in neted routes
  - errors always bubble up to find the nearest parent error boundary
  - it handles error not jest for its own folder but also for its children
  - strategically placing error boundaries can help with performance
  - it determines which part of UI get affected when things go wrong.

Component Hierarchy

````
<Layout>
        <Template>
          <ErrorBoundary fallback={<Error/>}>
            <Suspense fallback={<Loading />}>
              <ErrorBoundary fallback={<NotFound />}>
              <Page/>
              </ErrorBoundary>
            </Suspense>
          </ErrorBoundary>
        </Template>
      </Layout>
      ```
global error file
- global error tsx have its own html body
- becuasue when error - it replaces completely replaces root layout
- works only in production mode
- used for root level error handling - last line of defence.

parallel routing
 - advanced routing mechanism that lets ua render multiple pages simultaneously in same layout
 - they are defined using a feature called slots.
 - slots help to organize content in a modular way.
 - to create a slot we use the @folder naming convention
 - each defined slot becomes a prop in its corresponding layout.tsx
 - these slots are automatically passed to the layout.tsx as props

parallel route use cases
- dashboard with multiple sections
- split-view interfaces
- multi-pane layouts
- ccomplex admin interfaces

benefits of parallel routes
- good for splitting layout into manageable slots.
- independent route handling
  - each slots can handle its own loading, error states
  - useful when different sections of page have varying speeds or errors
    - eg: can show loading only for user slot or show error only for revenue
- sub navigation
  - each slot function as a mini application, with its own navigation and state management.
  - users can ineract with each sections seperatly , applying filters, sorting etc
  -
````
