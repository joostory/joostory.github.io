import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Index from '@/pages/index'
import { PROFILE } from '@/lib/constants'

describe('Index page', () => {
  it('renders author profile name and section headings', () => {
    render(<Index />)
    expect(screen.getByRole('heading', { name: PROFILE.name })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Channels' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Career' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
  })
})
