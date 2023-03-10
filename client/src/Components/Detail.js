import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

export const Detail = ({ exerciseDetail }) => {

  const { name , type, equipment, muscle, instructions, gifUrl } = exerciseDetail;
  // console.log(exerciseDetail)


  const extraDetail = [
    {
      index: 1,
      icon: BodyPartImage,
      name: type,
    },
    {
      index: 2,
      icon: TargetImage,
      name: muscle,
    },
    {
      index: 3,
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
    <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
    <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
      <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} mt={10} fontWeight={700} textTransform="capitalize">
        {name}
      </Typography>
      <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
        {instructions}
      </Typography>
      {extraDetail?.map((item) => (
        <Stack key={item.index} direction="row" gap="24px" alignItems="center">
          <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
            <img src={item.icon} alt={type} style={{ width: '50px', height: '50px' }} />
          </Button>
          <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
            {item.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Stack>
  )
}
