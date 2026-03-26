# Formalization Assessment: Chvatal's conjecture

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
