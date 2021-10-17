import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
//import AppleIcon from '@material-ui/icons/Apple'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
//import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className="Footer">
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <p
              style={{
                textAlign: 'center',
                marginTop: '3%',
                marginBottom: '3%',
              }}
            >
              .
            </p>
            <div style={{ textAlign: 'center', marginBottom: '3%' }}>
              {/* <Input
                className="subscribe-input-text-field"
                placeholder="Your Email Please"
                allowClear
                onChange={onChange}
                style={{ width: '20%' }}
              />
              <div className="subscribe-btn">
                <Button type="button" variant="outlined" color="primary" style={{ color: '#fff', marginTop: '-2px' }}
                  className="subscribe-btn"
                >
                  Subscribe
                </Button>
              </div> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h5 className="about-heading">CUSTOMER SERVICES</h5>
            <div style={{ textAlign: 'center' }}>
              <Link to="/help-center" style={{ color: 'white' }}>
                <p className="footer-link">Help Center</p>
              </Link>
              <Link to="/contact" style={{ color: 'white' }}>
                <p className="footer-link">Contact Us</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h5 className="about-heading">ABOUT US</h5>
            <div style={{ textAlign: 'center' }}>
              <Link to="/about" style={{ color: 'white' }}>
                <p className="footer-link">About Fhouse.com</p>
              </Link>
              <Link to="/about" style={{ color: 'white' }}>
                <p className="footer-link">About FhouseGroup</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h5 className="about-heading">QUICK LINKS</h5>
            <div style={{ textAlign: 'center' }}>
              <Link to="/" style={{ color: 'white' }}>
                <p className="footer-link">Fhouse</p>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12}>
            <hr style={{ backgroundColor: '#fff' }} />
          </Grid>
          <Grid item xs={12}>
            <h5 className="about-heading">Follow us</h5>
            <div style={{ textAlign: 'center' }}>
              <div className="follow-us">
                <a
                  href="https://twitter.com/"
                  target="blank"
                  style={{ color: 'white' }}
                >
                  {' '}
                  <TwitterIcon style={{ cursor: 'pointer' }} />
                </a>
              </div>
              <div className="follow-us">
                <a
                  href="https://www.facebook.com"
                  target="blank"
                  style={{ color: 'white' }}
                >
                  {' '}
                  <FacebookIcon style={{ cursor: 'pointer' }} />
                </a>
              </div>
              <div className="follow-us">
                {' '}
                <a
                  href="https://www.instagram.com"
                  target="blank"
                  style={{ color: 'white' }}
                >
                  <InstagramIcon style={{ cursor: 'pointer' }} />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
