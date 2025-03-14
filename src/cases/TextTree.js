import React from 'react';
import { BenchmarkType } from '../app/Benchmark';

export default function TextTree(props) {
  const { breadth, components, depth, id, wrap } = props;
  const { TextBox } = components;

  if (TextBox == null) {
    return <span style={{ color: 'white' }}>No implementation available</span>;
  }

  let result = (
    <TextBox color={id % 3} outer>
      {depth === 0 ? (
        <TextBox color={(id % 3) + 3}>Depth 0</TextBox>
      ) : (
        Array.from(Array(breadth).keys()).map(i => (
          <TextTree
            breadth={breadth}
            components={components}
            depth={depth - 1}
            id={i}
            key={i}
            wrap={wrap}
          />
        ))
      )}
    </TextBox>
  );
  for (let i = 0; i < wrap; i++) {
    result = <TextBox>{result}</TextBox>;
  }
  return result;
}

TextTree.benchmarkType = BenchmarkType.MOUNT;
