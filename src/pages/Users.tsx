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
  //destructure the props
    const {users} = props;
  return (
    <div className="grid md:grid-cols-3 gap-4 my-2">
        {users.map(({_id, name, age, gender,email,  phone, address}: User) => (
            <User key={_id} name={name} age={age} gender={gender} email={email} phone={phone} address={address} />
        ))}
          
    </div>
  );
}


export default Users;