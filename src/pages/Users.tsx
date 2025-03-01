import User from "../components/User";

type User = {
    _id:string;  
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
    const listUsers = props.users;
  return (
    <div className="grid">
        {listUsers.map((user) => (
            <User key={user._id} name={user.name} age={user.age} gender={user.gender} email={user.email} phone={user.phone} address={user.address} />
        ))}
          
    </div>
  );
}


export default Users;