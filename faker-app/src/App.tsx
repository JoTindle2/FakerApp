import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Generate mock user data using Faker API
    const mockUsers: User[] = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
    }));

    setUsers(mockUsers);
  }, []);

  const renderUsers = () => {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>Mock Users List</h1>
      {users.length > 0 ? renderUsers() : <p>Loading...</p>}
    </div>
  );
};

export default App;
