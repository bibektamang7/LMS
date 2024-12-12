"use client"
import Loader from '@/components/ui/Loader';
import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts';
import { fetchDashboardInfo } from '@/lib/api';

const DashboardContent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data: dashboardInfo } = await fetchDashboardInfo();
      setData(dashboardInfo);
      setIsLoading(false);
    }
    getData();
  }, []);
  if(!data || isLoading) {
    return <Loader/>
  }
  return (
    <div className='w-full p-6'>
      <h2 className="text-3xl font-bold mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">New Students This Month</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-2">{data.newStudents.count}</span>
            <span className={`text-sm ${data.newStudents.increase >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.newStudents.increase >= 0 ? '+' : ''}
              {data.newStudents.increase}%
            </span>
          </div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={data.newStudents.data}>
              <Bar dataKey="students" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Income This Month</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-2">${data.totalIncome.amount}</span>
            <span className={`text-sm ${data.totalIncome.increase >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.totalIncome.increase >= 0 ? '+' : ''}
              {data.totalIncome.increase}%
            </span>
          </div>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data.totalIncome.data}>
              <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Top Enrolled Course This Month</h3>
          <p className="text-lg font-bold">{data.topCourse.name}</p>
          <p className="text-sm text-gray-600">{data.topCourse.enrollments} Enrollments</p>
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie
                data={[
                  { name: data.topCourse.name, value: data.topCourse.enrollments },
                  { name: 'Others', value: data.newStudents.count - data.topCourse.enrollments },
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

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Business Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.formattedBusinessGrowthData}>
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
