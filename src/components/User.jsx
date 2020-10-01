import React from 'react';

function User({ firstName, lastName, date }) {
  return (
    <div className="user__item">
      <span>{`${firstName} ${lastName} ${date}`}</span>
    </div>
  );
}

export default User;
