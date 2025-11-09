// src/contexts/UserContext.jsx
import React, { createContext, useState } from 'react';

// 1. Create and Export the Context Object
export const UserContext = createContext();

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