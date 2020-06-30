import React, { useContext,useState } from 'react';
import { Employee,EmployeeContext } from '../contexts/Employees';
// TODO: import the EmployeeContext object to be used with the `useContext hook
// TODO: import your custom `useAuthentication` hook
import useAuthentication from '../contexts/Authentication'


//TODO: find best way to add tsx
type EmployeeProps = {employees:Employee[]}
const EmployeeList = ({employees}:EmployeeProps)=>{
  return (<ul>
    {employees.map((employee)=>(<li key={employee.id}>
      {employee.employee_name}
    </li>))}
  </ul>)
}

const App: React.FunctionComponent = () => {
  // TODO: use the EmployeeContext shared state to access the array
  // of employees from the API call
  const context = useContext(EmployeeContext)
  const [sorted,setSorted] = useState(false)
  // TODO: Use your custom authentication hook to receive the tokenized
  // identity from session storage and have a button for "logging out"

  const [logout,token]:any = useAuthentication('123456')

  console.log(token,logout)
  //TODO: implement sorting logic for the employees array
  // provided by the context consumption to sort by emplyee nanme.
  // This should be accompanied by a componet or button designated
  // for activating and deactivvating the sorting
  const sortByName = ()=>{
    const employees = [...context.employees];
    employees.sort((a,b)=>{
      if(a.employee_name>b.employee_name) return 1;
      else if(b.employee_name>a.employee_name) return -1;
      else return 0
    })
    return employees
  }
  return (
    <div style={rootStyle}>
      <h3>Active User</h3>
      {/*
        TODO: display the found tokenized identity from your custom hook
      */}
      {token?<p>Token is {token}</p>:<p>User logged out</p>}
      {token && <button onClick={()=>logout()}>Log Out</button>}
      <h2>List of Employees</h2>

      {!sorted && <EmployeeList employees={context.employees} />}
      {sorted && <EmployeeList employees={sortByName()} />}
      {/*
        TODO: create React component to cleanly display the employee
        entities that are received from the API call that you've implemented
        and provided via shared context
      */}
      <button onClick={()=>{setSorted(!sorted)}}>{sorted?'UnSort':'Sort'}</button>
    </div>
  );
}

const rootStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export default App;
