## Name

Sunflower conjecture

## Summary

Any sufficiently large uniform family contains a sunflower -- the conjecture asks for a bound of C^k without logarithmic factors.

## Type

open-conjecture

## Area

Combinatorics

## Mathematical Statement

There exists a constant $C$ such that any family of more than $C^k$ sets, each of size $k$, contains a sunflower of size 3 (i.e., three sets whose pairwise intersections are all equal).

## Source

- Erdos, P. and Rado, R. "Intersection theorems for systems of sets." *J. London Math. Soc.* 35 (1960), 85--90
- Alweiss, R., Lovett, S., Wu, K., and Zhang, J. "Improved bounds for the sunflower lemma." *Annals of Mathematics* 194 (2021), 795--815

## Status

The sunflower lemma gives a bound of $(C \cdot k!)^{1}$ (Erdos-Rado) improved to $(C \log k)^k$ (Alweiss-Lovett-Wu-Zhang 2019). Removing the $\log k$ factor is open.

## Why this is a good formalization target

Mathlib has Finset and set family infrastructure. The sunflower lemma (weaker bound) has been formalized in the LeanCamCombi project. Stating the conjecture is straightforward.

## Mathlib Infrastructure

- `Finset` -- in Mathlib
- `Finset.card` -- in Mathlib
- Sunflower definition -- needs definition (not in Mathlib core)

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open problem)
- **Key steps:** Unknown
- **Biggest obstacle:** This is an open problem

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
