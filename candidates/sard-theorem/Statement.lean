import Mathlib.Analysis.Calculus.ContDiff.Basic
import Mathlib.MeasureTheory.Measure.Lebesgue.Basic
import Mathlib.MeasureTheory.Measure.Haar.OfBasis
import Mathlib.Analysis.InnerProductSpace.PiL2
import Mathlib.Analysis.Normed.Lp.MeasurableSpace

open MeasureTheory Set

def criticalSet {n m : ℕ}
    (f : EuclideanSpace ℝ (Fin n) → EuclideanSpace ℝ (Fin m)) :
    Set (EuclideanSpace ℝ (Fin n)) :=
  {x | ¬ Function.Surjective (fderiv ℝ f x)}

theorem sard {n m : ℕ}
    (f : EuclideanSpace ℝ (Fin n) → EuclideanSpace ℝ (Fin m))
    (hf : ContDiff ℝ ⊤ f) :
    volume (f '' criticalSet f) = 0 := by
  sorry
