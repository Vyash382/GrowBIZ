// src/components/CardComponent.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const NewsCard = ({ image, headline, content , url }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Button size="small" color="primary">
          <a href={url}>Read More</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
