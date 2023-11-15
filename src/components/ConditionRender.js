// src/App.js
import React from 'react';
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

const ConditionRender = () => {
  const isLoggedIn = true;/* your login check logic here */
  let content;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default ConditionRender;