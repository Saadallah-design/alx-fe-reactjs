import UserDetails from './UserDetails';
import {UserContext} from '../contexts/UserContext';
import { useContext } from 'react';

function UserInfo() {
    const {userData} = useContext(UserContext);
  return <UserDetails userData={userData} />;
}

export default UserInfo;