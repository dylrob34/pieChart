import React from "react";
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
    React.useEffect(() => {
        pieChart(props.categories, props.resolution || 1, props.defaultColor || [0, 0, 0], props.MSAASamples || 4, props.font || "25px Arial");
    }, [props.categories, props.resolution, props.defaultColor, props.MSAASamples, props.width, props.height, props.font])
    
    return (
        <div style={{display: "flex"}}>
            <canvas id="piecharttextcanvas" width={props.width * .4} height={props.height}/>
            <canvas id="piechartcanvas" width={props.width} height={props.height}/>
        </div>
    )
}