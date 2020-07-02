import { useState, useEffect } from 'react'

//TODO:
// Create a custom React hook called useAuthentication that
// utilizes browser session storage for storing some tokenized
// identity value (either JWT or UUID)
//
// The hook should provide the value of the entity from session storage
// ,if it exists, as well as a function called logout that will remove
// the value from the session storage, effectively logging the user out
// of the session
//
//Replace this function with the TODO described above
function useAuthentication() {
    const [token, setToken] = useState('');

    useEffect(() => {
        setToken(sessionStorage.getItem('token') || '')
    }, [])

    const logout = () => {
        sessionStorage.removeItem('token');
        setToken('');
    }

  return [token, logout];
}

export default useAuthentication