## Name

Sard's theorem

## Type

known-theorem

## Area

Differential Topology

## Mathematical Statement

Let $f : \mathbb{R}^n \to \mathbb{R}^m$ be a smooth ($C^\infty$) map. Then the set of critical values $f(\{x : \nabla f(x) \text{ is not surjective}\})$ has Lebesgue measure zero in $\mathbb{R}^m$.

## Source

- Sard, A. "The measure of the critical values of differentiable maps." *Bull. AMS* 48 (1942), 883–890
- Milnor, J. *Topology from the Differentiable Viewpoint*, §3

## Status

Classical result in differential topology. Not formalized in Lean/Mathlib. The regularity requirement $C^k$ with $k \geq \max(n - m + 1, 1)$ is the sharp version (Sard–Federer).

## Why this is a good formalization target

Cornerstone of differential topology, used in transversality, Morse theory, and degree theory. The smooth case ($C^\infty$) avoids regularity subtleties.

## Mathlib Infrastructure

- ✅ `fderiv ℝ f x` — Fréchet derivative, returns `E →L[ℝ] F`
- ✅ `Function.Surjective` — surjectivity predicate
- ✅ `ContDiff ℝ ⊤ f` — smooth ($C^\infty$) maps
- ✅ `MeasureTheory.volume` — Lebesgue measure
- ⚠️ `MeasureSpace (EuclideanSpace ℝ (Fin m))` — requires `Mathlib.Analysis.Normed.Lp.MeasurableSpace`

## Proof Complexity Estimate

- **Estimated lines:** 1000–2000
- **Key steps:** Induction on $n$; partition critical set; use Taylor expansion + measure estimates on images of small cubes
- **Biggest obstacle:** Measure-theoretic estimates on images of sets under smooth maps

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
