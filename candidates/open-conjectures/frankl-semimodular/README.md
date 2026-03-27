## Name

Frankl's conjecture for finite upper semimodular lattices

## Type

open-conjecture

## Area

Combinatorics / Lattice Theory

## Mathematical Statement

**Frankl's union-closed conjecture** (lattice-theoretic form): In every finite lattice, there exists a join-irreducible element $j$ such that $j$ is above at most half the elements:

$$2 \cdot |\{x \in L : j \leq x\}| \leq |L|$$

We state the conjecture restricted to **upper semimodular lattices**: lattices satisfying $a \wedge b \lessdot a \implies b \lessdot a \vee b$.

## Source

- Frankl, P. (1979, unpublished; first appears in Rival, I. *Graphs and Order*, 1985)
- Abe, T. and Nakano, B. "Frankl's conjecture is true for modular lattices." *Graphs and Combinatorics* 14 (1998), 305–311
- Gilmer, J. "A constant lower bound for the union-closed sets conjecture." *arXiv:2211.09055* (2022)

## Status

Open in general. Known for:
- Distributive lattices (Abe, 2000)
- Modular lattices (Abe–Nakano, 1998)
- Lower semimodular lattices (Reinhold, 2000)
- **Upper semimodular: OPEN**

Gilmer (2022) proved a constant fraction ($\approx 0.01$) lower bound for general union-closed families.

## Why this is a good formalization target

Tests lattice-theoretic infrastructure in Mathlib. Upper semimodularity is well-defined in Mathlib. A proof for this case would be a meaningful partial result toward the full conjecture.

## Mathlib Infrastructure

- ✅ `IsUpperModularLattice` — upper semimodular lattice class (`Mathlib.Order.ModularLattice`)
- ✅ `SupIrred` — sup-irreducible elements (`Mathlib.Order.Irreducible`)
- ✅ `CovBy` (`⋖`) — covering relation
- ✅ `Finset.univ.filter` — filtering finite sets
- ✅ `Fintype.card` — cardinality of finite types

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open problem)
- **Key steps:** Unknown
- **Biggest obstacle:** This is an open problem for upper semimodular lattices

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `Lattice`, `BoundedOrder`: Lean core / `Mathlib.Order.Lattice`. Present.
- `IsUpperModularLattice`: `Mathlib.Order.ModularLattice`. Present. Uses `CovBy` (covering relation).
- `SupIrred` (sup-irreducible = join-irreducible): `Mathlib.Order.Irreducible`. Present.
- `Finset.univ.filter`, `Finset.card`, `Fintype.card`: `Mathlib.Data.Fintype.Card`, `Mathlib.Data.Finset.Basic`. Present.
- `DecidableEq L`, `DecidableRel (fun (a b : L) => a <= b)`: needed for `Finset.filter`. These are typeclass hypotheses in the statement.

All definitions are in Mathlib. The statement is clean.

## 2. Proof strategy

This is an open problem for upper semimodular lattices.

Known for modular lattices (Abe-Nakano 1998) and lower semimodular lattices (Reinhold 2000). The modular lattice proof uses the Jordan-Holder theorem (which gives a composition series) and counts join-irreducibles by level.

For modular lattices in Lean:
Step 1: Use `IsModularLattice` (subclass of `IsUpperModularLattice`). Present in Mathlib.
Step 2: Establish a composition series. `Mathlib.Order.JordanHolder` exists.
Step 3: Count join-irreducibles at each level. Needs combinatorial argument.

## 3. Estimated proof length

Statement: 10 lines (done).
Modular lattice case: estimated 500-1000 lines.
Upper semimodular case: open.

## 4. Dependencies not in Mathlib

For the modular case:
- Jordan-Holder theorem: `Mathlib.Order.JordanHolder`. Present.
- Counting join-irreducibles per level: not directly available. Needs ~50-100 lines of lemmas about `SupIrred` elements in modular lattices.

## 5. Risks and blockers

The `DecidableRel` hypothesis is needed for `Finset.filter` but may be annoying to carry through proofs. An alternative approach using `Finset.filter` with `Classical.dec` would avoid this.

The open status for upper semimodular lattices means no proof strategy exists for the full statement.

## 6. Verdict

**Feasible with work** (for the modular lattice special case). The statement compiles cleanly using existing Mathlib API. The upper semimodular case is open.
