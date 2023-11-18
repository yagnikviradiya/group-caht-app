import { Button, Container, Grid, Paper, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ChatInput from '../components/ChatInput'
import ChatMessages from '../components/ChatMessages'
import Header from '../components/layoute/Header'

const ChatBoard = () => {
    const socket = useSelector((state) => state.chat.socket);
    const stateUserName = useSelector((state) => state.chat.userName);
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName")
    const groupName = localStorage.getItem("groupName")

    const handelLeaveGroup = () => {
        localStorage.removeItem("userName")
        localStorage.removeItem("groupName")
        navigate('/');
    }

    if (!(userName && groupName &&stateUserName)) {
        navigate('/');
    }

    return (
        <>
            <Container sx={{ padding: '30px' }}>
                <Paper sx={{ padding: "20px" }}>
                    <Header/>
                    <Stack direction='row-reverse' sx={{ margin: "20px 0px" }}>
                        <Button variant='contained' onClick={handelLeaveGroup}>
                            Leave group
                        </Button>
                    </Stack>
                    <ChatMessages />
                    <ChatInput socket={socket} />
                </Paper>
            </Container>
        </>
    )
}

export default ChatBoard