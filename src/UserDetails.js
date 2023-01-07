import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { API } from "./Source";

export function UserDetails() {
    const { profileid } = useParams();
    const [profile, setProfile] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/profile/${profileid}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((pf) => { setProfile(pf) });

    }, []);

    return (
        <div className="container">
            <div className="detail-container">
                <img className="cover" src={profile.cover} />
                <div className="book-detail-container">
                    <div className="book-specs">
                        <img className="dp-1" src={profile.dp} />
                        <h2 className="book-name">{profile.name}</h2>
                    </div>
                    <p className="book-summary">{profile.bio}</p>
                    <Button
                        onClick={() => navigate("/profilelist")}
                        variant="contained"
                        style={{ backgroundColor: "#DC0000" }}
                    >
                        BACK
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#DC0000", marginLeft: "20px" }}
                        onClick={(event) => {
                            fetch(`${API}/profile/${profile.id}`, {
                                method: "DELETE",
                            }).then(() => navigate(-1));
                            event.preventDefault();
                        }}
                    >
                        DELETE
                    </Button>


                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#DC0000", marginLeft: "20px" }}
                        onClick={() => navigate(`/profile/edit/${profile.id}`)}
                    >EDIT
                    </Button>
                </div>
            </div>
        </div>

    );
}