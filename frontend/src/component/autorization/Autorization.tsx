import {Button, TextField } from '@mui/material';
import {useLocalStorage} from "../../hooks/useLocalStorage";

const Autorization = (props: {
    closeModal: () => void;
}) => {
    const [userName, setUsername] = useLocalStorage('userName', 'John');
    const { closeModal } = props;

    const handleChangeName = (e: any) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        closeModal();
    }

    const trimmed = userName.trim();

    return (
        <>
            <div style={{textAlign: "center", display: 'grid'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    value={userName}
                    defaultValue={userName}
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