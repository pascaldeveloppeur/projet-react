type Props = {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: number;
    };


function Message(props: Props) {
  return (
    <div>
      <h1>Message</h1>
      <p>Bonjour  {props.firstName} {props.lastName} {props?.email && <span>{props.email}</span>} {props?.phone && <span>{props.phone}</span>}</p>
    </div>
  );
}


export default Message;