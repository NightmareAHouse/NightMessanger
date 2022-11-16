import {Button, TextField } from '@mui/material';
import {useLocalStorage} from "../../hooks/useLocalStorage";

const Autorization = (props: {
    closeModal: () => void;
}) => {
    const [username, setUsername] = useLocalStorage('username', 'John');
    const { closeModal } = props;

    const handleChangeName = (e: any) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        closeModal();
    }

    const trimmed = username.trim();

    return (
        <>
            <div style={{textAlign: "center", display: 'grid'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    value={username}
                    defaultValue={username}
                    onChange={handleChangeName}
                />

                {trimmed && (
                    <Button onClick={handleSubmit}>
                        Log In
                    </Button>
                )}
            </div>
        </>
    )
}

export default Autorization;