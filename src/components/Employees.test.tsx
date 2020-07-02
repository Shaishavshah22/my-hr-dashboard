import React from 'react'
import { render } from '@testing-library/react'
import Employees from './Employees'

test('renders sort button', () => {
    const { getByText } = render(<Employees data={[]}/>)
    const sortBtnEl = getByText(/Sort/i)
    expect(sortBtnEl).toBeInTheDocument()
})
