import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button} from "@mui/material";
import { API } from "./Source";
import { useNavigate } from "react-router";


export function Home() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [dp, setDp] = useState("");
    const [bio, setBio] = useState("");
    const [cover, setCover] = useState("");

    const newprofile = {
        name: name,
        dp: dp,
        bio: bio,
        cover: cover,
    };
    const createprofile = (event) => {
        fetch(`${API}/profile`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newprofile),
        })
            .then((data) => data.json())
            .then(() => navigate("/Profilelist"));
        event.preventDefault();
    }



    return (
        <div className="container-1">
            <div >
                <img className="home-image" src="https://img.etimg.com/thumb/msid-75006533,width-640,resizemode-4,imgsize-109293/your-dp.jpg" alt="" />
            </div>
            <div className="form-container">
                <form onSubmit={createprofile}>
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
                    >
                        Create profile
                    </Button>

                </form>
            </div>

        </div>


    )
}