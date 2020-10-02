This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Advertising Data ETL-V Test Task

### Additional Dependencies: 

* **antd**: forms and controls,
* **axios**: ajax requests,
* **lodash**: transform data,
* **moment**: work with dates,
* **recharts**: build Chart,
* **styled-components**: implement css-in-js approach
    
They all are not really necessary, but make development simple and rapid

### Project structure

    /api
        communication with server (load csv)
    /components
        common components that can be used inside any others
    /modules
        components that implements business logic and module-specific components inside
    /pages
        page layout components
    /theme
        global styles and themes (not implemented)
    /utils
        some universal functions
        
        
### What else can be implemented in a working project in case of more complex logic?

* Routing (react-router)
* Theming (styled-components => ThemeProvider)
* Store (react-redux, react-saga/thunk, reselect)
* Tests (jest, enzyme)
* Documentation (docz)
* ESLint/StyleLint (check and fix errors, code beautify)
* Several build options for different environments (env-files, env-cmd utility)
* TypeScript
* Responsive/Adaptive design
* ... etc