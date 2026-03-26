import Mathlib.MeasureTheory.Measure.Hausdorff
import Mathlib.MeasureTheory.Integral.Bochner.Basic
import Mathlib.Analysis.Calculus.FDeriv.Basic
import Mathlib.Analysis.InnerProductSpace.PiL2
import Mathlib.MeasureTheory.Measure.Haar.OfBasis
import Mathlib.Analysis.Normed.Lp.MeasurableSpace

open MeasureTheory Measure Set NNReal

theorem coarea_codim_one {n : ℕ} {K : ℝ≥0}
    (f : EuclideanSpace ℝ (Fin (n+1)) → ℝ)
    (hf : LipschitzWith K f)
    (A : Set (EuclideanSpace ℝ (Fin (n+1))))
    (hA : MeasurableSet A) :
    ∫ x in A, ‖fderiv ℝ f x‖ ∂volume =
      ∫ t, (hausdorffMeasure n (A ∩ f ⁻¹' {t})).toReal ∂volume := by
  sorry
