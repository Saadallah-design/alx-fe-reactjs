// src/contexts/UserContext.jsx
import React, { createContext } from 'react';

// 1. Create and Export the Context Object
const UserContext = createContext();

export default UserContext;

// 2. Create the Provider Component
// export function UserProvider({children}) {
//   // State that you want to share globally

//   return (
//     // Pass the value to the actual Provider component
//     <UserContext.Provider value={value}>
//         {children}
//     </UserContext.Provider>
//   );
// }