import React from 'react';
import { Link } from "react-router-dom";

export default ({ users, match }) => {
  const userId = Number(match.params.userId);
  const user = users[userId];

  if (user) {
    return (
      <>
        <Link to={'/users'}>Back to All Users</Link>
        <hr/>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <td>
                <img src={user.picture.thumbnail} />
              </td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>{user.name.first}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{user.name.last}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else {
    return <div>loading</div>
  }
}