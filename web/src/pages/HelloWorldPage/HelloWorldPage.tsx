import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HelloWorldPage = () => {
  return (
    <>
      <MetaTags title="HelloWorld" description="HelloWorld page" />

      <h1>HelloWorldPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/HelloWorldPage/HelloWorldPage.tsx</code>
      </p>
      <p>
        My default route is named <code>helloWorld</code>, link to me with `
        <Link to={routes.about()}>About page</Link>`
      </p>
    </>
  )
}

export default HelloWorldPage
