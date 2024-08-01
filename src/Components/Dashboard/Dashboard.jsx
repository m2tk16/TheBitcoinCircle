import '@aws-amplify/ui-react/styles.css';
import './styles.css';
import { Grid, Card, Image, Loader, Divider } from '@aws-amplify/ui-react';
import Logo from './Bitcoin.jpg';
import Bar from '../Graphs/BarGraph';

const Dashboard = () => {
    return (
        <div className="aboutWrapper">
            <Grid
                templateColumns="3fr 2fr 3fr"
                templateRows="2fr 3fr 3fr"
                columnGap="0.1rem"
                rowGap="0.1rem"
            >
                <Image className="Bitcoin-image" alt="Bitcoin logo" src={Logo}/>

                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="2"
                    columnEnd="3"
                >
                    <div className="d-hi-lo d-hi">DHigh: $65,000</div>
                    <Divider/>
                    <div className="d-hi-lo d-low">DHigh: $63,000</div>
                </Card>
    <Card
        className="dashboardCard"
                    variation="outlined"
                    columnStart="3"
                    columnEnd="4"
                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="1"
                    columnEnd="1"
                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="2"
                    columnEnd="4"
                >
                    <Bar />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="1"
                    columnEnd="3"
                >
                    Portfolio
                    <Divider/>
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="3"
                    columnEnd="4"
                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="1"
                    columnEnd="2"

                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="2"
                    columnEnd="4"
                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="1"
                    columnEnd="2"
                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="2"
                    columnEnd="3"
                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="3"
                    columnEnd="4"
                >
                    <Loader />
                </Card>
            </Grid>

        </div>
    )
  }
  
export default Dashboard;