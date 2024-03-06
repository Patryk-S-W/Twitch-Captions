// https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib
// Setup for using React Testing Library with Vitest, a Jest replacement for Vite.

import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement) =>
  render(ui)

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
