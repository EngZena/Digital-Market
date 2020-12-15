import React from 'react'

export const authContext = React.createContext({
    authenticated: false,
    login: () => { },
})

export default authContext;
