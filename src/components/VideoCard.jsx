import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={video.id?.videoId ? `/video/${video.id?.videoId}` : demoVideoUrl}
      >
        <CardMedia
          alt={video.snippet?.title}
          image={video.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ width: "355px", height: "180px" }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#003459", height: "70px" }}>
        <Link
          to={video.id?.videoId ? `/video/${video.id?.videoId}` : demoVideoUrl}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            video.snippet?.channelId
              ? `/channel/${video.snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video.snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
