## Name

Trace classification of SL(2,ℝ) elements

## Type

known-theorem

## Area

Hyperbolic Geometry

## Mathematical Statement

Every non-identity element $g \in \mathrm{SL}(2,\mathbb{R})$ is classified by its trace:

- **Elliptic** ($|\mathrm{tr}(g)| < 2$): $g$ has a unique fixed point in $\mathbb{H}$.
- **Parabolic** ($|\mathrm{tr}(g)| = 2$, $g \neq \pm I$): $g$ has a unique fixed point on $\partial\mathbb{H}$ and none in $\mathbb{H}$.
- **Hyperbolic** ($|\mathrm{tr}(g)| > 2$): $g$ has exactly two fixed points on $\partial\mathbb{H}$ and none in $\mathbb{H}$.

## Source

- Katok, S. *Fuchsian Groups* (Chicago Lectures in Mathematics), Chapter 2
- Beardon, A.F. *The Geometry of Discrete Groups*, §4.3

## Status

Standard result in hyperbolic geometry. No known formalization in Lean/Mathlib.

## Why this is a good formalization target

The classification is elementary and self-contained. All infrastructure (SL(2,ℝ), upper half-plane, Möbius action) exists in Mathlib.

## Mathlib Infrastructure

- ✅ `Matrix.SpecialLinearGroup (Fin 2) ℝ` — SL(2,ℝ)
- ✅ `UpperHalfPlane` — the type ℍ
- ✅ `Matrix.trace` — trace of a matrix
- ✅ Möbius action `g • z` via `Mathlib.Analysis.Complex.UpperHalfPlane.MoebiusAction`
- ⚠️ Boundary ∂ℍ — not directly modeled; parabolic/hyperbolic fixed points live on ℝ ∪ {∞}

## Proof Complexity Estimate

- **Estimated lines:** 200–400
- **Key steps:** Solve $gz = z$ as quadratic in $z$, analyze discriminant $\mathrm{tr}^2 - 4$
- **Biggest obstacle:** Working with the extended real line / projective line for boundary fixed points

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
