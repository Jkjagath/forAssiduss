import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DoubleBarGraph = ({isMonthChanged}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data1 = [
      { month: 'August', y1: 20, y2: 10 },
      { month: 'September', y1: 40, y2: 25 },
      { month: 'October', y1: 30, y2: 35 },
      { month: 'November', y1: 35, y2: 20 },
      { month: 'December', y1: 45, y2: 35 },
      { month: 'January', y1: 10, y2: 25 },
    ];
    const data2 = [
      { month: 'August', y1: 14, y2: 20 },
      { month: 'September', y1: 23, y2: 10 },
      { month: 'October', y1: 10, y2: 20 },
      { month: 'November', y1: 36, y2: 15 },
      { month: 'December', y1: 35, y2: 25 },
      { month: 'January', y1: 30, y2: 15 },
    ];
    const data = isMonthChanged ? data1 : data2
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
      .domain([0, d3.max(data, d => d.y1 + d.y2)])
      .nice()
      .range([innerHeight, 0]);

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      // .append('g')
      // .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append('g')
      .attr('transform', `translate(30, ${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll(".domain")
      .remove();

      
    svg.selectAll(".tick line").remove();

    svg.selectAll('.bar1').remove();
    svg.selectAll('.bar1')
      .data(data)
      .enter().append('rect')
      .attr('transform', `translate(30, ${0})`)
      .attr('class', 'bar1')
      .attr('x', d => xScale(d.month))
      .attr('width', xScale.bandwidth())
      .attr('y', d => yScale(d.y1))
      .attr('height', d => innerHeight - yScale(d.y1))
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('fill', 'rgb(71,183,71)');
      
      svg.selectAll('.bar2').remove();
    svg.selectAll('.bar2')
      .data(data)
      .enter().append('rect')
      .attr('transform', `translate(30, ${0})`)
      .attr('class', 'bar2')
      .attr('x', d => xScale(d.month))
      .attr('width', xScale.bandwidth())
      .attr('y', d => yScale(d.y1 + d.y2))
      .attr('height', d => innerHeight - yScale(d.y2)+8)
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('fill', 'rgb(2,187,125)');
  }, [isMonthChanged]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default DoubleBarGraph;
