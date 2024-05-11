import { Box } from '@mui/material'
import React from 'react'

export default function Page(props) {
    const {children, pageNumber, index, ...others} = props
  return (
    <div hidden={pageNumber !== index } id={`tabpanel-${index}`} aria-labelledby={`sidebar-tab${index}`} {...others}>
        {pageNumber === index && (
            <Box sx={{height: '100vh', overflow: 'hidden'}}>
                {children}
            </Box>
        )}
    </div>
  )
}
