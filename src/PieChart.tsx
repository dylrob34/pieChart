import React, {useRef, useState} from "react";
import { pieChart, Categories } from "./pieEntry";
interface PieProps {
    categories: Array<Categories>;
    resolution: number;
    defaultColor: Array<number>;
    MSAASamples: number;
    width: number;
    height: number;
    font: string;
}

export const PieChart = (props: PieProps) =>
{
    const parent = useRef(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    React.useEffect(() => {
        if (parent.current !== null) {
            const rect = parent.current.getBoundingClientRect();
            setHeight(rect.bottom - rect.top);
            setWidth(rect.right - rect.left);
        }
        
        pieChart(props.categories, props.resolution || 1, props.defaultColor || [0, 0, 0], props.MSAASamples || 4, props.font || "25px Arial");

    }, [props.categories, props.resolution, props.defaultColor, props.MSAASamples, props.width, props.height, props.font])
    
    return (
        <div ref={parent} style={{height: "100%"}}>
            {
                <div style={{display: "flex", height: "100%"}}>
                    <canvas id="piecharttextcanvas" width={width * .4} height={height} style={{"minWidth": 0}}/>
                    <canvas id="piechartcanvas" width={width * .6} height={height} style={{"minWidth": 0}}/>
                </div>
            }
        </div>
    )
}