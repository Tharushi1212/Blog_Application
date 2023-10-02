import React, { Fragment, useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Input } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Row,
  Col,
  CardImg,
  Container,
  CardText,
} from 'reactstrap';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import BlogCard from '../components/BlogCard';
import Appbar from '../components/Appbar';
import WriteBlogs from './WriteBlogs';
import { red } from '@mui/material/colors';
const Home = () => {
  const [email, setEmail] = useState('');
  const [filter, setFilter] = useState('');
  const [blogId, setBlogId] = useState();
  const [blogsArray, setBlogsArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dates, setDate] = useState();
  const router = useRouter();
  const { myProp } = router.query;

  useEffect(() => {
    setEmail(myProp);
    getAllBlogs();
  }, [myProp]);

  //style for color button
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#004d26',
    '&:hover': {
      backgroundColor: '#004d26',
    },
    color: 'white',
  }));

  //serch bar styles
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  //typography style
  const typoStyle = {
    fontSize: 30,
    marginLeft: 10,
  };

  //handle sign up function
  const handleSignup = () => {
    router.push('/');
  };

  //handle log in function
  const handleLogin = () => {
    router.push('/Signin');
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

  //get all blogs
  const getAllBlogs = async () => {
    try {
      const fetchData = await fetch('http://localhost:5000/blogs/getAllBlogs'); //fetch data

      const jsonData = await fetchData.json();
      if (jsonData) {
        let blogsArray = [];
        for (let i = 0; i < jsonData.length; i++) {
          let dateString = jsonData[i].createdAt;
          let date = new Date(dateString);
          let formattedDate = date.toDateString();

          let temp = {
            blogId: jsonData[i]._id,
            image: jsonData[i].url,
            title: jsonData[i].title,
            subDescription: jsonData[i].subDescription,
            description: jsonData[i].description,
            author: jsonData[i].email,
            dates: formattedDate,
          };
          blogsArray.push(temp);
        }
        setBlogsArray(blogsArray);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  //get one blog
  const readMore = async (e, id) => {
    try {
      router.push({
        pathname: '/OneBlog',
        query: { id, myProp: email },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  //set search term
  const serchCgange = (e) => {
    setSearchTerm(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ height: '10%' }}>
        {myProp ? (
          <AppBar position="fixed" style={{ background: '#00cc66' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
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
                <Search>
                  <SearchIconWrapper style={{ right: 2 }}>
                    <SearchIcon style={{ color: 'black' }} />
                  </SearchIconWrapper>
                  <input
                    placeholder="Search here"
                    type={'text'}
                    value={filter}
                    onChange={serchCgange}
                  ></input>
                </Search>

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
                  <ColorButton variant="contained" href="/Home">
                    Log out
                  </ColorButton>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        ) : (
          <AppBar position="fixed" style={{ background: '#00cc66' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Search>
                  <SearchIconWrapper style={{ right: 2 }}>
                    <SearchIcon style={{ color: 'black' }} />
                  </SearchIconWrapper>
                  <input
                    placeholder="Search here"
                    type={'text'}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  ></input>
                </Search>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'fixed',
                    gap: 5,
                    right: 5,
                  }}
                >
                  <ColorButton variant="contained" onClick={handleSignup}>
                    Sign Up
                  </ColorButton>
                  <ColorButton variant="contained" onClick={handleLogin}>
                    Log in
                  </ColorButton>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        )}
      </div>

      <div style={{ height: '80%', padding: 10 }}>
        <Box sx={{ flexGrow: 0 }}>
          <Grid
            container
            columnSpacing={{ xs: 3 }}
            rowSpacing={1}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {blogsArray
              .filter((cards) => {
                if (searchTerm === '') {
                  return cards;
                } else if (
                  cards.title
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return cards;
                }
              })
              .map((cards, index) => (
                <Col style={{ padding: '10px', height: 460 }}>
                  <Card
                    style={{
                      width: 335,
                      height: 470,
                      borderRadius: 3,
                      border: '3px solid black',
                    }}
                  >
                    <CardHeader>
                      <CardTitle>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '10px',
                          }}
                        >
                          <Typography>{cards.author}</Typography>
                          <Typography>{cards.dates}</Typography>
                        </div>

                        <center>
                          <Typography
                            style={{
                              color: 'black',
                              fontSize: '30px',
                              fontWeight: 'bold',
                            }}
                          >
                            {cards.title}
                          </Typography>
                        </center>
                      </CardTitle>
                      <center>
                        <CardImg
                          src={cards.image}
                          alt="computing Img"
                          style={{ width: 300, height: 190 }}
                        />
                      </center>
                    </CardHeader>
                    <CardBody>
                      <CardText>{cards.subDescription}</CardText>

                      <Button
                        style={{ marginRight: '20px', width: '100%' }}
                        className="btn btn-success"
                        onClick={(e) => {
                          readMore(e, cards.blogId);
                        }}
                      >
                        View
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Home;
