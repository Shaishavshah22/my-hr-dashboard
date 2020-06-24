import React, { createContext, useEffect, useMemo, useState } from 'react'
//import fetch from node-fetch //TODO: install the package and its type definitions

export interface Employee {
    id: string
    employee_name: string
    employee_salary: string
    employee_age: string
    profile_image?: string
}

interface EmployeeContextState {
    employees: Employee[]
}

export const EmployeeContext = createContext<EmployeeContextState>({ employees: [] })

const EmployeeProvider: React.FunctionComponent<any> = props => {
    const [employees, setEmployees] = useState<EmployeeContextState['employees']>([])

    useEffect(() => {
        // TODO: fetch and papulate the employees array from:
        // http://dummy.restapiexample.com/api/v1/employees
    }, [])

    // TODO: replace the 'div' element with the context Provider
    // component with a memoized object with a value for the employees array
    // that is only recalculated when the local employees state array changes
    return <div {...props}>{/* REPLACE ME */}</div>
}

export default EmployeeProvider