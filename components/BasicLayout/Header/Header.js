import { Container,Button} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import TopBar from "./TopBar/TopBar";

export default function Header() {
  return (
    <div className='header'>
        <TopBar/>
        <Container maxWidth='lg' >
            <div className='menu-options'>
                <Button 
                    className='login' 
                    variant="contained" 
                    size="medium" 
                    startIcon={<PermIdentityIcon />}
                    >Login
                </Button>
            </div>
                
        </Container>
    </div>
  )
}
