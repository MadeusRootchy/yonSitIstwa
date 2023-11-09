
export default function Profile({user}){

    return (
    <div className="profile">
        <div className="profile-pic">
            {/* <img src="" alt="" /> */}
        </div>
        <h3>{user}</h3>
    </div>
    )
}