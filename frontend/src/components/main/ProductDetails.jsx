import React, { useState } from 'react';
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  if (!clickedProduct || !clickedProduct.attributes || !clickedProduct.attributes.productimg || !clickedProduct.attributes.productimg.data) {
    return <Typography>Loading...</Typography>;
  }

  const images = clickedProduct.attributes.productimg.data;
  const currentImage = images[selectedImg]?.attributes?.formats?.small?.url || '';

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={currentImage}
          alt={clickedProduct.attributes.productTitle || "Product Image"}
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {clickedProduct.attributes.productTitle || "Product Title"}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.attributes.productPrice || "Price"}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDiscripcion || "Product Description"}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {images.map((item, index) => (
              <ToggleButton
                key={item.id}
                value={index}
                sx={{
                  width: "110px",
                  height: "110px",
                  mx: 1,
                  p: "0",
                  opacity: "0.5",
                }}
              >
                <img
                  onClick={() => setSelectedImg(index)}
                  style={{ borderRadius: 3 }}
                  height={"100%"}
                  width={"100%"}
                  src={item.attributes?.formats?.thumbnail?.url || ''}
                  alt={`Thumbnail ${index}`}
                />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
