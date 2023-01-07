import { useNavigate } from "react-router";


export function Profile({ profile, id }) {

    const navigate = useNavigate();
    
    return (
        <div className="container">
            <div className="profile-container">
                <div className="profile-card">
                    <div className="prof-details">
                        <img className="dp" src={profile.dp} alt="" />
                        <div className="text">
                            <h1>{profile.name}</h1>
                            <h4>{profile.bio}</h4>
                        </div>
                    </div>
                    <div className="btns">
                        <button className="view-profile" onClick={() => navigate("/profile/" + id)} type="submit">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}