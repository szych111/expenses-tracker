import { Card } from "../UI/Card";

export const UsersList = (props) => {
  return (
    <Card>
      <h2>Users</h2>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </Card>
  );
};
