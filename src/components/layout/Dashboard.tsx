// components/layouts/DashboardLayout.tsx
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-container">
      <aside>Sidebar</aside> {/* You can add a dashboard-specific sidebar */}
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
