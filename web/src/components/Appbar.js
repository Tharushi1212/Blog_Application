import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" style={{ background: '#00cc66' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'fixed',
              right: 5,
            }}
          >
            <MenuItem>
              <Typography
                noWrap
                component="a"
                href="/MyBlogs"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Roboto',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                My Blogs
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                //variant="h6"
                noWrap
                component="a"
                href="/WriteBlogs"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Roboto',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Create Blogs
              </Typography>
            </MenuItem>
            <Avatar alt={'user'} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
