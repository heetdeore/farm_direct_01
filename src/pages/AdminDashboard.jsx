import { useState, useEffect } from 'react';
import { Users, ShoppingCart, Activity } from 'lucide-react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));

    fetch('http://localhost:5001/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="admin-header">
          <h1 className="font-display">Admin Dashboard</h1>
          <p>Welcome back, system administrator.</p>
        </div>

        <div className="admin-stats-grid">
          <div className="admin-stat-card card">
            <div className="admin-stat-icon"><ShoppingCart size={24} /></div>
            <div className="admin-stat-info">
              <h3>{orders.length}</h3>
              <p>Total Orders</p>
            </div>
          </div>
          <div className="admin-stat-card card">
            <div className="admin-stat-icon"><Users size={24} /></div>
            <div className="admin-stat-info">
              <h3>{users.length}</h3>
              <p>Registered Users</p>
            </div>
          </div>
          <div className="admin-stat-card card">
            <div className="admin-stat-icon"><Activity size={24} /></div>
            <div className="admin-stat-info">
              <h3>₹{orders.reduce((sum, ord) => sum + ord.amount, 0)}</h3>
              <p>Total Revenue</p>
            </div>
          </div>
        </div>

        <div className="admin-tables-container">
          <div className="admin-table-section card">
            <h2 className="font-display">Recent Orders</h2>
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customerName}</td>
                      <td>{order.date}</td>
                      <td>₹{order.amount}</td>
                      <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="admin-table-section card">
            <h2 className="font-display">Recent Users</h2>
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
