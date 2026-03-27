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


## 1. Statement formalizability

The statement compiles. Uses a custom `Magma'` class with a binary operation `op`. No Mathlib dependencies needed.

- `Magma'`: defined in Statement.lean. 3 lines.
- Individual equations (Equation46, Equation387, Equation4512): defined in Statement.lean. 2 lines each.
- Implications are universal statements over all types with a Magma' instance.

The equational_theories project at `github.com/leanprover-community/equational_theories` already has thousands of these equations and implications in Lean 4. The definitions here are compatible with that project's conventions.

## 2. Proof strategy

Each implication is a separate small problem:
- Positive implications (Eq A implies Eq B): prove by equational reasoning, typically 5-20 lines of rewriting.
- Negative implications (Eq A does not imply Eq B): construct a finite counterexample magma (a lookup table on `Fin n`), typically 5-10 lines.

The equational_theories project has resolved most of the ~4000x4000 implication matrix. Remaining open cases require either clever equational reasoning or exhaustive model search.

## 3. Estimated proof length

Per implication: 5-50 lines.
The main overhead is finding the right proof or counterexample, not the formalization itself.

## 4. Dependencies not in Mathlib

None beyond the `Magma'` class. The equational_theories project provides all the infrastructure.

## 5. Risks and blockers

The placeholder equations (46, 387) were chosen without checking whether their implication status is actually open. The equational_theories project dashboard should be consulted to pick genuinely undecided pairs.

The `Magma'` class defined here duplicates the one in the equational_theories project. For contribution to that project, their definitions should be used instead.

## 6. Verdict

**Ready**. Each individual implication is a self-contained problem. The infrastructure is minimal. The equational_theories project is the right venue for contributions, not this repo.
