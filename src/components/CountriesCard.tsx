import PhoneIcon from "@mui/icons-material/Phone";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import { CardContent } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import React from "react";
import "./style.css";
import { CardMedia } from "@mui/material";

const CountriesCard = () => {
  const style = {
    display: "flex",
    gap: "5px",
  } as const;
  return (
    <Card sx={{ width: 400, borderRadius: "20px", border: "1px solid black" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "15px",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="40"
              width={"40"}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png"
            />
            <div>
              <Typography variant="h6" component={"h5"}>
                Uzbekistan
              </Typography>
              <Typography variant="body1">Tashkent</Typography>
            </div>
          </div>
          <Typography variant="body1">Asia</Typography>
        </Box>
        <div className="bottom-action">
          <Box sx={style}>
            <PhoneIcon sx={{ maxWidth: "18px" }} />
            <Typography sx={{ fontSize: "14px" }}>998</Typography>
          </Box>
          <Box sx={style}>
            <TranslateIcon sx={{ maxWidth: "18px" }} />
            <Typography sx={{ fontSize: "14px" }}>UZS</Typography>
          </Box>
          <Box sx={style}>
            <LanguageIcon sx={{ maxWidth: "18px" }} />
            <Typography sx={{ fontSize: "14px" }}>Uzbek, Russia</Typography>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountriesCard;
