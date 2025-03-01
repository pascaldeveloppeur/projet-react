type Props = {
_id?:string;  
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
};

function User(props: Props) {
  return (
    <>
        <article className="User">
       
                <h3>{props.name} {props.age}</h3>
                <p>{props.gender}</p>
                <p>{props.email}</p>
                <p>{props.phone}</p>
                <p>{props.address}</p>
      
        
        </article>
    </>
    
  );
}

export default User;