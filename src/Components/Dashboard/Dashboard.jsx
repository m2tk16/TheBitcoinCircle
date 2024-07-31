import '@aws-amplify/ui-react/styles.css';
import './styles.css';
import { Grid, Card, Image, Loader } from '@aws-amplify/ui-react';
import Logo from './Bitcoin.jpg'

const Dashboard = () => {
    return (
        <div className="aboutWrapper">
            <Grid
                templateColumns="3fr 3fr 3fr"
                templateRows="3fr 3fr 3fr"
            >
                <Image className="Bitcoin-image" alt="Bitcoin logo" src={Logo} />

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
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="1"
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
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="1"
                    columnEnd="4"

                >
                    <Loader />
                </Card>
                <Card
                    className="dashboardCard"
                    variation="outlined"
                    columnStart="1"
                    columnEnd="4"
                >
                    <Loader />
                </Card>
            </Grid>

        </div>
    )
  }
  
export default Dashboard;