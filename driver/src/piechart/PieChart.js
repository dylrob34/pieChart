import React, { useRef, useState } from "react";
import { pieChart } from "./pieEntry";
export const PieChart = (props) => {
    const parent = useRef(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    React.useEffect(() => {
        if (parent.current !== null) {
            const rect = parent.current.getBoundingClientRect();
            setHeight(rect.bottom - rect.top);
            setWidth(rect.right - rect.left);
        }
    }, [props.categories, props.resolution, props.defaultColor, props.MSAASamples, props.width, props.height, props.font]);
    React.useEffect(() => {
        if (width !== 0 && height !== 0) {
            pieChart(props.categories, props.resolution || 1, props.defaultColor || [0, 0, 0], props.MSAASamples || 4, props.font || "25px Arial");
        }
    });
    return (React.createElement("div", { ref: parent, style: { height: "100%" } }, React.createElement("div", { style: { display: "flex", height: "100%" } },
        React.createElement("canvas", { id: "piecharttextcanvas", width: width * .4, height: height, style: { "minWidth": 0 } }),
        React.createElement("canvas", { id: "piechartcanvas", width: width * .6, height: height, style: { "minWidth": 0 } }))));
};
