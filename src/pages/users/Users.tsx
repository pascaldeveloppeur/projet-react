import User from "../../components/User";
import { useState } from 'react';
import { USERS } from "../../utils/data";


type User = {
    _id:string;  
    name: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    address: string;
  };



function Users() {
  const [usersSorted, setUsersSorted] = useState<User[]>(USERS); 
  const [alphabetOrder, sortALphabetOrder] = useState(1);  
  const sortBy = (field: string, value: string) => {
    console.log(field, value);
    const result = usersSorted.sort((firstUser: User, secondUser : User) => {
      const fieldInFirstUser = firstUser[field as keyof User] || "";
      const fieldInSecondUser = secondUser[field as keyof User] || "";
      let order = 1;
      if (value === "male") {
        order = -1;
      }
      
       let sortResult = 0;
      if (fieldInFirstUser < fieldInSecondUser) {
        sortResult = -1;
      }
      if (fieldInFirstUser > fieldInSecondUser) {
        sortResult = 1;
      }
      return sortResult * order;
    });
    setUsersSorted([...result]);
  };
  const sortALphabetOrdercally = () => {
    const result = usersSorted.sort((firstUser: User, secondUser : User) => {
      const fieldInFirstUser = firstUser.name;
      const fieldInSecondUser = secondUser.name;
      const order = alphabetOrder === 1 ? -1 : 1;
      sortALphabetOrder(order);
      
       let sortResult = 0;
      if (fieldInFirstUser < fieldInSecondUser) {
        sortResult = -1;
      }
      if (fieldInFirstUser > fieldInSecondUser) {
        sortResult = 1;
      }
      return sortResult * alphabetOrder;
    });
    setUsersSorted([...result]);
  };
     
  return (
    <section className="container mx-auto">
      <div className="flex justify-end items-center my-2 text-sm gap-2">
        <span>Trier par</span>
        <button type="button" className="border border-gray-100  bg-green-50 rounded-md px-2 py-1 text-xs"
        onClick={() => sortBy("gender","male")}>Hommes</button>
        <button type="button" className="border border-gray-100 bg-blue-50 rounded-md px-2 py-1 text-xs"
        onClick={() => sortBy("gender","female")}>Femmes</button>
         <button type="button" className="border border-gray-100 bg-yellow-50 rounded-md px-2 py-1 text-xs"
        onClick={() => sortALphabetOrdercally()}>DE A-Z / Z-A</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 my-2">
        {usersSorted.map(({_id, name, age, gender,email,  phone, address}: User) => (
              <User key={_id} name={name} age={age} gender={gender} email={email} phone={phone} address={address} />
          ))}
      </div>
       
          
    </section>
  );
}


export default Users;



