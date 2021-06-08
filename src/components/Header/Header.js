import React, { useState } from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import { Home, RestaurantMenu, Payment, Group, ContactPhone, Menu, WbSunny, NightsStay, AttachMoney } from '@material-ui/icons'
import { useMediaQuery } from 'react-responsive'
import './Header.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Header = () => {
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState(true);
    const classes = useStyles();
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })


    const openDrawer = () => {
        setOpen(!open);
    }
    return (
        <div className="header">

            <Navbar fixed="top" bg="white" className="container" style={{ padding: 'none' }} expand="lg">
                <Navbar.Brand href="#" ><Link to="/">HMT</Link></Navbar.Brand>
                {isTabletOrMobile ?
                    <>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    <Drawer anchor="left" open={open} onClose={openDrawer}>
                                        <div
                                            className={classes.fullList}
                                        >
                                            <List>
                                            <Link to="/" onClick={openDrawer}>
                                                <ListItem button >
                                                    <ListItemIcon> <Home /> </ListItemIcon>
                                                    <ListItemText primary={"Home"} />
                                                </ListItem>
                                            </Link>
                                            </List>
                                            <List>
                                            <Link to="/Menu" onClick={openDrawer}>
                                                <ListItem button>
                                                    <ListItemIcon><Link to="/Menu"> <RestaurantMenu /> </Link></ListItemIcon>
                                                    <ListItemText primary={"Menu"} />
                                                </ListItem>
                                                </Link>
                                            </List>
                                            <List>
                                            <Link to="/Prices" onClick={openDrawer}>
                                                <ListItem button>
                                                    <ListItemIcon> <Link to="/Prices"> <AttachMoney /> </Link></ListItemIcon>
                                                    <ListItemText primary={"Prices"} />
                                                </ListItem>
                                                </Link>
                                            </List>
                                            <List>
                                            <Link to="/Pay" onClick={openDrawer}>
                                                <ListItem button>
                                                    <ListItemIcon><Link to="/Pay"> <Payment /></Link> </ListItemIcon>
                                                    <ListItemText primary={"Pay"} />
                                                </ListItem>
                                                </Link>
                                            </List>
                                            <List>
                                            <Link to="/About" onClick={openDrawer}>
                                                <ListItem button>
                                                    <ListItemIcon><Link to="/About"> <Group /> </Link></ListItemIcon>
                                                    <ListItemText primary={"About us"} />
                                                </ListItem>
                                                </Link>
                                            </List>
                                            <List>
                                            <Link to="/Contact" onClick={openDrawer}>
                                                <ListItem button>
                                                    <ListItemIcon><Link to="/Contact"> <ContactPhone /> </Link></ListItemIcon>
                                                    <ListItemText primary={"Contact us"} />
                                                </ListItem>
                                            </Link>
                                            </List>
                                            <List className="mobileSearch">
                                                <ListItem>
                                                    <FormControl
                                                        type="search"
                                                        placeholder="ex:- roti, chicken, rice ..."
                                                        aria-label="Search"
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <Button variant="outline-success">Search</Button>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Drawer>
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                        <div>
                            {day ?
                                <span><WbSunny /></span> : <span><NightsStay /></span>
                            }
                            <span onClick={openDrawer} className="ml-4"><Menu /></span>
                        </div>
                    </>
                    :
                    <>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mr-auto">
                            <Nav.Link className="ml-5"><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link className="ml-3"><Link to="/Menu">Menu</Link></Nav.Link>
                            <Nav.Link className="ml-3"><Link to="/Prices">Prices</Link></Nav.Link>
                            <Nav.Link className="ml-3"><Link to="/Pay">Pay</Link></Nav.Link>
                            <Nav.Link className="ml-3"><Link to="/About">About Us</Link></Nav.Link>
                            <Nav.Link className="ml-3"><Link to="/Contact">Contact Us</Link></Nav.Link>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </>
                }
            </Navbar>
        </div>
    )
}

export default Header
