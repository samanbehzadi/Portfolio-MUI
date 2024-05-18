import { useContext } from 'react'
import { Tabs, Tab } from '@mui/material'
import MainContext from '../../Context/index'
import { tabsData } from '../Data/tabsData.Sidebar'
import {useTheme} from '@mui/material/styles'
import { red } from '@mui/material/colors'

export default function SidebarTabs() {
    const { pageNumber, handlePageNumber } = useContext(MainContext)
    const data = tabsData()
    const theme = useTheme()
    
    return (
        <>
            <Tabs orientation='vertical' variant='scrollable' scrollButtons='auto' allowScrollButtonsMobile value={pageNumber} onChange={handlePageNumber} textColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'} indicatorColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}>

                {data.map((tab, index) => (
                    <Tab key={index} {...tab} label={tab.label} icon={tab.icon} sx={{ '&.MuiTab-root': { minHeight: 55 }}} iconPosition='start'>
                    </Tab>
                ))}

            </Tabs>
        </>
    )
}