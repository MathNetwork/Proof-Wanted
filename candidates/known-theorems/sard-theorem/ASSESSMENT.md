# Formalization Assessment: Sard's theorem

## 1. Statement formalizability

The statement compiles. Definitions needed:

- `EuclideanSpace ℝ (Fin n)`: `Mathlib.Analysis.InnerProductSpace.PiL2`.
- `fderiv ℝ f x`: `Mathlib.Analysis.Calculus.FDeriv.Defs`. Returns `E →L[ℝ] F`.
- `Function.Surjective`: Lean core.
- `ContDiff ℝ ⊤ f`: `Mathlib.Analysis.Calculus.ContDiff.Basic`. `⊤` means C-infinity.
- `volume`: `Mathlib.MeasureTheory.Measure.Haar.OfBasis` provides `MeasureSpace` for `EuclideanSpace`. Requires `Mathlib.Analysis.Normed.Lp.MeasurableSpace` for `BorelSpace` instance.

`criticalSet` is defined in Statement.lean as `{x | ¬ Function.Surjective (fderiv ℝ f x)}`. The surjectivity of a `ContinuousLinearMap` is checked via its coercion to a function. This is correct.

## 2. Proof strategy

The standard proof (Milnor's presentation):

Step 1: Reduce to the case n >= m (when n < m, critical set = all of R^n, and the image has measure zero by a simpler dimension argument).

Step 2: Use Taylor's theorem to approximate f near critical points.

Step 3: Partition the critical set into rank-stratified pieces.

Step 4: Cover each piece by small cubes. Use the Taylor approximation to show that the image of each cube has measure ~ epsilon * (side length)^m.

Step 5: Sum over cubes and take epsilon -> 0.

Mathlib has Taylor's theorem (`Mathlib.Analysis.Calculus.Taylor`), ContDiff, and the change-of-variables formula is partially available.

## 3. Estimated proof length

1500-3000 lines. Comparable in difficulty to the Gagliardo-Nirenberg-Sobolev inequality formalization (~3500 lines). The proof is technically demanding: it requires careful measure estimates on images of sets under smooth maps.

## 4. Dependencies not in Mathlib

- Taylor's theorem: in Mathlib (`Mathlib.Analysis.Calculus.Taylor`).
- Measure of images of cubes under smooth maps: needs explicit estimates. Partially available via the change-of-variables formula for integrals.
- Rank-stratified decomposition of the critical set: not in Mathlib. Needs ~100 lines.

## 5. Risks and blockers

The measure estimate on images of small cubes is the technical core. It requires controlling `volume (f '' cube)` in terms of the operator norm of `fderiv ℝ f` and the cube side length. This connects `fderiv`, `volume`, and image measure, which may require developing some glue lemmas.

The smooth (C-infinity) hypothesis `ContDiff ℝ ⊤` is stronger than needed. Sard-Federer requires only C^k with k >= max(n-m+1, 1). The C-infinity version avoids this regularity bookkeeping.

## 6. Verdict

**Significant infrastructure needed**. Statement compiles. Proof requires measure estimates on images that are not directly in Mathlib. Estimated 1500-3000 lines.
