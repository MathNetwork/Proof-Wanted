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


## 1. Statement formalizability

The statement compiles, but `blockSensitivity` is defined as `sorry`. This is because block sensitivity requires quantifying over families of disjoint subsets of coordinates, which is more involved than pointwise sensitivity.

Definitions needed:
- `Fin n -> Bool`: Boolean functions. In Lean core.
- `Function.update`: `Mathlib.Logic.Function.Basic`. Present. Used for `flipBit`.
- `Finset.univ`, `Finset.filter`, `Finset.card`: in Mathlib. Present.
- `Finset.sup`: `Mathlib.Data.Finset.Lattice.Fold`. Present. Used for `sensitivity`.
- `Fintype (Fin n -> Bool)`: `Mathlib.Data.Fintype.Pi`. Present.
- `blockSensitivity`: NOT defined. Requires quantifying over maximal families of disjoint blocks B_1, ..., B_k such that flipping all bits in B_i changes f(x). This needs ~15-20 lines to define properly.

A proper definition of `blockSensitivity`:
```
For each x, bs_at(f, x) = max |B| where B is a family of disjoint subsets of Fin n
such that for each S in B, flipping all bits in S changes f(x).
Then bs(f) = max_x bs_at(f, x).
```
Defining "flip all bits in a block" needs a fold over a Finset, using `Finset.foldl` or similar.

## 2. Proof strategy

This is an open problem. The tight quadratic bound bs(f) <= s(f)^2 is conjectured but not proven.

Huang's result (bs(f) <= 2*s(f)^4) has been formalized in several proof assistants. His proof uses the spectral method: construct a matrix with specific eigenvalue properties on the hypercube graph. Lean formalizations exist but are not in Mathlib.

## 3. Estimated proof length

Defining blockSensitivity properly: 20-30 lines.
Huang's quartic bound: estimated 500-800 lines. Uses spectral graph theory.
The tight quadratic bound: open.

## 4. Dependencies not in Mathlib

- `blockSensitivity` definition: needs ~20 lines.
- For Huang's proof: eigenvalue bounds for adjacency matrices. Mathlib has `Matrix.eigenvalue` and spectral theory, but connecting it to the hypercube graph requires setup.
- Hypercube graph and Cauchy interlacing: not in Mathlib.

## 5. Risks and blockers

The `blockSensitivity` definition is the main immediate issue. It requires quantifying over set families with a disjointness constraint and a "flipping changes output" condition. This is expressible but needs care to get the Finset bookkeeping right.

The `Finset.sup` in the `sensitivity` definition gives 0 for the empty type `Fin 0 -> Bool`, which is technically wrong (sensitivity should be 0 for constant functions, which is correct, but the sup of an empty finset defaults to bot = 0 for `ℕ`, so this works out).

## 6. Verdict

**Feasible with work** (for the statement). Needs ~20 lines to properly define `blockSensitivity`. Huang's quartic bound is feasible (~500-800 lines). The tight quadratic bound is open.
