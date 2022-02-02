import React from 'react'
import { render, screen } from 'test-utils'

describe('Should do something', () => {
  it('test', () => {
    render(<div>test</div>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
