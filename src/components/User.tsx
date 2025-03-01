type Props = {
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
};

function User(props: Props) {
  return (
    <article className="row row-cols-2 ">
       <div className="col">
            <h3>{props.name} {props.age}</h3>
            <p>{props.gender}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.address}</p>
       </div> 
      
    </article>
  );
}

export default User;