import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Alert, Container } from '@mui/material';
import BottomNavigation from './components/BottomNavegation';
import Card from './components/Card'
import Botones from './components/Botones'

export default function ButtonAppBar() {
  return (
    <>
    <Container maxWidth="sm">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bienvenido
          </Typography>
          <Button color="inherit">Iniciar Sesion</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Botones />

    <Card />

    <Alert variant="filled" severity="success">
  Todo a salido correctamente !
</Alert>

<BottomNavigation />
</Container>
    </>
  );
}