import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
	return (
		<Sparklines svgHeight={50} svgWidth={100} data={props.data}>
          <SparklinesLine color={props.color} />
        </Sparklines>
	);
}