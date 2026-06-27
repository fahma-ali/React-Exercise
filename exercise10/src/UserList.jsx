const UserList = ({users}) => {
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={{ border: "1px solid black", padding: "8px" }}>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
