import React, { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  registrationDate: string;
};

const usersData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', registrationDate: '2023-09-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Student', registrationDate: '2023-07-15' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Instructor', registrationDate: '2023-08-05' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Student', registrationDate: '2023-08-20' },
  { id: 5, name: 'Sarah Lee', email: 'sarah@example.com', role: 'Instructor', registrationDate: '2023-09-10' },
];

const UsersContent: React.FC = () => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(usersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'name', direction: 'asc' });

  const usersPerPage = 4;

  // Search and Filter Logic
  useEffect(() => {
    let filtered = usersData.filter(
      (user) =>
        (selectedRole === 'All' || user.role === selectedRole) &&
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Sorting logic
    if (sortConfig.key) {
      filtered = filtered.sort((a, b) => {
        if (a[sortConfig.key as keyof User] < b[sortConfig.key as keyof User]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key as keyof User] > b[sortConfig.key as keyof User]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page on filter or search
  }, [searchTerm, selectedRole, sortConfig]);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Users</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>

      {/* Role Filter */}
      <div className="mb-4">
        <label htmlFor="role" className="font-medium">Filter by Role:</label>
        <select
          id="role"
          className="ml-2 p-2 border rounded-md"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Admin">Admin</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
        </select>
      </div>

      {/* Users Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th
              className="border border-gray-300 p-2 text-left cursor-pointer"
              onClick={() => handleSort('name')}
            >
              Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th
              className="border border-gray-300 p-2 text-left cursor-pointer"
              onClick={() => handleSort('email')}
            >
              Email {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th className="border border-gray-300 p-2 text-left">Role</th>
            <th
              className="border border-gray-300 p-2 text-left cursor-pointer"
              onClick={() => handleSort('registrationDate')}
            >
              Registration Date {sortConfig.key === 'registrationDate' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.role}</td>
                <td className="border border-gray-300 p-2">{user.registrationDate}</td>
                <td className="border border-gray-300 p-2">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="ml-4 text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersContent;
