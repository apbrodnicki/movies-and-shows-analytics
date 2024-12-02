import * as d3 from 'd3';
import type { CsvRecord } from 'models';
import React, { useEffect, useRef } from 'react';

interface UserRatingsChartProps {
	records: CsvRecord[];
}

export const UserRatingsChart = ({ records }: UserRatingsChartProps): React.JSX.Element => {
	const userRatingsChartRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if ((userRatingsChartRef.current !== null) && records.length > 0) {
			d3.select(userRatingsChartRef.current).selectAll('*').remove();

			const barWidth = 50;
			const width = Math.max(records.length * barWidth, 800);
			const height = 800;
			const margin = { top: 50, right: 50, bottom: 350, left: 50 };

			const svg = d3
				.select(userRatingsChartRef.current)
				.attr('width', width)
				.attr('height', height)
				.append('g');

			const xScale = d3.scaleBand()
				.domain(records.map((_, index) => index.toString()))
				.range([margin.left, width - margin.right]);

			const yScale = d3.scaleLinear()
				.domain([0, d3.max(records, record => record.userRating) ?? 0])
				.range([height - margin.bottom, margin.top]);

			const colorScale = d3.scaleSequential(d3.interpolateRgb('blue', 'red'))
				.domain([0, d3.max(records, (record) => record.userRating) ?? 0]);

			svg
				.append('g')
				.attr('transform', `translate(0, ${height - margin.bottom})`)
				.call(d3.axisBottom(xScale)
					.tickFormat((_, index) => `${records[index].title} (${records[index].releaseDate.getFullYear()})`))
				.selectAll('text')
				.style('text-anchor', 'end')
				.attr('dy', '1em')
				.attr('transform', 'rotate(-65)')
				.attr('font-size', '15px');

			svg
				.append('g')
				.attr('transform', `translate(${margin.left}, 0)`)
				.call(d3.axisLeft(yScale));

			svg
				.selectAll('rect')
				.data(records)
				.enter()
				.append('rect')
				.attr('x', (_, index) => xScale(index.toString()) ?? 0)
				.attr('y', (record) => yScale(record.userRating))
				.attr('width', xScale.bandwidth())
				.attr('height', (record) => yScale(0) - yScale(record.userRating))
				.attr('fill', (record) => colorScale(record.userRating));

			svg
				.selectAll('text.bar-title')
				.data(records)
				.enter()
				.append('text')
				.attr('class', 'bar-title')
				.attr('x', (_, index) => (xScale(index.toString()) ?? 0) + xScale.bandwidth() / 2)
				.attr('y', (record) => yScale(record.userRating) - 5)
				.attr('text-anchor', 'middle')
				.text((record) => record.userRating > 0 ? record.userRating : '');
		}
	}, [records]);

	return (
		<svg ref={userRatingsChartRef} />
	);
};
