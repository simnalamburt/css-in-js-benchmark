import React from 'react';
import { BenchmarkType } from '../app/Benchmark';

export default function Tree(props) {
  const { breadth, components, depth, id, wrap } = props;
  const { Box } = components;

  let result = (
    <Box color={id % 3} layout={depth % 2 === 0 ? 'column' : 'row'} outer>
      {depth === 0 ? (
        <Box color={(id % 3) + 3} fixed />
      ) : (
        Array.from(Array(breadth).keys()).map(i => (
          <Tree
            breadth={breadth}
            components={components}
            depth={depth - 1}
            id={i}
            key={i}
            wrap={wrap}
          />
        ))
      )}
    </Box>
  );
  for (let i = 0; i < wrap; i++) {
    result = <Box>{result}</Box>;
  }
  return result;
}

Tree.benchmarkType = BenchmarkType.MOUNT;
