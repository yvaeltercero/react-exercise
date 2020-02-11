import React from 'react';
import { Link } from "react-router-dom";

export default ({ users }) =>
  users && users.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Picture</th>
          <th>Login</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td><Link to={'/user/' + index}>{index}</Link></td>
            <td>
              {user.name.title + '. ' + user.name.first + ' ' + user.name.last}
            </td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <img src={user.picture.thumbnail} alt=''></img>
            </td>
            <td>{user.login.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div>loading</div>
  );
