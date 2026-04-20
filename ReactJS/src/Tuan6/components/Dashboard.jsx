import React from 'react'
import { Link } from 'react-router-dom'
Link
function Dashboard() {
  return (
    <div>
      <h2>Menu</h2>
      <ul><Link to='/dashboard/profile' >Profile</Link></ul>
        <ul><Link to='/dashboard/orders' >Orders</Link></ul>
      <ul><Link to='/dashboard/settings' >Settings</Link></ul>

    </div>
  )
}

export default Dashboard
