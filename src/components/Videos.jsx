import { Stack, Box } from "@mui/system";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction, justifyContent }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{ xs: "center", sm: justifyContent || "flex-start" }}
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
