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
 - for organizing the routes without impacting URL
 - (auth)

Layout
 - a ui that is shared by multiple pages
 - easy to create 
   - create a react component from a layout.tsx/jsx 
   - that component takes a children prop which next js populate with page data
 - nextjs will automatically create if not created manually
 - 