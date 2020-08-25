import { BenchmarkType } from '../app/Benchmark';
import React from 'react';

export default function TextTree(props) {
  const { breadth, components, depth, id, wrap } = props;
  const { TextBox } = components;

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
