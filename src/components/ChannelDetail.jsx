import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../utils/api";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setChannelVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "rgb(0,52,89)",
            background:
              "linear-gradient(90deg, rgba(0,52,89,1) 0%, rgba(0,126,167,1) 35%, rgba(0,168,232,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />

        <ChannelCard channel={channelDetail} marginTop="-95px" />
      </Box>

      <Box display="flex" p={2}>
        <Videos videos={channelVideos} justifyContent="center" />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
