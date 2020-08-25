CSS-in-JS benchmark
========
Benchmarks of vairous CSS-in-JS libraries. **[Try it now!]**

```bash
yarn
yarn build

# Benchmark
open index.html

# Bundle size analysis
open dist/report.html
```

![Sample image]

This project is fork of [react-native-web].

&nbsp;

## Notes

These benchmarks are approximations of extreme cases that libraries may
encounter. Their purpose is to provide an early-warning signal for performance
regressions. Each test report includes the mean and standard deviation of the
timings, and approximations of the time spent in scripting (S) and layout (L).

The components used in the render benchmarks are simple enough to be
implemented by multiple UI or style libraries. The benchmark implementations
and the features of the style libraries are _only approximately equivalent in
functionality_.

No benchmark will run for more than 20 seconds.

### Mount deep/wide tree

These cases look at the performance of mounting and rendering large trees of
elements that use static styles.

### Update dynamic styles

This case looks at the performance of repeated style updates to a large mounted
tree. Some libraries choose to inject new styles for each "dynamic style",
whereas others choose to use inline styles. Libraries without built-in support
for dynamic styles (i.e., they rely on user-authored inline styles) are not
included.

&nbsp;

## See Also
- https://github.com/jantimon/css-framework-performance
- https://github.com/A-gambit/CSS-IN-JS-Benchmarks

&nbsp;

--------
*css-in-js-benchmark* is primarily distributed under the terms of both the
[Apache License (Version 2.0)] and the [MIT license]. See [COPYRIGHT] for
details.

[Try it now!]: https://simnalamburt.github.io/css-in-js-benchmark/
[Sample image]: https://raw.githubusercontent.com/simnalamburt/i/master/css-in-js-benchmark/sample.png
[react-native-web]: https://github.com/necolas/react-native-web

[MIT license]: LICENSE-MIT
[Apache License (Version 2.0)]: LICENSE-APACHE
[COPYRIGHT]: COPYRIGHT
