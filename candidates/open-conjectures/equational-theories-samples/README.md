## Name

Equational theories of magmas (sample implications)

## Summary

Specific undecided implications between equational theories of magmas from the community project.

## Type

open-conjecture

## Area

Universal Algebra

## Mathematical Statement

The [equational_theories](https://github.com/leanprover-community/equational_theories) project catalogues thousands of equational laws for magmas (types with a single binary operation) and maps their logical relationships. Many implications remain undecided: given two equations, it is unknown whether every magma satisfying the first must also satisfy the second.

Sample equations:
- Equation 46: $x \cdot (y \cdot x) = y$
- Equation 387: $x \cdot y = (y \cdot x) \cdot x$
- Equation 4512: $x \cdot (y \cdot z) = (x \cdot y) \cdot z$ (associativity)

## Source

- https://github.com/leanprover-community/equational_theories
- Knuth, D.E. and Bendix, P.B. "Simple word problems in universal algebras." *Computational Problems in Abstract Algebra* (1970), 263--297

## Status

Thousands of implications resolved by the community. Many remain open. See the project dashboard for current status.

## Why this is a good formalization target

Already a Lean 4 project. Each implication is a self-contained problem. Many can be resolved by finding finite counterexample models or short equational proofs.

## Mathlib Infrastructure

- Basic type theory -- in Lean core
- No Mathlib dependencies needed for the statements

## Proof Complexity Estimate

- **Estimated lines:** 5-50 per implication
- **Key steps:** Either find a counterexample magma or prove the implication by equational reasoning
- **Biggest obstacle:** Search space for counterexamples; automated reasoning tools

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
