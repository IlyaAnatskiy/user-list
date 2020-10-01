import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import User from '../components/User';
import { fetchUsers } from '../redux/action/users';

function ClientList() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users } = useSelector(({ users }) => users);

  return (
    <div className="container">
      <div className="center user-btn">
        <Link to="/registration" className="btn">
          Добавить пользователя
        </Link>
      </div>

      <ul className="user__items">
        {users && users.map((obj, index) => <User key={`${obj.name}_${index}`} {...obj} />)}
      </ul>
    </div>
  );
}

export default ClientList;
