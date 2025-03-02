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

function Users({users}: UsersProps) {
  let usersSorted: User[] = users;
  const sortBy = (field: string) => {
    console.log(field);
    usersSorted = usersSorted.sort((firstUser: User, secondUser : User) => {
      const fieldInFirstUser = firstUser[field as keyof User] || "";
      const fieldInSecondUser = secondUser[field as keyof User] || "";
      

      if (fieldInFirstUser < fieldInSecondUser) {
        return -1;
      }
      if (fieldInFirstUser > fieldInSecondUser) {
        return 1;
      }
      return 0;
    });
  };
     
  return (
    <section >
      <div className="flex justify-end items-center my-2 text-sm gap-2">
        <span>Trier par</span>
        <button type="button" className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs"
        onClick={() => sortBy("male")}>Hommes</button>
        <button type="button" className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-xs"
        onClick={() => sortBy("female")}>Femmes</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 my-2">
        {users.map(({_id, name, age, gender,email,  phone, address}: User) => (
              <User key={_id} name={name} age={age} gender={gender} email={email} phone={phone} address={address} />
          ))}
      </div>
       
          
    </section>
  );
}


export default Users;