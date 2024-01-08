import React from "react";
import "./Business.css"
// import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, Button, SvgIcon} from '@mui/material'
// import GroupIcon from '@mui/icons-material/Group';
// import SchoolIcon from '@mui/icons-material/School';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
function Business(){
return (
    <section className="business-section">
      <div className="overlay">
          <div className="col-lg-6">
            <h5 className="sub-title3">Create An Account From Anywhere in the World</h5>
            <h2 className="title3">Solutions for Every Business Need.</h2>
            <p className="other3">Power up your business with a full-stack online cashiering system that fits your needs.</p>
        </div>
        {/* <div>
         <div className="card-layout">
           <Grid container spacing={3}>
           <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
            <CardActionArea>
              <CardMedia>
                <CardContent>
                  <GroupIcon/>
                <Typography gutterBottom variant="h5" component="div">
                  Student Organization
                </Typography>
                <Typography variant="body2">Simplify membership dues, event fees, and fundraising campaigns to focus on creating memorable experiences and driving impactful initiatives.</Typography>
                </CardContent>
              </CardMedia>
            </CardActionArea>
              <Button size="small">Get Started</Button>
            <CardActions>
            </CardActions>
           </Card>
          </Grid>

           <Grid container spacing={3}>
           <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <CardContent>
                  <div className="icon"> <SchoolIcon/></div>
                <Typography gutterBottom variant="h5" component="div">
                  Students
                </Typography>
                <Typography variant="body2">Enjoy the convenience of making secure online payments from anywhere, ensuring a smooth and stress-free financial experience throughout your academic journey.</Typography>
                </CardContent>
              </CardMedia>
            </CardActionArea>
              <Button size="small">Get Started</Button>
            <CardActions>
            </CardActions>
           </Card>
          </Grid>

           <Grid container spacing={3}>
           <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <CardContent>
                     <BusinessCenterIcon/>
                <Typography gutterBottom variant="h5" component="div">
                  Freelancer
                </Typography>
                <Typography variant="body2">Offer design services, writing, tutoring, or any other freelance work and streamlines the payment process, ensuring you receive your hard-earned money swiftly and hassle-free</Typography>
                </CardContent>
              </CardMedia>
            </CardActionArea>
             <Button size="small">Get Started</Button>
            <CardActions>
            </CardActions>
           </Card>
          </Grid>
         </div>
        </div> */}

        <div className="container">
          <div className="item1"><h3>Student Organization</h3>
          <p>Simplify membership dues, event fees, and fundraising campaigns to focus on creating memorable experiences and driving impactful initiatives</p>
          <button>Get Started</button></div>
          <div className="item2"><h3>Students</h3>
          <p>Enjoy the convenience of making secure online payments from anywhere, ensuring a smooth and stress-free financial experience throughout your academic journey.</p> <button>Get Started</button></div>
          <div className="item3"><h3>Freelancers</h3>
          <p>Offer design services, writing, tutoring, or any other freelance work and streamlines the payment process, ensuring you receive your hard-earned money swiftly and hassle-free</p> <button>Get Started</button></div></div>
      </div>
    </section>
)
}




export default Business