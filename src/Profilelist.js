import { useState, useEffect } from "react";
import { API } from "./Source";
import { Profile } from "./Profile";




export function Profilelist() {
    const [profilelist, setProfilelist] = useState([]);

    const getProfile = () => {
        fetch(`${API}/profile`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((pfl) => {setProfilelist(pfl)});
            
    };

    useEffect(() => getProfile(), []);

    return (
        <div className="container">
            <div className="profile-container">
                {profilelist.map((prof) => (
                   <Profile
                   key={prof.id}
                   id={prof.id}
                   profile={prof}
                   />
                ))}
            </div>
        </div>
    )
}