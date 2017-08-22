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

### Node 6
```
benchmark
    filter
        array
            - small
                - filter-arraylike-iterable@0.1.0 x 66,255 ops/sec ±0.13% (91 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 69,649 ops/sec ±1.07% (92 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 71,344 ops/sec ±0.76% (91 runs sampled)
                - filter-iterable@0.1.3 x 66,393 ops/sec ±0.73% (93 runs sampled)
                - imlazy@6.3.1 x 48,521 ops/sec ±2.27% (88 runs sampled)
                - ramda@0.24.1 x 431,463 ops/sec ±1.20% (92 runs sampled)
                - immutable@3.8.1 x 80,523 ops/sec ±1.82% (90 runs sampled)
                - native x 81,850 ops/sec ±1.47% (88 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - filter-arraylike-iterable@0.1.0 x 2,193 ops/sec ±0.90% (93 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 2,307 ops/sec ±1.38% (91 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 2,317 ops/sec ±1.14% (93 runs sampled)
                - filter-iterable@0.1.3 x 2,231 ops/sec ±0.88% (93 runs sampled)
                - imlazy@6.3.1 x 2,939 ops/sec ±1.67% (93 runs sampled)
                - ramda@0.24.1 x 13,239 ops/sec ±0.86% (92 runs sampled)
                - immutable@3.8.1 x 2,893 ops/sec ±1.82% (85 runs sampled)
                - native x 2,782 ops/sec ±0.61% (94 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - filter-arraylike-iterable@0.1.0 x 69.86 ops/sec ±0.15% (70 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 74.11 ops/sec ±0.53% (74 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 73.44 ops/sec ±0.64% (73 runs sampled)
                - filter-iterable@0.1.3 x 70.00 ops/sec ±1.03% (70 runs sampled)
                - imlazy@6.3.1 x 95.73 ops/sec ±1.30% (79 runs sampled)
                - ramda@0.24.1 x 421 ops/sec ±0.97% (89 runs sampled)
                - immutable@3.8.1 x 81.72 ops/sec ±2.15% (68 runs sampled)
                - native x 63.65 ops/sec ±1.70% (65 runs sampled)
                Fastest is ramda@0.24.1
    multiple filters
        array
            iterable size
                - small
                    - filter-arraylike-iterable@0.1.0 x 34,424 ops/sec ±1.38% (86 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 38,620 ops/sec ±0.37% (95 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 41,976 ops/sec ±1.47% (89 runs sampled)
                    - filter-iterable@0.1.3 x 34,673 ops/sec ±1.53% (89 runs sampled)
                    - imlazy@6.3.1 x 10,268 ops/sec ±3.31% (71 runs sampled)
                    - ramda@0.24.1 x 38,437 ops/sec ±1.85% (86 runs sampled)
                    - immutable@3.8.1 x 8,733 ops/sec ±2.15% (85 runs sampled)
                    - native x 6,429 ops/sec ±0.62% (93 runs sampled)
                    Fastest is filter-arraylike-iterable@0.1.2
                - medium
                    - filter-arraylike-iterable@0.1.0 x 1,188 ops/sec ±0.33% (91 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 1,301 ops/sec ±0.30% (93 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 1,306 ops/sec ±1.63% (93 runs sampled)
                    - filter-iterable@0.1.3 x 1,176 ops/sec ±1.32% (89 runs sampled)
                    - imlazy@6.3.1 x 1,259 ops/sec ±1.98% (89 runs sampled)
                    - ramda@0.24.1 x 3,179 ops/sec ±0.79% (91 runs sampled)
                    - immutable@3.8.1 x 335 ops/sec ±1.78% (82 runs sampled)
                    - native x 173 ops/sec ±0.17% (85 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - filter-arraylike-iterable@0.1.0 x 36.49 ops/sec ±0.12% (62 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 40.62 ops/sec ±1.32% (53 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 40.74 ops/sec ±0.79% (53 runs sampled)
                    - filter-iterable@0.1.3 x 36.47 ops/sec ±0.85% (62 runs sampled)
                    - imlazy@6.3.1 x 43.90 ops/sec ±1.18% (57 runs sampled)
                    - ramda@0.24.1 x 94.47 ops/sec ±1.86% (67 runs sampled)
                    - immutable@3.8.1 x 9.56 ops/sec ±2.99% (28 runs sampled)
                    - native x 4.28 ops/sec ±3.50% (15 runs sampled)
                    Fastest is ramda@0.24.1
            number of filters
                - few
                    - filter-arraylike-iterable@0.1.0 x 1,385 ops/sec ±2.06% (90 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 1,486 ops/sec ±1.45% (88 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 1,539 ops/sec ±1.04% (93 runs sampled)
                    - filter-iterable@0.1.3 x 1,444 ops/sec ±1.17% (91 runs sampled)
                    - imlazy@6.3.1 x 1,705 ops/sec ±2.16% (92 runs sampled)
                    - ramda@0.24.1 x 5,458 ops/sec ±1.08% (94 runs sampled)
                    - immutable@3.8.1 x 951 ops/sec ±1.57% (84 runs sampled)
                    - native x 565 ops/sec ±0.15% (92 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - filter-arraylike-iterable@0.1.0 x 1,064 ops/sec ±1.80% (88 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 1,221 ops/sec ±1.10% (91 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 1,228 ops/sec ±1.25% (91 runs sampled)
                    - filter-iterable@0.1.3 x 1,166 ops/sec ±0.98% (90 runs sampled)
                    - imlazy@6.3.1 x 1,193 ops/sec ±1.98% (87 runs sampled)
                    - ramda@0.24.1 x 3,225 ops/sec ±0.13% (94 runs sampled)
                    - immutable@3.8.1 x 325 ops/sec ±1.89% (85 runs sampled)
                    - native x 171 ops/sec ±0.74% (84 runs sampled)
                    Fastest is ramda@0.24.1
                - a lot of
                    - filter-arraylike-iterable@0.1.0 x 662 ops/sec ±0.79% (89 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 831 ops/sec ±0.98% (90 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 816 ops/sec ±1.02% (90 runs sampled)
                    - filter-iterable@0.1.3 x 656 ops/sec ±0.95% (89 runs sampled)
                    - imlazy@6.3.1 x 627 ops/sec ±1.90% (85 runs sampled)
                    - ramda@0.24.1 x 1,342 ops/sec ±0.90% (92 runs sampled)
                    - immutable@3.8.1 x 104 ops/sec ±1.78% (73 runs sampled)
                    - native x 50.62 ops/sec ±1.12% (64 runs sampled)
                    Fastest is ramda@0.24.1
```

### Node 8

```
benchmark
    filter
        array
            - small
                - filter-arraylike-iterable@0.1.0 x 143,988 ops/sec ±1.10% (83 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 283,029 ops/sec ±0.72% (89 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 305,711 ops/sec ±2.01% (84 runs sampled)
                - filter-iterable@0.1.3 x 144,372 ops/sec ±2.01% (85 runs sampled)
                - imlazy@6.3.1 x 96,330 ops/sec ±5.32% (75 runs sampled)
                - ramda@0.24.1 x 603,848 ops/sec ±1.36% (86 runs sampled)
                - immutable@3.8.1 x 61,031 ops/sec ±4.40% (82 runs sampled)
                - native x 501,611 ops/sec ±0.67% (87 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - filter-arraylike-iterable@0.1.0 x 4,366 ops/sec ±0.66% (83 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 7,768 ops/sec ±0.62% (88 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 8,027 ops/sec ±1.95% (84 runs sampled)
                - filter-iterable@0.1.3 x 4,362 ops/sec ±3.85% (83 runs sampled)
                - imlazy@6.3.1 x 7,342 ops/sec ±3.66% (84 runs sampled)
                - ramda@0.24.1 x 23,231 ops/sec ±1.23% (87 runs sampled)
                - immutable@3.8.1 x 2,372 ops/sec ±2.65% (82 runs sampled)
                - native x 17,822 ops/sec ±0.74% (85 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - filter-arraylike-iterable@0.1.0 x 140 ops/sec ±1.20% (73 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 253 ops/sec ±0.41% (79 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 257 ops/sec ±1.23% (80 runs sampled)
                - filter-iterable@0.1.3 x 142 ops/sec ±3.22% (74 runs sampled)
                - imlazy@6.3.1 x 255 ops/sec ±3.16% (77 runs sampled)
                - ramda@0.24.1 x 740 ops/sec ±1.50% (84 runs sampled)
                - immutable@3.8.1 x 63.95 ops/sec ±3.29% (62 runs sampled)
                - native x 546 ops/sec ±1.62% (82 runs sampled)
                Fastest is ramda@0.24.1
    multiple filters
        array
            iterable size
                - small
                    - filter-arraylike-iterable@0.1.0 x 43,595 ops/sec ±1.66% (82 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 69,130 ops/sec ±0.61% (89 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 89,489 ops/sec ±2.02% (86 runs sampled)
                    - filter-iterable@0.1.3 x 44,833 ops/sec ±2.18% (82 runs sampled)
                    - imlazy@6.3.1 x 13,268 ops/sec ±5.31% (64 runs sampled)
                    - ramda@0.24.1 x 41,922 ops/sec ±0.45% (85 runs sampled)
                    - immutable@3.8.1 x 6,379 ops/sec ±4.77% (76 runs sampled)
                    - native x 69,532 ops/sec ±1.23% (83 runs sampled)
                    Fastest is filter-arraylike-iterable@0.1.2
                - medium
                    - filter-arraylike-iterable@0.1.0 x 1,511 ops/sec ±1.10% (86 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 2,534 ops/sec ±3.42% (79 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 2,700 ops/sec ±2.53% (84 runs sampled)
                    - filter-iterable@0.1.3 x 1,479 ops/sec ±3.54% (82 runs sampled)
                    - imlazy@6.3.1 x 1,686 ops/sec ±2.96% (83 runs sampled)
                    - ramda@0.24.1 x 3,110 ops/sec ±2.01% (80 runs sampled)
                    - immutable@3.8.1 x 241 ops/sec ±2.90% (76 runs sampled)
                    - native x 2,028 ops/sec ±1.46% (88 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - filter-arraylike-iterable@0.1.0 x 50.10 ops/sec ±0.88% (61 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 86.03 ops/sec ±1.53% (68 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 90.07 ops/sec ±1.04% (71 runs sampled)
                    - filter-iterable@0.1.3 x 50.78 ops/sec ±0.37% (61 runs sampled)
                    - imlazy@6.3.1 x 61.15 ops/sec ±2.27% (59 runs sampled)
                    - ramda@0.24.1 x 108 ops/sec ±1.56% (72 runs sampled)
                    - immutable@3.8.1 x 7.58 ops/sec ±0.43% (23 runs sampled)
                    - native x 67.23 ops/sec ±0.11% (65 runs sampled)
                    Fastest is ramda@0.24.1
            number of filters
                - few
                    - filter-arraylike-iterable@0.1.0 x 2,651 ops/sec ±0.61% (87 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 4,698 ops/sec ±0.74% (88 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 4,925 ops/sec ±0.63% (86 runs sampled)
                    - filter-iterable@0.1.3 x 2,659 ops/sec ±2.67% (86 runs sampled)
                    - imlazy@6.3.1 x 3,297 ops/sec ±4.86% (81 runs sampled)
                    - ramda@0.24.1 x 7,880 ops/sec ±1.33% (84 runs sampled)
                    - immutable@3.8.1 x 728 ops/sec ±2.53% (83 runs sampled)
                    - native x 5,670 ops/sec ±0.58% (87 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - filter-arraylike-iterable@0.1.0 x 1,535 ops/sec ±3.37% (83 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 2,769 ops/sec ±1.58% (88 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 2,829 ops/sec ±1.64% (88 runs sampled)
                    - filter-iterable@0.1.3 x 1,554 ops/sec ±2.23% (86 runs sampled)
                    - imlazy@6.3.1 x 1,677 ops/sec ±3.47% (81 runs sampled)
                    - ramda@0.24.1 x 3,128 ops/sec ±0.64% (87 runs sampled)
                    - immutable@3.8.1 x 252 ops/sec ±3.08% (78 runs sampled)
                    - native x 2,042 ops/sec ±1.53% (87 runs sampled)
                    Fastest is ramda@0.24.1
                - a lot of
                    - filter-arraylike-iterable@0.1.0 x 404 ops/sec ±0.64% (82 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 741 ops/sec ±0.56% (87 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 766 ops/sec ±0.56% (87 runs sampled)
                    - filter-iterable@0.1.3 x 398 ops/sec ±1.80% (84 runs sampled)
                    - imlazy@6.3.1 x 341 ops/sec ±2.55% (76 runs sampled)
                    - ramda@0.24.1 x 528 ops/sec ±0.71% (80 runs sampled)
                    - immutable@3.8.1 x 42.22 ops/sec ±2.63% (53 runs sampled)
                    - native x 358 ops/sec ±1.64% (84 runs sampled)
                    Fastest is filter-arraylike-iterable@0.1.2
```