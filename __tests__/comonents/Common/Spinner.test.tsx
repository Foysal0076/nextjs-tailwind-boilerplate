import Spinner from '@/components/Common/Spinner'
import { render } from '@testing-library/react'

describe('Spinner component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Spinner />)
    expect(container).toBeInTheDocument()
  })

  test('applies default height and width classes if not provided', () => {
    const { container } = render(<Spinner />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveClass('h-6 w-6')
  })

  test('does not apply default height and width classes if provided', () => {
    const { container } = render(<Spinner className='h-10 w-10' />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveClass('h-10 w-10')
    expect(svgElement).not.toHaveClass('h-5 w-5')
  })

  it('should add text-primary-500 class when className does not include text- and does not end with two digits', () => {
    const { container } = render(<Spinner className='some-class' />)
    const spinner = container.firstChild
    expect(spinner).toHaveClass('text-primary-500')
  })

  test('applies additional classes correctly', () => {
    const { container } = render(<Spinner className='custom-class' />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveClass('custom-class')
  })

  test('passes additional props to the svg element', () => {
    const { container } = render(<Spinner data-testid='spinner' />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveAttribute('data-testid', 'spinner')
  })

  test('matches snapshot', () => {
    const { asFragment } = render(<Spinner />)
    expect(asFragment()).toMatchSnapshot()
  })
})
