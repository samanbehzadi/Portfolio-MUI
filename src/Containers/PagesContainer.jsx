import Grid2 from '@mui/material/Unstable_Grid2'

export default function PagesContainer({children}) {
    return (
        <>
            <Grid2 xs={12} md={9}>
                {children}
            </Grid2>
        </>
    )
}
