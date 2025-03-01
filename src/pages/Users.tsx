import User from "../components/User";

type User = {
    name: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    address: string;
  };

type UsersProps = {
    users: User[];
};

function Users(props: UsersProps) {
    const users = props.users;
  return (
    <div>
        {users.map((user) => (
            <User name={user.name} age={user.age} gender={user.gender} email={user.email} phone={user.phone} address={user.address} />
        ))}
          
    </div>
  );
}


export default Users;