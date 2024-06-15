import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import PanoramaIcon from '@mui/icons-material/Panorama';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import ForumIcon from '@mui/icons-material/Forum';
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", color: '#60bf70', flexDirection: "row", justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>


        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', color: '#60bf70' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Info Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.dark", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center', color: "#60bf70" }}>
              <Typography fontWeight="bold" variant="h5">
                Info Generator
              </Typography>
              <Typography variant="h6">
                Generate Info Of Peoples
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', color: '#60bf70' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI ChatBot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "#60bf70", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center', color: "#60bf70"  }}>
              <Typography fontWeight="bold" variant="h5">
                Chatbot
              </Typography>
              <Typography variant="h6">Chat With AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', color: '#60bf70' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Javascript Converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <JavascriptIcon
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center', color: "#60bf70"  }}>
              <Typography fontWeight="bold" variant="h5">
                JS CONVERTER
              </Typography>
              <Typography variant="h6">
                Translate English to JavaScript code
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', color: '#60bf70' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            SQL Query Converter
          </Typography>
          <Card
            onClick={() => navigate("/query")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <StorageIcon
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center', color: "#60bf70"  }}>
              <Typography fontWeight="bold" variant="h5">
                SQL Query Generator
              </Typography>
              <Typography variant="h6">
                Translate English to SQL Query
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', color: '#60bf70' }}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            MedInfo Generator
          </Typography>
          <Card
            onClick={() => navigate("/memo-gen")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ForumIcon
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center', color: "#60bf70"  }}>
              <Typography fontWeight="bold" variant="h5">
                MedInfo Generator
              </Typography>
              <Typography variant="h6">
                Generate The MedInfo
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={3} sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', color: '#60bf70' }}>
          <Typography variant="h4" mb={2} fontWeight="bold" >
            AI Images
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 5,
              height: 250,
              width: 250,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <PanoramaIcon
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0} mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: 'center', color: "#60bf70"  }}>
              <Typography fontWeight="bold" variant="h5">
                AI Image
              </Typography>
              <Typography variant="h6">Generate AI images</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
