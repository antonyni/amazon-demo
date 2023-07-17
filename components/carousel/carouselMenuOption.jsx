'use client'
import { Typography, Box } from '@mui/material'
const MenuItem = ({clock}) => {
    return(
    <Box sx={{color:"white",width:"100%",height:"100%",flexShrink:0,backgroundColor:"none",display:"flex",justifyContent:"center",alignItems:"center",}}>
        <Typography variant="menuTitle" sx={{borderRadius:"20px",padding:"1px 8px",backgroundColor:"white",color:"#1d1d1d",fontWeight:"500"}}>
            {clock.name}
        </Typography>
    </Box>
    )
}

export default MenuItem;