import React, { useState } from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import { Mail, Home, RestaurantMenu, Payment, Group, ContactPhone, Menu, WbSunny, NightsStay } from '@material-ui/icons'
import './Header.css'

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


    const openDrawer = () => {
        setOpen(!open);
    }
    return (
        <div className="header">

            <Navbar fixed="top" bg="white" className="container" style={{ padding: 'none' }} expand="lg">
                <Navbar.Brand href="#">Lunch Box</Navbar.Brand>
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
                                        <ListItem button >
                                            <ListItemIcon> <Home /></ListItemIcon>
                                            <ListItemText primary={"Home"} />
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem button>
                                            <ListItemIcon> <RestaurantMenu /> </ListItemIcon>
                                            <ListItemText primary={"Menu"} />
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem button>
                                            <ListItemIcon> <Payment /> </ListItemIcon>
                                            <ListItemText primary={"Pay"} />
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem button>
                                            <ListItemIcon> <Group /> </ListItemIcon>
                                            <ListItemText primary={"About us"} />
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem button>
                                            <ListItemIcon> <ContactPhone /> </ListItemIcon>
                                            <ListItemText primary={"Contact us"} />
                                        </ListItem>
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
            </Navbar>
        </div>
    )
}

export default Header
