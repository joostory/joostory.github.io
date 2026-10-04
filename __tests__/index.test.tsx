import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PROFILE } from '@/lib/constants'
import Index from '@/pages/index'

describe('Index page', () => {
  it('renders author profile name and section headings', () => {
    render(<Index />)
    expect(
      screen.getByRole('heading', { name: PROFILE.name }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Channels' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Career' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Projects' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
  })
})
