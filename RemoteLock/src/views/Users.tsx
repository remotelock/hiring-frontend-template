import React, {useContext} from 'react';
import FadeInView from '../components/FadeInView';
import UserItem from '../components/UserItem';
import AppContext, {GlobalContextType} from '../../AppContext';

const Users = () => {
  const {state} = useContext<GlobalContextType>(AppContext);

  return (
    <FadeInView>
      {state?.users?.map((user, i) => (
        <UserItem user={user} key={`${user.id}-${i}`} />
      ))}
    </FadeInView>
  );
};

export default Users;
