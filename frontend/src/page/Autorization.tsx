import {Box, Button, TextField} from '@mui/material';
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px',
    boxShadow: 24,
    p: 4,
};

const Autorization = () => {
    const [userName, setUsername] = useLocalStorage('username', 'John');
    const [aboutMe, setAboutMe] = useLocalStorage("aboutMe", "");
    const navigate = useNavigate();

    const handleChangeName = (e: any) => {
        setUsername(e.target.value)
    }

    const handleChangeAboutMe = (e: any) => {
        setAboutMe(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate("/chat")
    }

    const trimmed = userName.trim();

    return (
        <Box sx={style}>
            <div style={{textAlign: "center", display: 'grid'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    value={userName}
                    defaultValue={userName}
                    onChange={handleChangeName}
                />

                <div style={{margin: 5}} />

                <TextField
                    required
                    id="outlined-required"
                    label="About me"
                    value={aboutMe}
                    defaultValue={aboutMe}
                    onChange={handleChangeAboutMe}
                />

                {trimmed && (
                    <Button onClick={handleSubmit}>
                        Log In
                    </Button>
                )}
            </div>
        </Box>
    )
}

export default Autorization;