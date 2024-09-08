import React, { useState } from 'react';

const SettingsContent: React.FC = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSaveProfile = () => {
    // Handle saving profile data here
    alert('Profile updated successfully!');
  };

  const handleSavePreferences = () => {
    // Handle saving system preferences here
    alert('Preferences saved successfully!');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      {/* Profile Settings */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <button
            onClick={handleSaveProfile}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* System Preferences */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">System Preferences</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="theme" className="block font-medium">Theme</label>
            <select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <button
            onClick={handleSavePreferences}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            Save Preferences
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Enable Notifications</label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="mr-2"
            />
            Receive email notifications
          </div>

          <button
            onClick={() => alert('Notification settings saved successfully!')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            Save Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
