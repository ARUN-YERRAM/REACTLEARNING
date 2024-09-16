// UserCard.js
const UserCard = ({user}) => {
    return ( 
        <div className="card">
            <img src={URL.createObjectURL(user.image)} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
            </div>
        </div>
     );
}
export default UserCard;