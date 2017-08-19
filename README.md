Benchmark [functor-iterable](https://github.com/xgbuils/functor-iterable) over...

- ramda
- imlazy
- inmutable.js
- native

## Usage

Clone and:

``` bash
npm install
npm run perf
```

## Benchmarks

```
benchmark
    filter
        array
            - small
                - filter-iterable@0.1.3 x 40,110 ops/sec ±0.47% (87 runs sampled)
                - filter-arraylike-iterable@0.1.0 x 38,926 ops/sec ±1.40% (86 runs sampled)
                - imlazy@6.3.1 x 30,172 ops/sec ±2.65% (78 runs sampled)
                - ramda@0.24.1 x 264,787 ops/sec ±1.08% (82 runs sampled)
                - immutable@3.8.1 x 49,500 ops/sec ±2.22% (80 runs sampled)
                - native x 51,196 ops/sec ±0.97% (78 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - filter-iterable@0.1.3 x 1,227 ops/sec ±2.33% (80 runs sampled)
                - filter-arraylike-iterable@0.1.0 x 1,265 ops/sec ±1.85% (82 runs sampled)
                - imlazy@6.3.1 x 1,738 ops/sec ±1.91% (82 runs sampled)
                - ramda@0.24.1 x 7,927 ops/sec ±1.55% (86 runs sampled)
                - immutable@3.8.1 x 1,783 ops/sec ±2.47% (75 runs sampled)
                - native x 1,651 ops/sec ±0.84% (85 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - filter-iterable@0.1.3 x 42.02 ops/sec ±1.47% (52 runs sampled)
                - filter-arraylike-iterable@0.1.0 x 41.96 ops/sec ±0.83% (52 runs sampled)
                - imlazy@6.3.1 x 58.10 ops/sec ±1.62% (68 runs sampled)
                - ramda@0.24.1 x 257 ops/sec ±1.50% (80 runs sampled)
                - immutable@3.8.1 x 49.79 ops/sec ±3.39% (60 runs sampled)
                - native x 38.30 ops/sec ±3.49% (49 runs sampled)
                Fastest is ramda@0.24.1
    multiple filters
        array
            iterable size
                - small
                    - filter-iterable@0.1.3 x 20,517 ops/sec ±1.52% (82 runs sampled)
                    - filter-arraylike-iterable@0.1.0 x 21,085 ops/sec ±0.73% (81 runs sampled)
                    - imlazy@6.3.1 x 6,752 ops/sec ±3.83% (62 runs sampled)
                    - ramda@0.24.1 x 26,866 ops/sec ±2.97% (83 runs sampled)
                    - immutable@3.8.1 x 5,626 ops/sec ±2.48% (78 runs sampled)
                    - native x 3,848 ops/sec ±0.68% (86 runs sampled)
                    Fastest is ramda@0.24.1
                - medium
                    - filter-iterable@0.1.3 x 694 ops/sec ±0.84% (82 runs sampled)
                    - filter-arraylike-iterable@0.1.0 x 692 ops/sec ±1.34% (82 runs sampled)
                    - imlazy@6.3.1 x 762 ops/sec ±2.44% (82 runs sampled)
                    - ramda@0.24.1 x 1,973 ops/sec ±1.16% (86 runs sampled)
                    - immutable@3.8.1 x 209 ops/sec ±1.90% (75 runs sampled)
                    - native x 105 ops/sec ±0.97% (70 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - filter-iterable@0.1.3 x 22.61 ops/sec ±0.38% (40 runs sampled)
                    - filter-arraylike-iterable@0.1.0 x 22.55 ops/sec ±0.13% (39 runs sampled)
                    - imlazy@6.3.1 x 27.08 ops/sec ±0.41% (46 runs sampled)
                    - ramda@0.24.1 x 64.60 ops/sec ±0.12% (62 runs sampled)
                    - immutable@3.8.1 x 6.25 ops/sec ±3.08% (20 runs sampled)
                    - native x 2.78 ops/sec ±0.22% (11 runs sampled)
                    Fastest is ramda@0.24.1
            number of filters
                - few
                    - filter-iterable@0.1.3 x 895 ops/sec ±0.55% (85 runs sampled)
                    - filter-arraylike-iterable@0.1.0 x 887 ops/sec ±1.27% (85 runs sampled)
                    - imlazy@6.3.1 x 1,033 ops/sec ±2.44% (82 runs sampled)
                    - ramda@0.24.1 x 3,393 ops/sec ±1.15% (88 runs sampled)
                    - immutable@3.8.1 x 593 ops/sec ±1.84% (79 runs sampled)
                    - native x 339 ops/sec ±0.86% (80 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - filter-iterable@0.1.3 x 676 ops/sec ±0.65% (83 runs sampled)
                    - filter-arraylike-iterable@0.1.0 x 672 ops/sec ±0.63% (82 runs sampled)
                    - imlazy@6.3.1 x 762 ops/sec ±2.33% (81 runs sampled)
                    - ramda@0.24.1 x 1,996 ops/sec ±0.99% (87 runs sampled)
                    - immutable@3.8.1 x 208 ops/sec ±2.10% (74 runs sampled)
                    - native x 105 ops/sec ±0.71% (70 runs sampled)
                    Fastest is ramda@0.24.1
                - a lot of
                    - filter-iterable@0.1.3 x 426 ops/sec ±1.47% (80 runs sampled)
                    - filter-arraylike-iterable@0.1.0 x 423 ops/sec ±1.35% (80 runs sampled)
                    - imlazy@6.3.1 x 366 ops/sec ±2.01% (76 runs sampled)
                    - ramda@0.24.1 x 836 ops/sec ±0.52% (84 runs sampled)
                    - immutable@3.8.1 x 66.03 ops/sec ±1.62% (62 runs sampled)
                    - native x 31.53 ops/sec ±0.71% (52 runs sampled)
                    Fastest is ramda@0.24.1
```
