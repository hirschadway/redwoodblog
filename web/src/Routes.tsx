// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => (
  <Router>
    <Set wrap={BlogLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/hello-world" page={HelloWorldPage} name="helloWorld" />
    </Set>
    <Route notfound page={NotFoundPage} />
  </Router>
)

export default Routes
