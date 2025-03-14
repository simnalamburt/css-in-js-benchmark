import { interpolateBuPu, interpolatePurples, interpolateRdPu } from 'd3-scale-chromatic';
import React from 'react';
import { BenchmarkType } from '../app/Benchmark';

const targetSize = 10;

export default function SierpinskiTriangle(props) {
  const { components, x, y, depth = 0, renderCount = 0 } = props;
  let { s } = props;
  const { Dot } = components;

  if (Dot == null) {
    return <span style={{ color: 'white' }}>No implementation available</span>;
  }

  if (s <= targetSize) {
    let fn;
    switch (depth) {
      case 1:
        fn = interpolatePurples;
        break;
      case 2:
        fn = interpolateBuPu;
        break;
      default:
        fn = interpolateRdPu;
    }

    // introduce randomness to ensure that repeated runs don't produce the same colors
    const color = fn((renderCount * Math.random()) / 20);
    return <Dot color={color} size={targetSize} x={x - targetSize / 2} y={y - targetSize / 2} />;
  }

  s /= 2;

  return (
    <>
      <SierpinskiTriangle
        components={components}
        depth={1}
        renderCount={renderCount}
        s={s}
        x={x}
        y={y - s / 2}
      />
      <SierpinskiTriangle
        components={components}
        depth={2}
        renderCount={renderCount}
        s={s}
        x={x - s}
        y={y + s / 2}
      />
      <SierpinskiTriangle
        components={components}
        depth={3}
        renderCount={renderCount}
        s={s}
        x={x + s}
        y={y + s / 2}
      />
    </>
  );
}

SierpinskiTriangle.benchmarkType = BenchmarkType.UPDATE;
