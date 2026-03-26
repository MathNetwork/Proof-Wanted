import Mathlib.MeasureTheory.Measure.Hausdorff
import Mathlib.Analysis.InnerProductSpace.PiL2

open Metric Set

theorem besicovitch_covering {n : ℕ}
    (A : Set (EuclideanSpace ℝ (Fin n)))
    (hA : Bornology.IsBounded A)
    (r : EuclideanSpace ℝ (Fin n) → ℝ)
    (hr : ∀ x ∈ A, 0 < r x) :
    ∃ (N : ℕ) (families : Fin N → Set (EuclideanSpace ℝ (Fin n))),
      (∀ k, (families k).PairwiseDisjoint (fun x => closedBall x (r x))) ∧
      A ⊆ ⋃ k, ⋃ x ∈ families k, closedBall x (r x) := by
  sorry
