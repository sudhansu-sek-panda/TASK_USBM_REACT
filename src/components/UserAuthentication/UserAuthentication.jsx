import React, { useState } from 'react';
import './UserAuthentication.css';

const Login = ({ onLogin, showRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don’t have an account? <button onClick={showRegister}>Register</button>
      </p>
    </div>
  );
};

const Register = ({ showLogin }) => {
  return (
    <div className="auth-form">
      <h2>Register</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <p>
        Already have an account? <button onClick={showLogin}>Login</button>
      </p>
    </div>
  );
};

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

const UserAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'dashboard'

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  const showRegister = () => setCurrentView('register');
  const showLogin = () => setCurrentView('login');

  return (
    <div className="app">
      {currentView === 'login' && <Login onLogin={handleLogin} showRegister={showRegister} />}
      {currentView === 'register' && <Register showLogin={showLogin} />}
      {currentView === 'dashboard' && isAuthenticated && (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
};

export default UserAuthentication;
