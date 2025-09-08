// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextValue {
  token: string | null;
  user: User | null;
  login: (data: { token: string; user: User }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Safely parse localStorage
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');

  const [token, setToken] = useState<string | null>(storedToken);
  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const login = (data: { token: string; user: User }) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// import { useEffect, useState } from 'react';
// import api from '../utils/api';
// import { useAuth } from '../context/AuthContext';

// export default function FacultiesPage() {
//   const { token } = useAuth();
//   const [faculties, setFaculties] = useState([]);
//   const [name, setName] = useState('');
//   const [desc, setDesc] = useState('');
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     api.get('/faculties').then((res) => setFaculties(res.data));
//   }, []);

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const fd = new FormData();
//     fd.append('name', name);
//     fd.append('description', desc);
//     fd.append('image', image);
//     await api.post('/faculties', fd, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     alert('Faculty created');
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Faculties</h1>
//       <form onSubmit={handleCreate} className="mb-6">
//         <input
//           placeholder="Name"
//           className="border p-2 mr-2"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           placeholder="Description"
//           className="border p-2 mr-2"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="mr-2"
//         />
//         <button className="bg-green-500 text-white px-3 py-1 rounded">
//           Add
//         </button>
//       </form>
//       <ul>
//         {faculties.map((f) => (
//           <li
//             key={f._id}
//             className="border p-2 mb-2 rounded flex justify-between"
//           >
//             <span>{f.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
