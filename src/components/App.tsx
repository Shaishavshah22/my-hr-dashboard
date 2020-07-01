import React, { useContext, useEffect } from 'react'
import Employees from './Employees'
import { EmployeeContext, Employee } from '../contexts/Employees'
import useAuthentication from '../contexts/Authentication'
// TODO: import the EmployeeContext object to be used with the `useContext hook
// TODO: import your custom `useAuthentication` hook


const App: React.FunctionComponent = () => {
  // TODO: use the EmployeeContext shared state to access the array
  // of employees from the API call

  const  { employees, setEmployees } = useContext(EmployeeContext)

  // TODO: Use your custom authentication hook to receive the tokenized
  // identity from session storage and have a button for "logging out"

  const isValidSession = useAuthentication()

  const logout = () => {
    sessionStorage.removeItem('token');
  }

  //TODO: implement sorting logic for the employees array
  // provided by the context consumption to sort by emplyee nanme.
  // This should be accompanied by a componet or button designated
  // for activating and deactivvating the sorting

  

  return (
    <div style={rootStyle}>
      <h3>Active User</h3>
      {
        isValidSession && <button onClick={logout}>Logout</button>
      }
      {/*
        TODO: display the found tokenized identity from your custom hook
      */}
      <h2>List of Employees</h2>
      {/*
        TODO: create React component to cleanly display the employee
        entities that are received from the API call that you've implemented
        and provided via shared context
      */}
      

      <Employees value={employees || []} />
    </div>
  )
}

const rootStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default App
