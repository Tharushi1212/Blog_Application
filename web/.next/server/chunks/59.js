"use strict";
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 6059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9324);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3392);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8855);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_firebase__WEBPACK_IMPORTED_MODULE_9__, firebase_storage__WEBPACK_IMPORTED_MODULE_10__]);
([_utils_firebase__WEBPACK_IMPORTED_MODULE_9__, firebase_storage__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ColorButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button)(({ theme  })=>({
        backgroundColor: "#006600",
        "&:hover": {
            backgroundColor: "#006600"
        },
        outlineColor: "#006600",
        color: "white"
    }));
const ColorButton2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button)(({ theme  })=>({
        color: "black"
    }));
//typography style
const typographyStyle = {
    marginBottom: 3,
    fontSize: 30,
    fontWeight: 10
};
//textField style
const textFieldStyle = {
    width: "100%",
    marginBottom: 50
};
const WriteBlogs = ()=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const [subDescription, setSubDescription] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null);
    const [iname, setIname] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null);
    const [existingImage, setExistingImage] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { myProp  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        setEmail(myProp);
    }, [
        myProp
    ]);
    //change profile image upload
    const handleBlogImageInput = (e)=>{
        const profileImage = e.target.files[0];
        if (profileImage) {
            setImage(profileImage);
            setIname(profileImage.name);
        }
    };
    //upload image
    const handleImageUpload = async ()=>{
        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_10__.ref)(_utils_firebase__WEBPACK_IMPORTED_MODULE_9__/* .storage */ .t, iname);
        (0,firebase_storage__WEBPACK_IMPORTED_MODULE_10__.uploadBytes)(imageRef, image).then(()=>{
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_10__.getDownloadURL)(imageRef).then((url)=>{
                setUrl(url);
            }).catch((error)=>{
                console.error(error.message, "Error getting image url");
            });
            setImage(null);
        });
    };
    //null validation of the form
    const handleSubmit = (url)=>{
        if (title == "" && description == "" && subDescription == "") {
            alert("Please fill all the fields.");
        } else if (title == "") {
            alert("Please fill all the fields.");
        } else if (description == "") {
            alert("Please fill all the fields.");
        } else if (subDescription == "") {
            alert("Please fill all the fields.");
        } else if (title == "" && subDescription == "") {
            alert("Please fill all the fields.");
        } else if (title == "" && subDescription == "") {
            alert("Please fill all the fields.");
        } else if (url === "") {
            alert("Please upload an image.");
        } else if (title.length > 30) {
            alert("Title word limit exceeded.");
        } else if (subDescription.length > 200) {
            alert("Sub description is too long.");
        } else {
            onInsertOk(url);
        }
    };
    //handle submit data
    const onInsertOk = async ()=>{
        try {
            const body = {
                title,
                subDescription,
                description,
                email,
                url
            };
            const insert = await fetch("http://localhost:5000/blogs/WriteBlogs", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const newData = await insert.json();
            if (newData) {
                alert("Successfully published.");
            }
        } catch (error) {
            console.error(error.message);
        }
        setTitle("");
        setSubDescription("");
        setDescription("");
        setUrl("");
        setIname("");
    };
    //handle cancell submit data
    const onInsertCancell = ()=>{
        setTitle("");
        setSubDescription("");
        setDescription("");
        setImage(null);
    };
    //navigate to my blogs page
    const handleMyBlogs = ()=>{
        try {
            router.push({
                pathname: "/MyBlogs",
                query: {
                    myProp
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    };
    //navigate to home page
    const handleNavigateHome = ()=>{
        try {
            router.push({
                pathname: "/Home",
                query: {
                    myProp
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    };
    //navigate to write blogs page
    const handleCreateBlogs = ()=>{
        try {
            router.push({
                pathname: "/WriteBlogs",
                query: {
                    myProp
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
                position: "fixed",
                style: {
                    background: "#00cc66"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default()), {
                        disableGutters: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                variant: "h6",
                                noWrap: true,
                                component: "a",
                                onClick: handleNavigateHome,
                                sx: {
                                    mr: 2,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none"
                                },
                                children: "Home"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    position: "fixed",
                                    right: 5
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            noWrap: true,
                                            component: "a",
                                            onClick: handleMyBlogs,
                                            sx: {
                                                mr: 2,
                                                display: {
                                                    xs: "none",
                                                    md: "flex"
                                                },
                                                fontFamily: "Roboto",
                                                color: "inherit",
                                                textDecoration: "none"
                                            },
                                            children: "My Blogs"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            noWrap: true,
                                            component: "a",
                                            onClick: handleCreateBlogs,
                                            sx: {
                                                mr: 2,
                                                display: {
                                                    xs: "none",
                                                    md: "flex"
                                                },
                                                fontFamily: "Roboto",
                                                color: "inherit",
                                                textDecoration: "none"
                                            },
                                            children: "Create Blogs"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        alt: "user"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "90%",
                    margin: "0 auto"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        height: 600,
                        margin: "0 auto",
                        width: "110vh"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.FormControl, {
                        style: {
                            justifyContent: "center",
                            width: "90vh",
                            backgroundColor: "#baff004a",
                            padding: 40
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: 3
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            marginTop: 5,
                                            marginLeft: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                style: typographyStyle,
                                                children: "Title"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.TextField, {
                                                name: "title",
                                                style: textFieldStyle,
                                                label: "Write title here.",
                                                variant: "standard",
                                                value: title,
                                                onChange: (e)=>setTitle(e.target.value)
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        marginTop: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            style: typographyStyle,
                                            children: "Sub description"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.TextField, {
                                            name: "subDescription",
                                            style: textFieldStyle,
                                            label: "Write a short description about the blog.",
                                            variant: "standard",
                                            value: subDescription,
                                            onChange: (e)=>setSubDescription(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        marginTop: 5
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            style: typographyStyle,
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.TextField, {
                                            name: "description",
                                            label: "Write your blog here.",
                                            multiline: true,
                                            rows: 10,
                                            style: textFieldStyle,
                                            value: description,
                                            onChange: (e)=>setDescription(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    style: typographyStyle,
                                    children: "Image"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "file",
                                    onChange: handleBlogImageInput
                                }),
                                image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Button, {
                                    style: {
                                        color: "black",
                                        border: "1px solid #006600",
                                        textTransform: "none"
                                    },
                                    onClick: handleImageUpload,
                                    children: "Upload"
                                }) : "",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        marginTop: 32,
                                        display: "flex",
                                        flexDirection: "row",
                                        marginRight: 2,
                                        marginBottom: 16,
                                        marginLeft: 26
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorButton2, {
                                            variant: "outlined",
                                            style: {
                                                color: "black",
                                                border: "1px solid #006600",
                                                marginLeft: "auto",
                                                marginRight: 11
                                            },
                                            onClick: onInsertCancell,
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorButton, {
                                            variant: "contained",
                                            onClick: handleSubmit,
                                            children: "Publish"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WriteBlogs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;