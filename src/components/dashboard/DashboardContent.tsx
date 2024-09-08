import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts';

const DashboardContent: React.FC = () => {
  // Sample data
  const newStudents = {
    count: 120,
    increase: 15, // percentage increase compared to last month
    data: [
      { day: 'Week 1', students: 20 },
      { day: 'Week 2', students: 30 },
      { day: 'Week 3', students: 25 },
      { day: 'Week 4', students: 45 },
    ],
  };

  const totalIncome = {
    amount: 5000,
    increase: 10, // percentage increase compared to last month
    data: [
      { day: 'Week 1', income: 1000 },
      { day: 'Week 2', income: 1200 },
      { day: 'Week 3', income: 1300 },
      { day: 'Week 4', income: 1500 },
    ],
  };

  const topCourse = {
    name: 'React for Beginners',
    enrollments: 50,
  };

  const businessGrowthData = [
    { month: 'Jan', growth: 2000 },
    { month: 'Feb', growth: 2500 },
    { month: 'Mar', growth: 3000 },
    { month: 'Apr', growth: 3500 },
    { month: 'May', growth: 4000 },
    { month: 'Jun', growth: 4500 },
    { month: 'Jul', growth: 5000 },
    { month: 'Aug', growth: 5500 },
    { month: 'Sep', growth: 6000 },
    { month: 'Oct', growth: 6500 },
    { month: 'Nov', growth: 7000 },
    { month: 'Dec', growth: 7500 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* New Students Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">New Students This Month</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-2">{newStudents.count}</span>
            <span className={`text-sm ${newStudents.increase >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {newStudents.increase >= 0 ? '+' : ''}
              {newStudents.increase}%
            </span>
          </div>
          {/* Small Bar Chart */}
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={newStudents.data}>
              <Bar dataKey="students" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Total Income Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Income This Month</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-2">${totalIncome.amount}</span>
            <span className={`text-sm ${totalIncome.increase >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {totalIncome.increase >= 0 ? '+' : ''}
              {totalIncome.increase}%
            </span>
          </div>
          {/* Small Line Chart */}
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={totalIncome.data}>
              <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Enrolled Course Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Top Enrolled Course This Month</h3>
          <p className="text-lg font-bold">{topCourse.name}</p>
          <p className="text-sm text-gray-600">{topCourse.enrollments} Enrollments</p>
          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie
                data={[
                  { name: topCourse.name, value: topCourse.enrollments },
                  { name: 'Others', value: newStudents.count - topCourse.enrollments },
                ]}
                dataKey="value"
                innerRadius={30}
                outerRadius={40}
                fill="#8884d8"
                label
              >
                <Cell key="cell-0" fill="#8884d8" />
                <Cell key="cell-1" fill="#ccc" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Business Growth Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Business Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={businessGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="growth" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardContent;
