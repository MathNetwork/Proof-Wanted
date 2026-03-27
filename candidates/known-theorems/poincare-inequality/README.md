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


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `EuclideanSpace ℝ (Fin n)`: present. With `MeasureSpace` via `Mathlib.Analysis.Normed.Lp.MeasurableSpace` + `Mathlib.MeasureTheory.Measure.Haar.OfBasis`.
- `ContDiff ℝ 1 u`: `Mathlib.Analysis.Calculus.ContDiff.Basic`. C^1 smoothness.
- `HasCompactSupport u`: `Mathlib.Topology.Algebra.Support`. Present.
- `EuclideanSpace.proj (⟨0, by omega⟩ : Fin n)`: `Mathlib.Analysis.InnerProductSpace.PiL2`. Continuous linear projection to i-th coordinate.
- `fderiv ℝ u x`: present. `‖fderiv ℝ u x‖` is the operator norm.
- `∫ x, u x ^ 2 ∂volume`: Bochner integral. Present.

The slab condition uses `EuclideanSpace.proj` to extract the first coordinate. The `⟨0, by omega⟩ : Fin n` construct requires `1 ≤ n` (from hypothesis `hn`).

## 2. Proof strategy

Step 1: Fix x_2, ..., x_n and consider u as a function of x_1 alone.

Step 2: Since u has compact support in the slab {a < x_1 < b}, we have u(a, x') = 0. By the fundamental theorem of calculus, u(x_1, x') = integral from a to x_1 of (partial_1 u)(t, x') dt.

Step 3: Apply Cauchy-Schwarz: |u(x_1, x')|^2 <= (b-a) * integral from a to b of |partial_1 u(t, x')|^2 dt.

Step 4: Integrate both sides over x_1 in [a,b]: integral |u|^2 dx_1 <= (b-a)^2 * integral |partial_1 u|^2 dx_1.

Step 5: Integrate over x' using Fubini. Since ‖grad u‖^2 >= |partial_1 u|^2, the result follows.

Mathlib has Fubini (`Mathlib.MeasureTheory.Integral.Prod`), fundamental theorem of calculus (`Mathlib.MeasureTheory.Integral.FundThmCalculus`), and Cauchy-Schwarz for integrals.

## 3. Estimated proof length

400-800 lines. The Fubini decomposition and coordinate extraction is the main technical overhead (~200 lines). The 1D estimate via FTC + Cauchy-Schwarz is ~100 lines.

## 4. Dependencies not in Mathlib

- Relating `‖fderiv ℝ u x‖` to partial derivatives: `fderiv` gives the total derivative. Extracting the partial derivative in the x_1 direction and showing `|partial_1 u| <= ‖grad u‖` needs ~30-50 lines.
- Fubini for `EuclideanSpace`: Mathlib's Fubini is for product measures. Identifying `EuclideanSpace ℝ (Fin n)` as a product and applying Fubini requires some setup.

## 5. Risks and blockers

The identification of `EuclideanSpace ℝ (Fin n)` with a product type for Fubini is the main technical challenge. `EuclideanSpace` is `PiLp 2 (Fin n → ℝ)`, which is definitionally a function type but with a different norm. The measure is the same as the product measure on `(Fin n → ℝ)`, but proving this identification may need work.

The constant `(b-a)^2` in the statement is not the sharp Poincare constant (which is `(b-a)^2/π^2`), but it is a valid upper bound, so the statement is correct.

## 6. Verdict

**Feasible with work**. Statement compiles. Proof uses FTC, Cauchy-Schwarz, and Fubini, all in Mathlib. The main overhead is Fubini on EuclideanSpace. Estimated 400-800 lines.
