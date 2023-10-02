import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
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

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const [subDescription, setSubDescription] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [iname, setIname] = useState('');
  const [url, setUrl] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { myProp } = router.query || {};

  useEffect(() => {
    dataget();
  }, [id, myProp]);

  //get data by blod id
  const dataget = async () => {
    const fetchData = await fetch(
      `http://localhost:5000/blogs/getBlogById/${id}`
    ); //fetch data

    const jsonData = await fetchData.json();
    if (jsonData) {
      setTitle(jsonData.title);
      setSubDescription(jsonData.subDescription);
      setDescription(jsonData.description);
      setUrl(jsonData.url);
    }
  };

  //change profile image upload
  const handleBlogImageInput = (e) => {
    const profileImage = e.target.files[0];
    if (profileImage) {
      setImage(profileImage);
      setIname(profileImage.name);
    }
  };

  //upload image
  const handleImageUpload = async () => {
    const imageRef = ref(storage, iname);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          setUrl(url);
        })
        .catch((error) => {
          console.error(error.message, 'Error getting image url');
        });
      setImage(null);
    });
  };

  //null validation of the form
  const handleSubmit = () => {
    if (title == '' && description == '' && subDescription == '') {
      alert('Please fill all the fields.');
    } else if (title == '') {
      alert('Please fill all the fields.');
    } else if (description == '') {
      alert('Please fill all the fields.');
    } else if (subDescription == '') {
      alert('Please fill all the fields.');
    } else if (title == '' && subDescription == '') {
      alert('Please fill all the fields.');
    } else if (title == '' && subDescription == '') {
      alert('Please fill all the fields.');
    } else if (url === '') {
      alert('Please upload an image.');
    } else if (title.length > 30) {
      alert('Title word limit exceeded.');
    } else if (subDescription.length > 200) {
      alert('Sub description is too long.');
    } else {
      onInsertOk();
    }
  };

  //handle submit data
  const onInsertOk = async () => {
    try {
      const data = { title, subDescription, description, url };
      const insert = await fetch(
        `http://localhost:5000/blogs/updateBlogById/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const newData = await insert.json();
      if (newData.title !== null) {
        alert('Inserted sucessfully.');
      } else {
        alert('Some thing went wrong.');
      }
    } catch (error) {
      console.error(error.message);
    }
    setTitle('');
    setSubDescription('');
    setDescription('');
    setUrl('');
    setIname('');
  };

  //handle cancell submit data
  const onInsertCancell = () => {
    setTitle('');
    setSubDescription('');
    setDescription('');
    setImage(null);
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '90%',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            height: 600,
            margin: '0 auto',
            width: '110vh',
          }}
        >
          <FormControl
            style={{
              justifyContent: 'center',
              width: '90vh',
              backgroundColor: '#baff004a',
              padding: 40,
            }}
          >
            <Box>
              {' '}
              <div style={{ marginTop: 3 }}>
                <div style={{ marginTop: 5, marginLeft: 10 }}>
                  <Typography style={typographyStyle}>Title</Typography>

                  <TextField
                    name="title"
                    style={textFieldStyle}
                    label="Write title here."
                    variant="standard"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ marginTop: 5 }}>
                <Typography style={typographyStyle}>Sub description</Typography>
                <TextField
                  name="subDescription"
                  style={textFieldStyle}
                  label="Write a short description about the blog."
                  variant="standard"
                  value={subDescription}
                  onChange={(e) => setSubDescription(e.target.value)}
                />
              </div>
              <div style={{ marginTop: 5 }}>
                <Typography style={typographyStyle}>Description</Typography>
                <TextField
                  name="description"
                  label="Write your blog here."
                  multiline
                  rows={10}
                  style={textFieldStyle}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Typography style={typographyStyle}>Image</Typography>
              <input type="file" onChange={handleBlogImageInput} />
              {image ? (
                <Button
                  style={{
                    color: 'black',
                    border: '1px solid #006600',
                    textTransform: 'none',
                  }}
                  onClick={handleImageUpload}
                >
                  Upload
                </Button>
              ) : (
                ''
              )}
              <div
                style={{
                  marginTop: 32,
                  display: 'flex',
                  flexDirection: 'row',
                  marginRight: 2,
                  marginBottom: 16,
                  marginLeft: 26,
                }}
              >
                <ColorButton2
                  variant="outlined"
                  style={{
                    color: 'black',
                    border: '1px solid #006600',
                    marginLeft: 'auto',
                    marginRight: 11,
                  }}
                  onClick={onInsertCancell}
                >
                  Cancel
                </ColorButton2>
                <ColorButton variant="contained" onClick={handleSubmit}>
                  Publish
                </ColorButton>
              </div>
            </Box>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
