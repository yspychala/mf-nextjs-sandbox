Module Federation sandbox

3 apps:
- home
  - `cd apps/home && npm run dev`
  - http://localhost:3000/
  - consumes remote redux store
  - exposes a react header component
  - exposes a non-react module

- messaging
  - `cd apps/messaging && npm run dev`
  - http://localhost:3001/
  - consumes remote redux store from store app
  - consumes the non-react module from home app
  - consumes the react header from home app

- store
  - `cd apps/store && npm run dev`
  - http://localhost:3002/
  - exposes remote redux store
# Current issue with styled-components

- First access to http://localhost:3001/ (messaging app) works perfectly. The imported Header component from the home app can be displayed without any issue. The component uses styled-components and is picking some value from a theme.
- If we make a client-side navigation in this app, again, everything works well.
- However if we refresh the page, the following error appears `TypeError: Cannot read properties of undefined (reading 'primary')`, which means the theme provided to styled-components is now undefined.

If we don’t use a theme in the apps and use directly raw CSS values, it works. For some reason, he theme doesn’t seem to be provided server-side.

A solution could be to add another ThemeProvider around the exported Header (`RemoteHeader`). Tested it, it works. However, it seems a bit weird.