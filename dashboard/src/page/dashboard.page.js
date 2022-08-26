import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

export default function Dashboard({children}) {

  const history = useHistory();

  const menulist = [
    {id: 1, name: 'product', displayname: 'Product', icon: <MailIcon/>},
    {id: 2, name: 'order', displayname: 'Order', icon: <MailIcon/>},
  ];

  const handleClickChangeMenu = (menu) => {
    history.push(`/dashboard/${menu}`)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, height: '8%'}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Bashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menulist.map((menu, index) => (
            <ListItem key={menu.id} onClick={() => handleClickChangeMenu(menu.name)}>
              <ListItemButton>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.displayname} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
