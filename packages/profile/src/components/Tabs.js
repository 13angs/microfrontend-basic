import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function Tabs() {
  const history = useHistory();
  return (
    <div>
        <Card sx={{display: 'flex', flexDirection: 'row', width: '100%', padding: '14px'}}>
            <Button onClick={() => history.push('/st')}>Setting profile</Button>
            <Button>Setting password</Button>
        </Card>
    </div> 
  )
}

export default Tabs