## Name

Coarea formula (codimension 1)

## Type

known-theorem

## Area

Geometric Measure Theory

## Mathematical Statement

For a Lipschitz function $f : \mathbb{R}^{n+1} \to \mathbb{R}$ and a measurable set $A \subseteq \mathbb{R}^{n+1}$:

$$\int_A \|\nabla f\| \, d\mathcal{L}^{n+1} = \int_{\mathbb{R}} \mathcal{H}^n(A \cap f^{-1}(t)) \, dt$$

This is the codimension-1 specialization of the general coarea formula.

## Source

- Federer, H. *Geometric Measure Theory*, §3.2.12
- Evans, L.C. and Gariepy, R.F. *Measure Theory and Fine Properties of Functions*, §3.4

## Status

Well-known result. Not formalized in Lean/Mathlib. The general coarea formula (arbitrary codimension) involves the Jacobian determinant.

## Why this is a good formalization target

Fundamental tool in PDE theory, calculus of variations, and geometric measure theory. The codimension-1 case avoids the general $m$-Jacobian.

## Mathlib Infrastructure

- ✅ `fderiv ℝ f x` — Fréchet derivative
- ✅ `hausdorffMeasure n` — $n$-dimensional Hausdorff measure ($\mu_H[n]$)
- ✅ `LipschitzWith K f` — Lipschitz condition
- ✅ `MeasureTheory.volume` — Lebesgue measure
- ✅ `∫ x in A, ... ∂μ` — Bochner integral over a set
- ⚠️ Norm of `ContinuousLinearMap` — `‖fderiv ℝ f x‖` compiles but is the operator norm, not the gradient norm (they coincide for $f : \mathbb{R}^{n+1} \to \mathbb{R}$)

## Proof Complexity Estimate

- **Estimated lines:** 1500–3000
- **Key steps:** Prove for smooth $f$ first; approximate Lipschitz by smooth; level set regularity via implicit function theorem
- **Biggest obstacle:** Connecting operator norm of derivative to gradient norm; Hausdorff measure of level sets

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
