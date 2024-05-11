import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import {Helmet} from 'react-helmet-async'
// import Particles, { initParticlesEngine } from '@tsparticles/react'
// import { loadSlim } from '@tsparticles/slim'
// import { links } from '../Constants/Particles'

const Home = () => {
    // const [init, setInit] = useState(false)
    const nameEl = useRef(null)
    const infoEl = useRef(null)

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ['سامان بهزادی'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 30,
            showCursor: false,
            })
        const typedInfo = new Typed(infoEl.current, {
            strings: ['توسعه دهنده وب و برنامه نویس'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 30,
            showCursor: false,        
        })
        return () => {
            typedName.destroy()
            typedInfo.destroy()
        }
    }, [])

    // useEffect(() => {
    //     initParticlesEngine(async (engine) => {
    //         await loadSlim(engine);
    //     });
    // }, []);
    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };

    return (
        <>
                    <Helmet>
                        <title>وب‌سایت سامان بهزادی | صفحه اصلی</title>
                    </Helmet>
                <Box sx={{ backgroundColor: 'yellowgreen', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={links}  style={{width: '200px', height: '200px'}}/> */}
                        <h3 ref={nameEl} id='text-center'></h3>
                        <h5 ref={infoEl} id='text-center'></h5>
                </Box>
            {/* </Particles> */}
        </>
    )
}
export default Home