// src/App.jsx
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import User1 from './components/pages/User1'
import UserContext from './components/UserContext'
import { useState } from 'react';
import ProfilePage from './components/ProfilePage'
import UserDetails from './components/UserDetails'
import UserProfile from './components/UserProfile'


function App() {

  const [userData, setUserData] = useState({ name: "Jane Doe", email: "jane.doe@example.com", age: 28, bio: "Avid reader and traveler" });
    
  const value = { userData: userData, setUserData: setUserData }; // The value to be passed to consuming components

  return (
    <>
        {/* <Header />
        <User1/>
        <Footer />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> */}

{/* here i didn't use UserProvide.Provider because in my context I already used it as return */}
        <UserContext.Provider value={value}>
        
        <ProfilePage />
        <UserDetails />
        <UserProfile />
        </UserContext.Provider>
    </>
  )
}

export default App
