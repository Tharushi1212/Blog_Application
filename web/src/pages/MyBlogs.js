import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';

import { useRouter } from 'next/router';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  CardImg,
  Container,
  CardText,
} from 'reactstrap';

const MyBlogs = () => {
  const [email, setEmail] = React.useState('');
  const [filter, setFilter] = React.useState();
  const [blogsArray, setBlogsArray] = React.useState([]);
  const [blogId, setBlogId] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const { myProp } = router.query;

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

  //modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  React.useEffect(() => {
    setEmail(myProp);
    getBlogsByUser();
  }, [myProp]);

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

  //get all blogs
  const getBlogsByUser = async () => {
    try {
      const fetchData = await fetch(
        `http://localhost:5000/blogs/getBlogByUser/${myProp}`
      ); //fetch data

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

  //delete blog
  const deleteBlog = async (e, id) => {
    setBlogId(id);
    handleOpen();
  };

  //handle delete blogs
  const handleDelete = async () => {
    handleClose();
    try {
      const deleteBlog = await fetch(
        `http://localhost:5000/blogs/removeBlogById/${blogId}`,
        {
          method: 'DELETE',
        }
      );
      await deleteBlog.json();
      if (deleteBlog.status === 200) {
        router.reload(window.location.MyBlogs);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  //naviagte to edit blog page
  const editBlog = async (e, id) => {
    try {
      router.push({
        pathname: '/EditBlog',
        query: { id, myProp: email },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        padding: 10,
      }}
    >
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure, you want to delete this blog?
            </Typography>
            <Button onClick={handleDelete}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </Box>
        </Modal>
      </div>
      <div style={{ height: '10%' }}>
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
                <Avatar alt={'user'} />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div style={{ height: '10%' }}>
        <Typography
          style={{
            textAlign: 'center',
            fontFamily: 'Georgia, Serif',
            fontWeight: 'bold',
            fontSize: 53,
            color: '#001a66',
          }}
        >
          My Blogs
        </Typography>
      </div>

      <div style={{ height: '80%' }}>
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
                            flexDirection: 'row',
                            marginLeft: 'auto',
                          }}
                        >
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
                          <div style={{ marginLeft: 'auto' }}>
                            <IconButton
                              style={{ marginLeft: 'auto' }}
                              onClick={(e) => {
                                editBlog(e, cards.blogId);
                              }}
                            >
                              <EditIcon style={{ marginLeft: 'auto' }} />
                            </IconButton>
                            <IconButton
                              onClick={(e) => {
                                deleteBlog(e, cards.blogId);
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
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
export default MyBlogs;
