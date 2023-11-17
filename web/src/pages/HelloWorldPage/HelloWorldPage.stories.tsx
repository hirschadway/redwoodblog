import type { Meta, StoryObj } from '@storybook/react'

import HelloWorldPage from './HelloWorldPage'

const meta: Meta<typeof HelloWorldPage> = {
  component: HelloWorldPage,
}

export default meta

type Story = StoryObj<typeof HelloWorldPage>

export const Primary: Story = {}
