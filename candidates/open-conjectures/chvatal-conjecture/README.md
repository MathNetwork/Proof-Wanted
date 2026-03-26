## Name

Chvatal's conjecture

## Summary

In any ideal (downward-closed) family, the largest intersecting subfamily consists of all sets containing some fixed element.

## Type

open-conjecture

## Area

Combinatorics

## Mathematical Statement

Let $\mathcal{F}$ be a downward-closed (ideal) family of finite sets. Then the largest intersecting subfamily of $\mathcal{F}$ is a star: there exists an element $x$ such that the maximum size of an intersecting subfamily equals $|\{A \in \mathcal{F} : x \in A\}|$.

## Source

- Chvatal, V. "Intersecting families of edges in hypergraphs having the hereditary property." *Hypergraph Seminar* (1974), 61--66
- Borg, P. "The Chvatal conjecture." Chapter in *Horizons of Combinatorics*, Springer, 2008

## Status

Known for rank at most 3 (Chvatal 1974, Snevily 1994). Open in general. Natural generalization of the Erdos-Ko-Rado theorem (which is in Mathlib).

## Why this is a good formalization target

Erdos-Ko-Rado is already in Mathlib. This conjecture generalizes it to ideal families and tests Lean's ability to handle set-family combinatorics.

## Mathlib Infrastructure

- `Finset` -- in Mathlib
- `Finset.filter` -- in Mathlib
- Erdos-Ko-Rado theorem -- in Mathlib
- Downward-closed families -- needs definition

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open problem)
- **Key steps:** Unknown
- **Biggest obstacle:** This is an open problem

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
