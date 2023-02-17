import PhoneIcon from "@mui/icons-material/Phone";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import { CardContent } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import React from "react";
import "./style.css";
import { Country } from "../interface";
import ReactCountryFlag from "react-country-flag";

type IProps = {
  element: Country;
  loading: boolean;
};
const CountriesCard = ({ element, loading }: IProps) => {
  const style = {
    display: "flex",
    gap: "5px",
    alignItems: "center",
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
            <ReactCountryFlag
              countryCode={'uz'}
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
              cdnSuffix="svg"
              title={element?.emoji}
              style={{
                width: "3em",
                height: "2em",
              }}
            />
            <div>
              <Typography variant="h6" component={"h5"}>
                {element?.name}
              </Typography>
              <Typography variant="body1">{element?.capital}</Typography>
            </div>
          </div>
          <Typography variant="body1">{element?.continent?.name}</Typography>
        </Box>
        <div className="bottom-action">
          <div style={{ display: "flex", gap: "10px" }}>
            <Box sx={style}>
              <PhoneIcon sx={{ maxWidth: "18px" }} />
              <Typography sx={{ fontSize: "14px" }}>
                {element?.phone}
              </Typography>
            </Box>
            <Box sx={style}>
              <TranslateIcon sx={{ maxWidth: "18px" }} />
              <Typography sx={{ fontSize: "14px" }}>{element?.code}</Typography>
            </Box>
          </div>
          <Box sx={style}>
            <LanguageIcon sx={{ maxWidth: "18px" }} />
            <Typography sx={{ fontSize: "14px", gap: "5px", display: "flex" }}>
              {element?.languages?.map((item) => {
                return <span>{item?.name}</span>;
              })}
            </Typography>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountriesCard;
