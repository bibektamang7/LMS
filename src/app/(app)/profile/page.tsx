'use client'
import React, { useState } from 'react';

const ProfileComponent: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>('https://via.placeholder.com/150');
  const [username, setUsername] = useState<string>('Bibek Tamang');
  const [email] = useState<string>('tmgbibek777@gmail.com'); // Email is static and cannot be changed
  const [phoneNumber, setPhoneNumber] = useState<string>('9818031071');

  // Function to handle profile image change
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Function to handle saving the profile
  const handleSaveProfile = () => {
    // Implement save logic here (e.g., API call)
    alert('Profile saved successfully!');
  };

  // Function to handle account deletion
  const handleDeleteAccount = () => {
    // Implement delete logic here (e.g., API call)
    if (confirm('Are you sure you want to delete your account?')) {
      alert('Account deleted successfully.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Your Profile</h2>

      {/* Profile Image */}
      <div className="mb-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
        />
        <div className="text-center">
          <label htmlFor="profileImageUpload" className="text-blue-500 cursor-pointer">
            Change Profile Image
          </label>
          <input
            type="file"
            id="profileImageUpload"
            className="hidden"
            accept="image/*"
            onChange={handleProfileImageChange}
          />
        </div>
      </div>

      {/* Username */}
      <div className="mb-6">
        <label htmlFor="username" className="block text-lg font-semibold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Email (read-only) */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          readOnly
          className="w-full p-2 border rounded-lg bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-6">
        <label htmlFor="phoneNumber" className="block text-lg font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Save Button */}
      <div className="mb-6">
        <button
          onClick={handleSaveProfile}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </div>

      {/* Delete Account Section */}
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4 text-red-600">Delete Account</h3>
        <p className="mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button
          onClick={handleDeleteAccount}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ProfileComponent;
