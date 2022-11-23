import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "300px", sm: "350px", md: "300px" },
        height: "100%",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            alt={channel?.snippet?.title}
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2 }}
          />

          <Typography variant="h6">{channel?.snippet?.title}</Typography>

          {channel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
