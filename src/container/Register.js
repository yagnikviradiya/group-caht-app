import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GroupSelection from '../components/GroupSelection'

const Register = () => {
    const userName = localStorage.getItem("userName")
    const groupName = localStorage.getItem("groupName")
    const navigate = useNavigate();
    const stateUserName = useSelector((state) => state.chat.userName);


    useEffect(() => {
        if (userName && groupName &&stateUserName) {
            navigate('/chat');
        }
    }, [])

    return (
        <>
            <Container maxWidth="sm" sx={{ marginTop: "150px" }}>
                <GroupSelection />
            </Container>
        </>
    )
}

export default Register