import '@aws-amplify/ui-react/styles.css';
import { VictoryLine } from 'victory';



const Bar = () => {
    return (
        <VictoryLine
            style={{
                data: { stroke: "#c43a31" },
                labels: {
                    fontSize: 15,
                    fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
                }
            }}
            data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ]}
            labels={({ datum }) => datum.x}
        />
    )
}

export default Bar;