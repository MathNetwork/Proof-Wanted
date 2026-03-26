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
