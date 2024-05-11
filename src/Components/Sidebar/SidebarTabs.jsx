import { useContext } from 'react'
import { Tabs, Tab } from '@mui/material'
import MainContext from '../../Context/index'
import { tabsData } from '../Data/tabsData.Sidebar'

export default function SidebarTabs() {
    const { pageNumber, handlePageNumber } = useContext(MainContext)
    const data = tabsData()
    return (
        <>
            <Tabs orientation='vertical' variant='scrollable' scrollButtons='auto' allowScrollButtonsMobile value={pageNumber} onChange={handlePageNumber}>

                {data.map((tab, index) => (
                    <Tab key={index} {...tab} label={tab.label} icon={tab.icon} sx={{ '&.MuiTab-root': { minHeight: 55 } }} iconPosition='start'>
                    </Tab>
                ))}

            </Tabs>
        </>
    )
}