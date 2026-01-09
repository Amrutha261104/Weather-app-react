import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
    const INIT_URL =
    "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let COLD_URL = 
    "https://images.unsplash.com/photo-1472158450446-5d1e9e1f34cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxzbm93fGVufDB8fDB8fHww";
    let HOT_URL = 
    "https://images.unsplash.com/photo-1551815943-385d5246c8a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1bm55fGVufDB8fDB8fHww";
    let RAIN_URL = 
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJhaW58ZW58MHx8MHx8fDA%3D";

   
return (
    <div className="InfoBox">
 
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 , borderRadius: 3 , boxShadow:
         info.humidity > 80
          ? "0 0 20px rgba(0,123,255,0.6)"
        : info.temp > 25
        ? "0 0 20px rgba(255,193,7,0.6)"
        : "0 0 20px rgba(173,216,230,0.6)",
        }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {
          info.humidity > 80
          ?RAIN_URL
          :info.temp > 25
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
          ?<WaterDropIcon />
          :info.temp > 25
          ?<SunnyIcon />
          :<AcUnitIcon />
        }
        </Typography>
        <Typography variant="body2"  color= "text.secondary"  component={"span"}>
          <p>Temperature = {info.temp}&deg;c</p>
          <p>Humidity = {info.humidity}%</p>
          <p>Min Temp = {info.tempMin}&deg;c</p>
          <p>MAX Temp = {info.tempMax}&deg;c</p>
          <p>
            This weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;c
          </p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>


    </div>
);
}