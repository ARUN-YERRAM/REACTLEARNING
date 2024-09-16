// UserCard.js

const UserCard = ({user}) => {
    return (  
        <>
            <div className="card">
                <img src={user.avatar} className="card-img-top" alt={user.first_name} />
                <div className="card-body">
                    <h5 className="card-title">{user.first_name}</h5>
                    <h5 className="card-title">{user.last_name}</h5>
                    <p className="card-text">{user.email}</p>
                </div>
            </div>
        </>
    );
}
export default UserCard;

