import {Box, Grid, IconButton, InputBase, Paper} from "@mui/material"
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

const Chat = () => {
    return (
        <>
            <Box bgcolor={'#25334e78'} minHeight={'7vh'} width={'100%'} display={'flex'}>
                <Paper sx={{display: "flex", width: '100%', backgroundColor: '#25334e78'}}>
                    <Box padding={1} color={'white'}>
                        <Grid xs={25} fontSize={22}>
                            Test testovich
                        </Grid>
                        <Grid xs={25} fontSize={12}>
                            Was online 2 hours ago
                        </Grid>
                    </Box>
                    <Box sx={{ml: 1, flex: 1}}/>
                    <Box sx={{p: '8px'}}>
                        <IconButton color="primary" aria-label="directions">
                            <SettingsSharpIcon/>
                        </IconButton>
                        <IconButton color="primary" aria-label="directions">
                            <SearchOutlinedIcon/>
                        </IconButton>
                    </Box>
                </Paper>
            </Box>

            <Box minHeight={'88vh'}>

            </Box>

            <Box bgcolor={'#25334e78'} minHeight={'5vh'} sx={{textAlign: '-webkit-center'}}>
                <Paper sx={{display: "flex", width: '100%', background: "#25334e78"}}>
                    <IconButton sx={{p: '10px'}} aria-label="menu">
                        <AttachFileOutlinedIcon sx={{color: "grey"}}/>
                    </IconButton>
                    <InputBase
                        placeholder="Wrote message..."
                        sx={{ml: 1, flex: 1, color: "white"}}
                    />
                    <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                        <SentimentSatisfiedAltIcon/>
                    </IconButton>
                    <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                        <SendOutlinedIcon/>
                    </IconButton>
                </Paper>
            </Box>
        </>
    )
}

export default Chat