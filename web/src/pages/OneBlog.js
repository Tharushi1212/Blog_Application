import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { storage } from '../utils/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { FormControl, Box, TextField, Button, IconButton } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#006600',
  '&:hover': {
    backgroundColor: '#006600',
  },
  outlineColor: '#006600',
  color: 'white',
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: 'black',
}));

//typography style
const typographyStyle = {
  marginBottom: 3,
  fontSize: 30,
  fontWeight: 10,
};

//textField style
const textFieldStyle = {
  width: '100%',
  marginBottom: 50,
};

const VeiwOneBlog = () => {
  // const [email, setEmail] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [subDescription, setSubDescription] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { myProp } = router.query || {};

  useEffect(() => {
    dataget();
  }, [id, myProp]);

  //navigate to my blogs page
  const handleMyBlogs = () => {
    try {
      router.push({
        pathname: '/MyBlogs',
        query: { myProp },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  //navigate to home page
  const handleNavigateHome = () => {
    try {
      router.push({
        pathname: '/Home',
        query: { myProp },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  //navigate to write blogs page
  const handleCreateBlogs = () => {
    try {
      router.push({
        pathname: '/WriteBlogs',
        query: { myProp },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  //get the blog by id
  const dataget = async () => {
    const fetchData = await fetch(
      `http://localhost:5000/blogs/getBlogById/${id}`
    ); //fetch data

    const jsonData = await fetchData.json();
    if (jsonData) {
      setTitle(jsonData.title);
      setSubDescription(jsonData.subDescription);
      setDescription(jsonData.description);
      setImage(jsonData.url);
      setAuthor(jsonData.email);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <AppBar position="fixed" style={{ background: '#00cc66' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleNavigateHome}
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
                  onClick={handleMyBlogs}
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
                  noWrap
                  component="a"
                  onClick={handleCreateBlogs}
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
      <div>
        <Typography
          style={{
            textAlign: 'center',
            fontFamily: 'Georgia, Serif',
            fontWeight: 'bold',
            marginBottom: 14,
            marginTop: '10%',
            fontSize: 53,
            color: '#001a66',
          }}
        >
          Best Places to Vist.......
        </Typography>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <div>
            <div>
              <Typography
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: 14,
                  marginTop: 14,
                  fontSize: 47,
                  color: '#645CAA',
                }}
              >
                {title}
              </Typography>
            </div>
            <div
              style={{
                textAlign: 'left',
                fontWeight: 'italic',
                marginBottom: 14,
                marginTop: 14,
                marginLeft: 10,
                fontSize: 37,
                color: 'black',
              }}
            >
              <i>{subDescription}</i>
            </div>
            <div
              style={{
                textAlign: 'left',
                fontWeight: 'italic',
                marginBottom: 14,
                marginTop: 14,
                marginLeft: 10,
                fontSize: 20,
                color: 'black',
              }}
            >
              <p>{description}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <img
              style={{ width: '100%', height: 600 }}
              src={image}
              alt="blog image"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default VeiwOneBlog;
