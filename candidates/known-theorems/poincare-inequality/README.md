## Name

Poincaré inequality (slab version)

## Type

known-theorem

## Area

PDE / Functional Analysis

## Mathematical Statement

Let $\Omega = \{x \in \mathbb{R}^n : a < x_1 < b\}$ be a slab. For any smooth compactly supported function $u$ with support in $\Omega$:

$$\int_{\mathbb{R}^n} |u|^2 \, dx \leq (b-a)^2 \int_{\mathbb{R}^n} |\nabla u|^2 \, dx$$

The sharp constant is $(b-a)^2/\pi^2$ but $(b-a)^2$ is a valid (non-sharp) bound.

## Source

- Poincaré, H. "Sur les équations aux dérivées partielles de la physique mathématique." *Amer. J. Math.* 12 (1890)
- Evans, L.C. *Partial Differential Equations*, §5.6
- Brezis, H. *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, Corollary 9.19

## Status

Classical inequality. Not formalized in Lean. The Gagliardo-Nirenberg-Sobolev inequality IS in Mathlib; the Poincaré inequality is a different (simpler) result.

## Why this is a good formalization target

Foundation of elliptic PDE theory. The slab version has an elementary proof by the fundamental theorem of calculus + Cauchy-Schwarz. Avoids Sobolev space theory entirely.

## Mathlib Infrastructure

- ✅ `ContDiff ℝ 1 u` — C¹ smoothness
- ✅ `HasCompactSupport u` — compact support
- ✅ `fderiv ℝ u x` — Fréchet derivative
- ✅ `EuclideanSpace.proj i x` — coordinate extraction
- ✅ `MeasureTheory.volume` — Lebesgue measure
- ✅ Bochner integral `∫ x, ... ∂volume`

## Proof Complexity Estimate

- **Estimated lines:** 200–400
- **Key steps:** Write $u(x) = \int_a^{x_1} \partial_1 u \, dt$; apply Cauchy-Schwarz; integrate
- **Biggest obstacle:** Fubini-type argument to separate coordinates; relating `fderiv` to partial derivatives

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
