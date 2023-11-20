import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LineGraph = (props) => {
  const chartRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const data =props.data;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().domain([9, 18]).range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);

    const line = d3
      .line()
      .defined(d => !isNaN(d.y)) // Ignore NaN values in the data
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveBasis);

    const svg = d3
      .select(chartRef.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
    //   .append("g")
    //   .attr("transform", `translate(${margin.left},${margin.top})`);

    yScale.domain([0, d3.max(data, (d) => d.y)]);

    svg
      .append("g")
      .attr("transform", `translate(20, ${height})`)
      .call(d3.axisBottom(xScale).ticks(data?.length).tickFormat(d3.format("d")))
      .selectAll(".domain")
      .remove();

    svg.selectAll(".tick line").remove();
    // svg.append('g')
    //   .call(d3.axisLeft(yScale));
    svg.selectAll('path').remove(); // Remove existing lines
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "rgb(73,183,74)") // Set line color to green
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("transform", `translate(20,${0})`);
  }, [dimensions,props]);
  useEffect(() => {
    function updateDimensions() {
      if (chartRef.current) {
        const { width, height } =
          chartRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
      }
    }

    updateDimensions(); // Initial size calculation

    window.addEventListener("resize", updateDimensions); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", updateDimensions); // Cleanup
    };
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default LineGraph;
