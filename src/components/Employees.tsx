import React, { useEffect, useState } from 'react'
import { Employee } from '../contexts/Employees'

const Employees = ({ data }: any) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      setEmployees(data)
    }
  }, [data])

  const sortEmployees = () => {
    const employeesUpdated = [...employees].sort((item1: Employee, item2: Employee) => {
      if (item1.employee_name < item2.employee_name) {
        return -1
      }

      if (item1.employee_name > item2.employee_name) {
        return 1
      }

      return 0
    })

    setEmployees(employeesUpdated)
  }

  return (
    <div>
      <button onClick={sortEmployees}>Sort</button>
      {employees.map((employee: Employee) => {
        return <div>{employee.employee_name}</div>
      })}
    </div>
  )
}

export default Employees
