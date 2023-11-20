import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const BarGraph = ({isMonthChanged}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data1 = [
      { month: 'Older', y: 20 },
      { month: 'jan 01-08', y: 40 },
      { month: 'jan 09-16', y: 30 },
      { month: 'jan 17-24', y: 45 },
      { month: 'jan 25-31', y: 50 },
      { month: 'Future', y: 35 },
    ];
    const data2 = [
      { month: 'Older', y: 10 },
      { month: 'jan 01-08', y: 40 },
      { month: 'jan 09-16', y: 20 },
      { month: 'jan 17-24', y: 45 },
      { month: 'jan 25-31', y: 15 },
      { month: 'Future', y: 35 },
    ];
    const data = isMonthChanged ? data1 : data2;
    const parentDiv = chartRef.current.parentElement;
    const width = parentDiv.clientWidth;
    const height = parentDiv.clientHeight;

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleBand()
      .range([0, innerWidth])
      .domain(data.map(d => d.month))
      .paddingInner(0.8);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .nice()
      .range([innerHeight, 0]);

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      // .append('g')
      // .attr('transform', `translate(${margin.left},${margin.top})`);

    const tickCount = data.length; // Set the number of ticks you want
    const xTicks = xScale.domain().filter((d, i) => i % Math.ceil(data.length / tickCount) === 0);
    xScale.domain(xTicks);

    svg.append('g')
      .attr('transform', `translate(30, ${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll(".domain")
      .remove();

      
    svg.selectAll(".tick line").remove();

    svg.selectAll('.bar').remove(); // Remove existing lines

    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('transform', `translate(30, ${0})`)
      .attr('class', 'bar')
      .attr('x', d => xScale(d.month))
      .attr('width', xScale.bandwidth())
      .attr('y', d => yScale(d.y))
      .attr('height', d => innerHeight - yScale(d.y))
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('fill', 'rgb(71,183,71)');
  }, [isMonthChanged]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default BarGraph;
