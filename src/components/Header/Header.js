import React, { useState } from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import { Home, RestaurantMenu, Payment, Group, ContactPhone, Menu, WbSunny, NightsStay, AttachMoney } from '@material-ui/icons'
import { useMediaQuery } from 'react-responsive'
import './Header.css'
import logo from '../../logo6.JPG'
import { Link } from 'react-router-dom';
import { useAuth } from '../../ContextAPI/ThemeProvider';

const useStyles = makeStyles({
    drawer:{
        backgroundColor:'#282c35 !important',
        height:'100%'
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    header:{
        background:'transparent',
        borderBottom:'0px'
    }
});

const Header = () => {
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState(true);
    const classes = useStyles();
    const [auth, handleAuth,navbar, handleNavbar] = useAuth(useAuth);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })

    console.log(navbar)
    const openDrawer = () => {
        setOpen(!open);
    }
    return (
        <div className="header">

            <Navbar fixed="top" className={`${classes.header} container`} style={{ padding: 'none' ,backgroundColor:`${navbar? (!auth ? '#fff':'#282c35'): 'transparent'}`}} expand="lg">
                <Navbar.Brand href="#" ><Link to="/"><svg width="200.6311260926174" height="60.49756827971007" viewBox="0 0 369.6311260926174 78.49756827971007" class="css-1j8o68f"><defs id="SvgjsDefs1839"></defs>
                <g id="SvgjsG1840" featurekey="symbolFeature-0" transform="matrix(0.6108808053354026,0,0,0.6108808053354026,-22.324640242751464,-4.73432624134937)" fill="#ffcd38"><path xmlns="http://www.w3.org/2000/svg" d="M97.557,21.833V7.75H86.245h-3H57.837H46.526v14.083h-9.981v92.159c0,0.417,0.192,7.07,10.646,11.479v10.778h36.055h13.477  h0.836v-11.069c9.795-4.404,9.98-10.78,9.98-11.188V21.833H97.557z M49.526,10.75h8.312v11.083h-8.312V10.75z M57.837,133.25H50.19  v-6.672c2.183,0.698,4.71,1.304,7.647,1.768V133.25z M83.245,133.25H60.837v-4.5c3.276,0.375,6.983,0.593,11.204,0.593  c4.225,0,7.93-0.22,11.203-0.598V133.25z M83.245,125.736c-3.223,0.384-6.932,0.606-11.203,0.606  c-31.76,0-32.493-12.249-32.497-12.351V92.827h43.7V125.736z M83.245,89.827h-43.7V58.83h43.7V89.827z M83.245,26.127V55.83h-43.7  V24.833h43.7V26.127z M83.245,21.833H60.837V10.75h22.407V21.833z M94.557,133.25h-8.313V10.75h8.313V133.25z M104.538,113.971  c-0.002,0.072-0.27,4.354-6.98,7.861V92.827h6.98V113.971z M104.538,89.827h-6.98V58.83h6.98V89.827z M104.538,55.83h-6.98V26.127  v-1.294h6.98V55.83z"></path><rect xmlns="http://www.w3.org/2000/svg" x="47.615" y="33.349" width="27.925" height="3"></rect><rect xmlns="http://www.w3.org/2000/svg" x="47.615" y="67.347" width="27.925" height="3"></rect><rect xmlns="http://www.w3.org/2000/svg" x="47.615" y="101.344" width="27.925" height="3"></rect></g><g id="SvgjsG1841" featurekey="nameFeature-0" transform="matrix(0.7284892522250234,0,0,0.7284892522250234,60.91848745452975,5.674607043568198)" fill="#4a4a4a"><path d="M10.343 40 l-7.4857 0 l0.057143 -28.571 l7.4286 0 l0 28.571 z M20.629 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -11.143 l-9.1429 0 l0 -6.2857 l9.1429 0 l0 -11.143 z M41.20028571428571 40 l-3.1429 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l3.1429 0 l0 28.571 z M54.62828571428571 11.428999999999998 l4.2857 4.2857 l0 20 l-4.2857 4.2857 l-12.286 0 l0 -6.2857 l9.1429 0 l0 -16 l-9.1429 0 l0 -6.2857 l12.286 0 z M85.77142857142857 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -16 l-5.0286 9.7143 l-3.7143 0 l-11.429 -22.286 l6.4571 0 l6.8571 12.971 z M64.62852857142857 12 l7.4286 14.514 l0 13.486 l-7.4286 0 l0 -28 z M106.34314285714285 40 l-3.1429 0 l-4.2857 -4.2857 l0 -24.286 l7.4286 0 l0 28.571 z M107.48614285714285 11.428999999999998 l15.714 0 l0 6.2857 l-15.714 0 l0 -6.2857 z M120.91414285714285 22.571 l0 6.2857 l-13.429 0 l0 -6.2857 l13.429 0 z M107.48614285714285 40 l0 -6.2857 l15.714 0 l0 6.2857 l-15.714 0 z M164.34285714285713 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -16 l-5.0286 9.7143 l-3.7143 0 l-11.429 -22.286 l6.4571 0 l6.8571 12.971 z M143.19995714285713 12 l7.4286 14.514 l0 13.486 l-7.4286 0 l0 -28 z M184.9145714285714 40 l-7.4286 0 l0 -24.286 l4.2857 -4.2857 l3.1429 0 l0 28.571 z M198.3425714285714 11.428999999999998 l4.2857 4.2857 l0 24.286 l-7.4286 0 l0 -8 l-9.1429 0 l0 -6.2857 l9.1429 0 l0 -8 l-9.1429 0 l0 -6.2857 l12.286 0 z M215.77171428571427 40 l-7.4286 0 l0 -28.571 l7.4286 0 l0 28.571 z M229.19971428571426 11.428999999999998 l4.2857 4.2857 l0 20 l-4.2857 4.2857 l-12.286 0 l0 -6.2857 l9.1429 0 l0 -16 l-9.1429 0 l0 -6.2857 l12.286 0 z M246.62885714285713 40 l-3.1429 0 l-4.2857 -4.2857 l0 -24.286 l7.4286 0 l0 28.571 z M247.77185714285713 11.428999999999998 l15.714 0 l0 6.2857 l-15.714 0 l0 -6.2857 z M261.1998571428571 22.571 l0 6.2857 l-13.429 0 l0 -6.2857 l13.429 0 z M247.77185714285713 40 l0 -6.2857 l15.714 0 l0 6.2857 l-15.714 0 z M288.74287142857145 11.428999999999998 l0 6.2857 l-7.2571 0 l0 -6.2857 l7.2571 0 z M289.8856714285714 11.428999999999998 l15.886 0 l0 6.2857 l-8.4571 0 l0 22.286 l-7.4286 0 l0 -28.571 z M308.62857142857143 40 l0 -5.7143 l2.2857 0 l0 -17.143 l-2.2857 0 l0 -5.7143 l12 0 l0 5.7143 l-2.2857 0 l0 17.143 l2.2857 0 l0 5.7143 l-12 0 z M332.91457142857143 40 l-7.4286 0 l0 -24.286 l4.2857 -4.2857 l3.1429 0 l0 28.571 z M334.0575714285714 11.428999999999998 l15.714 0 l0 6.2857 l-15.714 0 l0 -6.2857 z M334.0575714285714 28.857 l0 -6.2857 l13.429 0 l0 6.2857 l-13.429 0 z M361.486 40 l-7.4286 0 l0 -24.286 l4.2857 -4.2857 l3.1429 0 l0 28.571 z M362.62899999999996 11.428999999999998 l15.714 0 l0 6.2857 l-15.714 0 l0 -6.2857 z M362.62899999999996 28.857 l0 -6.2857 l13.429 0 l0 6.2857 l-13.429 0 z M381.77142857142854 40 l0 -5.7143 l2.2857 0 l0 -17.143 l-2.2857 0 l0 -5.7143 l12 0 l0 5.7143 l-2.2857 0 l0 17.143 l2.2857 0 l0 5.7143 l-12 0 z M416.34242857142857 11.428999999999998 l7.4286 0 l0 28.571 l-6.5714 0 l-18.571 -26.686 l0 -1.8857 l6.5714 0 l11.143 15.886 l0 -15.886 z M398.62852857142855 15.2 l7.4286 10.629 l0 14.171 l-7.4286 0 l0 -24.8 z"></path></g><g id="SvgjsG1842" featurekey="sloganFeature-0" transform="matrix(0.7077456358054374,0,0,0.7077456358054374,96.69673120834436,42.956013160833415)" fill="#4a4a4a"><path d="M4.0571 5.714 l0 3.1429 l-3.6286 0 l0 -3.1429 l3.6286 0 z M4.6286 5.714 l7.9429 0 l0 3.1429 l-4.2286 0 l0 11.143 l-3.7143 0 l0 -14.286 z M14 20 l0 -2.8571 l1.1429 0 l0 -8.5714 l-1.1429 0 l0 -2.8571 l6 0 l0 2.8571 l-1.1429 0 l0 8.5714 l1.1429 0 l0 2.8571 l-6 0 z M26.1429 20 l-3.7143 0 l0 -12.143 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M26.7143 5.714 l7.8571 0 l0 3.1429 l-7.8571 0 l0 -3.1429 z M26.7143 14.4286 l0 -3.1429 l6.7143 0 l0 3.1429 l-6.7143 0 z M40.42861428571428 20 l-3.7143 0 l0 -12.143 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M41.000014285714286 5.714 l7.8571 0 l0 3.1429 l-7.8571 0 l0 -3.1429 z M41.000014285714286 14.4286 l0 -3.1429 l6.7143 0 l0 3.1429 l-6.7143 0 z M50.57142857142857 20 l0 -2.8571 l1.1429 0 l0 -8.5714 l-1.1429 0 l0 -2.8571 l6 0 l0 2.8571 l-1.1429 0 l0 8.5714 l1.1429 0 l0 2.8571 l-6 0 z M67.85742857142857 5.714 l3.7143 0 l0 14.286 l-3.2857 0 l-9.2857 -13.343 l0 -0.94286 l3.2857 0 l5.5714 7.9429 l0 -7.9429 z M59.00002857142857 7.6 l3.7143 5.3143 l0 7.0857 l-3.7143 0 l0 -12.4 z M84.19995714285714 5.714 l0 3.1429 l-3.6286 0 l0 -3.1429 l3.6286 0 z M84.77145714285714 5.714 l7.9429 0 l0 3.1429 l-4.2286 0 l0 11.143 l-3.7143 0 l0 -14.286 z M98.31425714285714 20 l-3.7429 0 l0.028571 -14.286 l3.7143 0 l0 14.286 z M103.45685714285713 5.714 l3.7143 0 l0 14.286 l-3.7143 0 l0 -5.5714 l-4.5714 0 l0 -3.1429 l4.5714 0 l0 -5.5714 z M113.74289999999999 20 l-3.7143 0 l0 -12.143 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M120.457 5.714 l2.1429 2.1429 l0 12.143 l-3.7143 0 l0 -4 l-4.5714 0 l0 -3.1429 l4.5714 0 l0 -4 l-4.5714 0 l0 -3.1429 l6.1429 0 z M128.08567142857143 5.714 l0 3.1429 l-3.6286 0 l0 -3.1429 l3.6286 0 z M128.65717142857142 5.714 l7.9429 0 l0 3.1429 l-4.2286 0 l0 11.143 l-3.7143 0 l0 -14.286 z M151.40002857142855 11.2 l-1.9429 3.5714 l-4.5714 -7.3429 l0 -1.7143 l3.2857 0 z M155.02842857142855 5.714 l3.2857 0 l0 1.7143 l-4.8571 7.8571 l0 4.7143 l-3.6857 0 l0 -4.7429 z M164.1714714285714 20 l-1.5714 0 l-2.1429 -2.1429 l0 -10 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M170.8855714285714 5.714 l2.1429 2.1429 l0 10 l-2.1429 2.1429 l-6.1429 0 l0 -3.1429 l4.5714 0 l0 -8 l-4.5714 0 l0 -3.1429 l6.1429 0 z M179.60004285714282 20 l-1.5714 0 l-2.1429 -2.1429 l0 -12.143 l3.7143 0 l0 14.286 z M184.74314285714283 5.714 l3.7143 0 l0 12.143 l-2.1429 2.1429 l-6.1429 0 l0 -3.1429 l4.5714 0 l0 -11.143 z M202.17147142857138 20 l-1.5714 0 l-2.1429 -2.1429 l0 -12.143 l3.7143 0 l0 14.286 z M202.7428714285714 16.8571 l7.1429 0 l0 3.1429 l-7.1429 0 l0 -3.1429 z M215.74289999999996 20 l-1.5714 0 l-2.1429 -2.1429 l0 -10 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M222.45699999999997 5.714 l2.1429 2.1429 l0 10 l-2.1429 2.1429 l-6.1429 0 l0 -3.1429 l4.5714 0 l0 -8 l-4.5714 0 l0 -3.1429 l6.1429 0 z M231.17147142857138 20 l-1.5714 0 l-2.1429 -2.1429 l0 -10 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M237.88557142857138 5.714 l2.1429 2.1429 l0 10 l-2.1429 2.1429 l-6.1429 0 l0 -3.1429 l4.5714 0 l0 -8 l-4.5714 0 l0 -3.1429 l6.1429 0 z M246.6000428571428 20 l-3.7143 0 l0 -14.286 l3.7143 0 l0 14.286 z M255.7431428571428 5.714 l0 1.7143 l-3.3429 5.4286 l3.3429 5.4286 l0 1.7143 l-3.4286 0 l-3.2571 -5.5714 l-1.7429 0 l0 -3.1429 l1.7429 0 l3.2571 -5.5714 l3.4286 0 z M257.7428571428571 20 l0 -2.8571 l1.1429 0 l0 -8.5714 l-1.1429 0 l0 -2.8571 l6 0 l0 2.8571 l-1.1429 0 l0 8.5714 l1.1429 0 l0 2.8571 l-6 0 z M275.0288571428571 5.714 l3.7143 0 l0 14.286 l-3.2857 0 l-9.2857 -13.343 l0 -0.94286 l3.2857 0 l5.5714 7.9429 l0 -7.9429 z M266.1714571428571 7.6 l3.7143 5.3143 l0 7.0857 l-3.7143 0 l0 -12.4 z M285.3143285714285 20 l-1.5714 0 l-2.1429 -2.1429 l0 -10 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M292.3144285714285 5.714 l2.1429 2.1429 l0 2.1429 l-2.7143 0 l-1.1429 -1.1429 l-4.7143 0 l0 -3.1429 l6.4286 0 z M287.45712857142854 14.4286 l0 -3.1429 l7 0 l0 6.5714 l-2.1429 2.1429 l-6.4286 0 l0 -3.1429 l4.8571 0 l0 -2.4286 l-3.2857 0 z M308.1714714285714 20 l-3.7143 0 l0 -12.143 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M308.7428714285714 5.714 l7.8571 0 l0 3.1429 l-7.8571 0 l0 -3.1429 z M308.7428714285714 14.4286 l0 -3.1429 l6.7143 0 l0 3.1429 l-6.7143 0 z M322.4571857142857 20 l-1.5714 0 l-2.1429 -2.1429 l0 -10 l2.1429 -2.1429 l1.5714 0 l0 14.286 z M329.17128571428566 5.714 l2.1429 2.1429 l0 10 l-2.1429 2.1429 l-6.1429 0 l0 -3.1429 l4.5714 0 l0 -8 l-4.5714 0 l0 -3.1429 l6.1429 0 z M337.88575714285713 20 l-3.7143 0 l0 -14.286 l3.7143 0 l0 14.286 z M347.02885714285713 7.856999999999999 l0 5 l-2.1429 2.1429 l2.1429 3.2857 l0 1.7143 l-3.4286 0 l-2.9714 -4.8571 l-2.1714 0 l0 -3.1429 l4.8571 0 l0 -3.1429 l-4.8571 0 l0 -3.1429 l6.4286 0 z"></path></g>
                </svg></Link></Navbar.Brand>
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
                                            className={auth && classes.drawer}
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
                            <span onClick={handleAuth}>
                            {!auth ?
                                <span><WbSunny /></span> : <span><NightsStay /></span>
                            }
                            </span>
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
                        <div style={{marginRight:'20px'}}>
                            <span onClick={handleAuth}>
                            {!auth ?
                                <span><WbSunny /></span> : <span><NightsStay /></span>
                            }
                            </span>
                        </div>
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
