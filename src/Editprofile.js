import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { API } from "./Source";
import { useNavigate, useParams } from "react-router";


export function Editprof() {
    const { profileid } = useParams();
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        fetch(`${API}/profile/${profileid}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((pfdata) => {
                setProfile(pfdata);
            });
    }, []);
    return profile ? <Editprofile profile={profile} /> : "Loading.....";
}


export function Editprofile({ profile }) {
    const [name, setName] = useState(profile.name);
    const [dp, setDp] = useState(profile.dp);
    const [bio, setBio] = useState(profile.bio);
    const [cover, setCover] = useState(profile.cover);

    const navigate = useNavigate();

    const updatedprofile = {
        name: name,
        dp: dp,
        bio: bio,
        cover: cover,
    };

    const edit = (event) => {
        fetch(`${API}/profile/${profile.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedprofile),
            headers: { "Content-Type": "application/json" },
        })
            .then((data) => data.json())
            .then(() => navigate(`/profile/${profile.id}`))
        event.preventDefault();
    }


    return (

        <div className="form-container">
            <form>
                <TextField
                    style={{
                        backgroundColor: "whitesmoke",
                        margin: "10px",
                        width: "95%",
                        borderRadius: "10px"

                    }}
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                />
                <TextField
                    style={{
                        backgroundColor: "whitesmoke",
                        margin: "10px",
                        width: "95%",
                        borderRadius: "10px"

                    }}
                    id="Dp"
                    name="Dp"
                    label="Dp"
                    variant="outlined"
                    onChange={(event) => setDp(event.target.value)}
                    type="text"
                    placeholder="Enter Dp"
                    value={dp}
                />
                <TextField
                    style={{
                        backgroundColor: "whitesmoke",
                        margin: "10px",
                        width: "95%",
                        borderRadius: "10px"

                    }}
                    id="Bio"
                    name="Bio"
                    label="Bio"
                    variant="outlined"
                    onChange={(event) => setBio(event.target.value)}
                    type="text"
                    placeholder="Enter Bio"
                    value={bio}
                />
                <TextField
                    style={{
                        backgroundColor: "whitesmoke",
                        margin: "10px",
                        width: "95%",
                        borderRadius: "10px"

                    }}
                    id="Cover"
                    name="Cover"
                    label="Cover"
                    variant="outlined"
                    onChange={(event) => setCover(event.target.value)}
                    type="text"
                    placeholder="Enter cover"
                    value={cover}
                />

                <Button
                    style={{
                        margin: "10px",
                        width: "95%",
                        borderRadius: "10px",
                        padding: "10px",
                        backgroundColor:"#DC0000"

                    }}

                    type="submit"
                    variant="contained"
                    onClick={edit}>
                    update profile
                </Button>

            </form>
            <Button
              style={{
                margin: "10px",
                width: "95%",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor:"#DC0000"

            }}
                onClick={() => navigate(-1)}
                variant="contained"
            >
                BACK
            </Button>
        </div>


    )
}




