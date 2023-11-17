import { render } from '@redwoodjs/testing/web'

import HelloWorldPage from './HelloWorldPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HelloWorldPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelloWorldPage />)
    }).not.toThrow()
  })
})
