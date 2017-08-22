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
                - filter-arraylike-iterable@0.1.0 x 37,270 ops/sec ±1.60% (86 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 39,222 ops/sec ±1.78% (85 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 38,373 ops/sec ±2.72% (86 runs sampled)
                - filter-arraylike-iterable@0.1.3 x 38,591 ops/sec ±1.60% (87 runs sampled)
                - filter-iterable@0.1.3 x 36,623 ops/sec ±1.64% (86 runs sampled)
                - imlazy@6.3.1 x 30,574 ops/sec ±2.91% (77 runs sampled)
                - ramda@0.24.1 x 322,238 ops/sec ±0.53% (85 runs sampled)
                - immutable@3.8.1 x 50,636 ops/sec ±2.08% (79 runs sampled)
                - native x 51,280 ops/sec ±0.55% (86 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - filter-arraylike-iterable@0.1.0 x 1,224 ops/sec ±2.22% (84 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 1,318 ops/sec ±2.11% (86 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 1,322 ops/sec ±1.32% (86 runs sampled)
                - filter-arraylike-iterable@0.1.3 x 1,318 ops/sec ±1.94% (86 runs sampled)
                - filter-iterable@0.1.3 x 1,206 ops/sec ±2.91% (83 runs sampled)
                - imlazy@6.3.1 x 1,768 ops/sec ±2.22% (85 runs sampled)
                - ramda@0.24.1 x 13,449 ops/sec ±2.37% (87 runs sampled)
                - immutable@3.8.1 x 2,099 ops/sec ±2.63% (82 runs sampled)
                - native x 1,667 ops/sec ±0.68% (85 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - filter-arraylike-iterable@0.1.0 x 40.51 ops/sec ±0.09% (50 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 42.51 ops/sec ±0.09% (53 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 41.41 ops/sec ±1.71% (52 runs sampled)
                - filter-arraylike-iterable@0.1.3 x 41.99 ops/sec ±2.32% (53 runs sampled)
                - filter-iterable@0.1.3 x 39.81 ops/sec ±1.85% (50 runs sampled)
                - imlazy@6.3.1 x 58.72 ops/sec ±1.64% (68 runs sampled)
                - ramda@0.24.1 x 427 ops/sec ±2.12% (79 runs sampled)
                - immutable@3.8.1 x 58.27 ops/sec ±3.58% (57 runs sampled)
                - native x 40.92 ops/sec ±1.07% (51 runs sampled)
                Fastest is ramda@0.24.1
    multiple filters
        array
            iterable size
                - small
                    - filter-arraylike-iterable@0.1.0 x 20,433 ops/sec ±0.63% (82 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 22,236 ops/sec ±1.44% (84 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 24,247 ops/sec ±1.92% (82 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 23,688 ops/sec ±1.43% (84 runs sampled)
                    - filter-iterable@0.1.3 x 19,730 ops/sec ±1.97% (80 runs sampled)
                    - imlazy@6.3.1 x 6,277 ops/sec ±3.69% (61 runs sampled)
                    - ramda@0.24.1 x 28,874 ops/sec ±0.57% (82 runs sampled)
                    - immutable@3.8.1 x 5,708 ops/sec ±2.59% (76 runs sampled)
                    - native x 3,797 ops/sec ±1.08% (84 runs sampled)
                    Fastest is ramda@0.24.1
                - medium
                    - filter-arraylike-iterable@0.1.0 x 660 ops/sec ±2.12% (81 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 749 ops/sec ±1.16% (81 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 731 ops/sec ±1.74% (81 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 752 ops/sec ±1.48% (82 runs sampled)
                    - filter-iterable@0.1.3 x 1,039 ops/sec ±1.53% (86 runs sampled)
                    - imlazy@6.3.1 x 1,229 ops/sec ±1.82% (84 runs sampled)
                    - ramda@0.24.1 x 3,984 ops/sec ±0.78% (90 runs sampled)
                    - immutable@3.8.1 x 340 ops/sec ±2.43% (82 runs sampled)
                    - native x 174 ops/sec ±0.69% (83 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - filter-arraylike-iterable@0.1.0 x 35.03 ops/sec ±0.21% (59 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 39.67 ops/sec ±0.23% (50 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 39.02 ops/sec ±0.18% (64 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 39.45 ops/sec ±0.47% (51 runs sampled)
                    - filter-iterable@0.1.3 x 35.04 ops/sec ±0.21% (59 runs sampled)
                    - imlazy@6.3.1 x 44.53 ops/sec ±0.18% (56 runs sampled)
                    - ramda@0.24.1 x 136 ops/sec ±1.50% (77 runs sampled)
                    - immutable@3.8.1 x 10.52 ops/sec ±3.00% (30 runs sampled)
                    - native x 4.59 ops/sec ±1.96% (16 runs sampled)
                    Fastest is ramda@0.24.1
            number of filters
                - few
                    - filter-arraylike-iterable@0.1.0 x 1,352 ops/sec ±0.73% (92 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 1,422 ops/sec ±1.80% (90 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 1,432 ops/sec ±1.33% (90 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 1,439 ops/sec ±1.63% (87 runs sampled)
                    - filter-iterable@0.1.3 x 1,336 ops/sec ±1.50% (87 runs sampled)
                    - imlazy@6.3.1 x 1,673 ops/sec ±2.42% (88 runs sampled)
                    - ramda@0.24.1 x 7,778 ops/sec ±2.08% (86 runs sampled)
                    - immutable@3.8.1 x 969 ops/sec ±2.38% (84 runs sampled)
                    - native x 553 ops/sec ±0.78% (88 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - filter-arraylike-iterable@0.1.0 x 1,092 ops/sec ±0.81% (87 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 1,196 ops/sec ±1.00% (87 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 1,200 ops/sec ±1.68% (89 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 1,144 ops/sec ±2.70% (84 runs sampled)
                    - filter-iterable@0.1.3 x 1,057 ops/sec ±1.69% (85 runs sampled)
                    - imlazy@6.3.1 x 1,170 ops/sec ±2.78% (82 runs sampled)
                    - ramda@0.24.1 x 4,107 ops/sec ±1.38% (89 runs sampled)
                    - immutable@3.8.1 x 345 ops/sec ±2.26% (84 runs sampled)
                    - native x 171 ops/sec ±1.71% (83 runs sampled)
                    Fastest is ramda@0.24.1
                - a lot of
                    - filter-arraylike-iterable@0.1.0 x 427 ops/sec ±0.77% (85 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 495 ops/sec ±2.17% (83 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 518 ops/sec ±1.27% (86 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 502 ops/sec ±1.60% (83 runs sampled)
                    - filter-iterable@0.1.3 x 401 ops/sec ±1.70% (81 runs sampled)
                    - imlazy@6.3.1 x 319 ops/sec ±2.16% (77 runs sampled)
                    - ramda@0.24.1 x 853 ops/sec ±2.09% (86 runs sampled)
                    - immutable@3.8.1 x 45.30 ops/sec ±2.73% (58 runs sampled)
                    - native x 27.62 ops/sec ±1.68% (48 runs sampled)
                    Fastest is ramda@0.24.1
```

### Node 8

```
benchmark
    filter
        array
            - small
                - filter-arraylike-iterable@0.1.0 x 219,946 ops/sec ±1.42% (92 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 460,400 ops/sec ±1.08% (90 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 496,650 ops/sec ±1.46% (91 runs sampled)
                - filter-arraylike-iterable@0.1.3 x 417,086 ops/sec ±2.12% (89 runs sampled)
                - filter-iterable@0.1.3 x 205,487 ops/sec ±2.03% (82 runs sampled)
                - imlazy@6.3.1 x 153,422 ops/sec ±3.99% (79 runs sampled)
                - ramda@0.24.1 x 1,088,027 ops/sec ±0.64% (95 runs sampled)
                - immutable@3.8.1 x 96,607 ops/sec ±2.77% (84 runs sampled)
                - native x 858,271 ops/sec ±0.85% (96 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - filter-arraylike-iterable@0.1.0 x 6,592 ops/sec ±0.74% (87 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 12,304 ops/sec ±1.40% (90 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 12,424 ops/sec ±1.64% (85 runs sampled)
                - filter-arraylike-iterable@0.1.3 x 12,095 ops/sec ±2.09% (91 runs sampled)
                - filter-iterable@0.1.3 x 6,719 ops/sec ±4.49% (89 runs sampled)
                - imlazy@6.3.1 x 11,515 ops/sec ±3.84% (87 runs sampled)
                - ramda@0.24.1 x 40,477 ops/sec ±1.40% (92 runs sampled)
                - immutable@3.8.1 x 3,727 ops/sec ±2.27% (85 runs sampled)
                - native x 30,721 ops/sec ±0.48% (89 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - filter-arraylike-iterable@0.1.0 x 210 ops/sec ±1.17% (79 runs sampled)
                - filter-arraylike-iterable@0.1.1 x 390 ops/sec ±1.32% (82 runs sampled)
                - filter-arraylike-iterable@0.1.2 x 411 ops/sec ±1.55% (87 runs sampled)
                - filter-arraylike-iterable@0.1.3 x 414 ops/sec ±1.78% (84 runs sampled)
                - filter-iterable@0.1.3 x 219 ops/sec ±2.56% (72 runs sampled)
                - imlazy@6.3.1 x 439 ops/sec ±3.22% (86 runs sampled)
                - ramda@0.24.1 x 1,249 ops/sec ±1.03% (91 runs sampled)
                - immutable@3.8.1 x 107 ops/sec ±2.10% (75 runs sampled)
                - native x 928 ops/sec ±1.61% (89 runs sampled)
                Fastest is ramda@0.24.1
    multiple filters
        array
            iterable size
                - small
                    - filter-arraylike-iterable@0.1.0 x 72,778 ops/sec ±1.67% (90 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 110,517 ops/sec ±1.58% (89 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 141,953 ops/sec ±1.71% (87 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 106,590 ops/sec ±1.63% (87 runs sampled)
                    - filter-iterable@0.1.3 x 73,768 ops/sec ±2.25% (87 runs sampled)
                    - imlazy@6.3.1 x 19,629 ops/sec ±3.19% (79 runs sampled)
                    - ramda@0.24.1 x 72,490 ops/sec ±0.74% (86 runs sampled)
                    - immutable@3.8.1 x 9,899 ops/sec ±3.14% (82 runs sampled)
                    - native x 115,856 ops/sec ±0.94% (88 runs sampled)
                    Fastest is filter-arraylike-iterable@0.1.2
                - medium
                    - filter-arraylike-iterable@0.1.0 x 2,425 ops/sec ±1.26% (87 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 4,279 ops/sec ±0.97% (92 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 4,540 ops/sec ±2.30% (86 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 4,776 ops/sec ±1.32% (93 runs sampled)
                    - filter-iterable@0.1.3 x 2,486 ops/sec ±2.16% (88 runs sampled)
                    - imlazy@6.3.1 x 2,695 ops/sec ±3.30% (86 runs sampled)
                    - ramda@0.24.1 x 4,871 ops/sec ±2.82% (87 runs sampled)
                    - immutable@3.8.1 x 372 ops/sec ±2.39% (74 runs sampled)
                    - native x 3,382 ops/sec ±2.14% (91 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - filter-arraylike-iterable@0.1.0 x 81.84 ops/sec ±0.34% (68 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 146 ops/sec ±0.73% (80 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 152 ops/sec ±0.41% (82 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 154 ops/sec ±0.42% (83 runs sampled)
                    - filter-iterable@0.1.3 x 82.06 ops/sec ±2.36% (68 runs sampled)
                    - imlazy@6.3.1 x 99.94 ops/sec ±1.41% (70 runs sampled)
                    - ramda@0.24.1 x 177 ops/sec ±1.19% (79 runs sampled)
                    - immutable@3.8.1 x 11.61 ops/sec ±0.87% (32 runs sampled)
                    - native x 110 ops/sec ±0.79% (78 runs sampled)
                    Fastest is ramda@0.24.1
            number of filters
                - few
                    - filter-arraylike-iterable@0.1.0 x 4,287 ops/sec ±0.65% (93 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 7,895 ops/sec ±0.56% (95 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 7,645 ops/sec ±1.52% (89 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 7,851 ops/sec ±0.84% (91 runs sampled)
                    - filter-iterable@0.1.3 x 4,205 ops/sec ±2.35% (89 runs sampled)
                    - imlazy@6.3.1 x 5,203 ops/sec ±5.10% (84 runs sampled)
                    - ramda@0.24.1 x 12,760 ops/sec ±1.10% (89 runs sampled)
                    - immutable@3.8.1 x 1,112 ops/sec ±2.31% (87 runs sampled)
                    - native x 9,434 ops/sec ±0.65% (89 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - filter-arraylike-iterable@0.1.0 x 2,461 ops/sec ±1.89% (87 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 4,687 ops/sec ±1.62% (92 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 4,808 ops/sec ±1.87% (93 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 4,827 ops/sec ±1.33% (94 runs sampled)
                    - filter-iterable@0.1.3 x 2,535 ops/sec ±2.17% (88 runs sampled)
                    - imlazy@6.3.1 x 2,755 ops/sec ±3.33% (86 runs sampled)
                    - ramda@0.24.1 x 4,423 ops/sec ±0.76% (89 runs sampled)
                    - immutable@3.8.1 x 364 ops/sec ±2.83% (82 runs sampled)
                    - native x 3,303 ops/sec ±1.39% (89 runs sampled)
                    Fastest is filter-arraylike-iterable@0.1.3
                - a lot of
                    - filter-arraylike-iterable@0.1.0 x 670 ops/sec ±0.99% (88 runs sampled)
                    - filter-arraylike-iterable@0.1.1 x 1,230 ops/sec ±0.95% (91 runs sampled)
                    - filter-arraylike-iterable@0.1.2 x 1,283 ops/sec ±0.78% (93 runs sampled)
                    - filter-arraylike-iterable@0.1.3 x 1,252 ops/sec ±1.68% (90 runs sampled)
                    - filter-iterable@0.1.3 x 659 ops/sec ±1.43% (87 runs sampled)
                    - imlazy@6.3.1 x 546 ops/sec ±2.09% (81 runs sampled)
                    - ramda@0.24.1 x 826 ops/sec ±0.96% (86 runs sampled)
                    - immutable@3.8.1 x 63.81 ops/sec ±2.95% (65 runs sampled)
                    - native x 592 ops/sec ±0.82% (85 runs sampled)
                    Fastest is filter-arraylike-iterable@0.1.2
```