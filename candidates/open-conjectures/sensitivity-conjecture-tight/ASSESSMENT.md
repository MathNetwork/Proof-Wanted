# Formalization Assessment: Sensitivity conjecture (tight bound)

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
