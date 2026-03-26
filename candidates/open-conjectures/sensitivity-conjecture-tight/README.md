## Name

Sensitivity conjecture (tight bound)

## Summary

Block sensitivity of Boolean functions is at most the square of sensitivity.

## Type

open-conjecture

## Area

Combinatorics / Complexity Theory

## Mathematical Statement

For every Boolean function $f : \{0,1\}^n \to \{0,1\}$,

$$\mathrm{bs}(f) \leq \mathrm{s}(f)^2$$

where $\mathrm{s}(f)$ is the sensitivity and $\mathrm{bs}(f)$ is the block sensitivity.

## Source

- Huang, H. "Induced subgraphs of hypercubes and a proof of the sensitivity conjecture." *Annals of Mathematics* 190 (2019), 949--955
- Nisan, N. and Szegedy, M. "On the degree of Boolean functions as real polynomials." *Computational Complexity* 4 (1994), 301--313

## Status

Huang (2019) proved $\mathrm{bs}(f) \leq 2\mathrm{s}(f)^4$, resolving the qualitative sensitivity conjecture. The tight quadratic bound $\mathrm{bs}(f) \leq \mathrm{s}(f)^2$ remains open.

## Why this is a good formalization target

Definitions of sensitivity and block sensitivity are elementary (bit-flipping, counting). Huang's proof is short (2 pages) and already formalized in various systems. The tight bound is a natural follow-up.

## Mathlib Infrastructure

- `Fin n -> Bool` -- Boolean functions
- `Finset.filter`, `Finset.card` -- counting
- `Function.update` -- bit flipping
- Block sensitivity definition -- needs definition

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open problem)
- **Key steps:** Unknown
- **Biggest obstacle:** This is an open problem

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
