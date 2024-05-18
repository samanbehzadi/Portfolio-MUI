import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Typography, Card, CardContent, CardActionArea, CardActions, Button, CardMedia, Divider, Chip, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";

const WorkSamples = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card sx={{ height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll" }} >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Slide direction="down" in={loading} style={{ transitionDelay: loading ? "100ms" : "0ms" }}
                >
                    <Divider textAlign="center" sx={{ "&::before, &::after": { borderColor: "primary.main" }, mb: 3 }} >
                        <Chip icon={<SchoolRounded />} color="primary" label={<Typography variant="body1" color="black" sx={{ textAlign: "center" }} >
                            نمونه‌کارهای من
                        </Typography>} sx={{ p: 3 }} />
                    </Divider>
                </Slide>

                <Grid container sx={{ mx: 3 }}>
                    {/* {courses.map((course, index) => ( */}
                        <Grid xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
                            <Slide direction="up" in={loading} style={{transitionDelay: loading ? `99ms` : "0ms"}}>
                                <Card sx={{ maxWidth: 345, backgroundColor: "gray" }} >
                                    <CardActionArea>
                                        <CardMedia component="img" height="250" width="200" image={''} alt='pic01' />
                                        <CardContent>
                                            <Typography variant="body1" textAlign="left" gutterBottom>
                                                Sample Title
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" textAlign="left" gutterBottom sx={{ direction: "ltr" }} >
                                            تمامی حقوق مادی و معنوی این سایت محفوظ میباشتمامی حقوق مادی و معنوی این سایت ی 
                                                 <div style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                                                     تمامی حقوق مادی و معنوی این سایت محفوظ میباشتمامی حقوق مادی و معنوی این سایت محفوظ میباشتمامی حقوق مادی و معنوی این سایت محفوظ میباشتمامی حقوق مادی و معنوی این سایت محفوظ میباشتمامی حقوق مادی و معنوی این سایت محفوظ میباش
                                                    </div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button href='somewhere' size="small" color="primary" target="_blank" >
                                            اطلاعات بیشتر
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Slide>
                        </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
export default WorkSamples;
