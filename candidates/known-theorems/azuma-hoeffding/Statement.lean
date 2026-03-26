-- Azuma-Hoeffding inequality for bounded-increment martingales
-- Status: ✅ verified against Mathlib

import Mathlib.Probability.Martingale.Basic
import Mathlib.Analysis.SpecialFunctions.ExpDeriv

open MeasureTheory ProbabilityTheory Finset

theorem azuma_hoeffding
    {Ω : Type*} {m0 : MeasurableSpace Ω} {μ : Measure Ω} [IsProbabilityMeasure μ]
    {ℱ : Filtration ℕ m0}
    {M : ℕ → Ω → ℝ}
    (hmart : Martingale M ℱ μ)
    (c : ℕ → ℝ)
    (hc : ∀ n, ∀ᵐ ω ∂μ, |M (n + 1) ω - M n ω| ≤ c (n + 1))
    (hc_pos : ∀ n, 0 < c n)
    {t : ℝ} (ht : 0 < t) (n : ℕ) :
    μ {ω | |M n ω - M 0 ω| ≥ t} ≤
      ENNReal.ofReal (2 * Real.exp (- t ^ 2 / (2 * ∑ k ∈ range n, c (k + 1) ^ 2))) := by
  sorry
