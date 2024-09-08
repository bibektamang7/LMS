import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

// Dummy data for reports
const enrollmentData = [
  { month: 'Jan', enrollments: 100 },
  { month: 'Feb', enrollments: 150 },
  { month: 'Mar', enrollments: 120 },
  { month: 'Apr', enrollments: 180 },
  { month: 'May', enrollments: 200 },
  { month: 'Jun', enrollments: 220 },
  { month: 'Jul', enrollments: 300 },
];

const coursePopularityData = [
  { course: 'Course 1', enrollments: 200 },
  { course: 'Course 2', enrollments: 150 },
  { course: 'Course 3', enrollments: 300 },
  { course: 'Course 4', enrollments: 180 },
  { course: 'Course 5', enrollments: 100 },
];

const revenueData = [
  { name: 'Course 1', value: 5000 },
  { name: 'Course 2', value: 3000 },
  { name: 'Course 3', value: 4000 },
  { name: 'Course 4', value: 3500 },
  { name: 'Course 5', value: 4500 },
];

const userDemographicsData = [
  { name: 'Admin', value: 5 },
  { name: 'Student', value: 50 },
  { name: 'Instructor', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsContent: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Reports</h2>
      <p className="mb-6">View reports and analytics on courses, users, and more.</p>

      {/* Student Enrollment Line Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Student Enrollment Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={enrollmentData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="enrollments" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Course Popularity Bar Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Most Popular Courses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={coursePopularityData}>
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="enrollments" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Pie Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Revenue Distribution by Course</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip />
            <Pie
              data={revenueData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* User Demographics Doughnut Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">User Demographics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip />
            <Pie
              data={userDemographicsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#82ca9d"
              label
            >
              {userDemographicsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReportsContent;
