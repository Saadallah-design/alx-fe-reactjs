
const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', maxWidth: "300px" }}>
        <h2 style={{ color: 'blue', fontSize: "1.2em" }}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold', fontSize:"1em" }}>{props.age}</span></p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

export default UserProfile;