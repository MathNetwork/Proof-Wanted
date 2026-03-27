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


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `Finset`, `Finset.filter`, `Finset.card`, `Finset.Nonempty`: all in `Mathlib.Data.Finset.Basic`. Present.
- `Finset.inter` and `(A ∩ B).Nonempty`: in `Mathlib.Data.Finset.Basic`. Present.
- `IsDownwardClosed`: NOT in Mathlib. Defined in Statement.lean (3 lines). Adequate.
- `IsIntersecting`: NOT in Mathlib as a standalone definition. Mathlib has `Finset.IsIntersecting` in the Erdos-Ko-Rado file (`Mathlib.Combinatorics.SetFamily.Intersecting`), but it is defined differently (as a predicate on a set family with a different signature). The definition here is equivalent for our purposes.

The statement says: there exists x such that every intersecting subfamily G of F has |G| at most |{A in F : x in A}|. This correctly captures Chvatal's conjecture.

## 2. Proof strategy

This is an open problem. Known for rank at most 3.

The rank-1 case is trivial (a downward-closed family of singletons and the empty set). The rank-2 case follows from the Erdos-Ko-Rado theorem, which is in Mathlib (`Mathlib.Combinatorics.SetFamily.HarrisKleitman` and related files). The rank-3 case (Snevily 1994) uses a shifting argument.

A formalization of the rank-2 case would use the existing EKR infrastructure.

## 3. Estimated proof length

Statement: 20 lines (done).
Rank-1 case: 10-20 lines.
Rank-2 case: 100-300 lines, building on EKR.
Rank-3 case: 500-1000 lines (shifting argument).
General case: open.

## 4. Dependencies not in Mathlib

- `IsDownwardClosed` definition: 3 lines, in Statement.lean.
- `IsIntersecting` definition: 3 lines, in Statement.lean. Mathlib's `Finset.IsIntersecting` exists but has a different interface.
- For rank-3 proof: shifting/compression operators on set families. Mathlib has some compression lemmas (`Mathlib.Combinatorics.SetFamily.Compression`) but not the full shifting framework.

## 5. Risks and blockers

The statement quantifies over all intersecting subfamilies G, requiring G to be a Finset of Finsets. This is fine computationally but creates nested Finset type-checking overhead. For large proofs, the decidability bookkeeping could be tedious.

## 6. Verdict

**Feasible with work** (for partial results). The statement compiles. Partial results for small rank can use existing EKR infrastructure. The general conjecture is open.
