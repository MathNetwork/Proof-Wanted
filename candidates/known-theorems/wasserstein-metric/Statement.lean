-- Wasserstein distance is a metric on probability measures
-- Status: draft

import Mathlib.MeasureTheory.Measure.Map
import Mathlib.MeasureTheory.Measure.ProbabilityMeasure
import Mathlib.MeasureTheory.Measure.Prod
import Mathlib.MeasureTheory.Integral.Lebesgue.Basic
import Mathlib.Analysis.SpecialFunctions.Pow.NNReal

open MeasureTheory Measure Set ENNReal

variable {X : Type*} [MeasurableSpace X] [PseudoMetricSpace X] [BorelSpace X]

/-- A coupling of two measures: a measure on the product space
    whose marginals are the given measures. -/
def IsCoupling (γ : Measure (X × X)) (μ ν : Measure X) : Prop :=
  γ.map Prod.fst = μ ∧ γ.map Prod.snd = ν

/-- The set of couplings between two probability measures. -/
def couplings (μ ν : Measure X) : Set (Measure (X × X)) :=
  {γ | IsCoupling γ μ ν}

/-- The p-Wasserstein cost of a coupling. -/
noncomputable def wassersteinCost (p : ℝ) (γ : Measure (X × X)) : ℝ≥0∞ :=
  ∫⁻ xy, (edist xy.1 xy.2) ^ p ∂γ

/-- The p-Wasserstein distance between two measures. -/
noncomputable def wasserstein (p : ℝ) (μ ν : Measure X) : ℝ≥0∞ :=
  ⨅ γ ∈ couplings μ ν, (wassersteinCost p γ) ^ (1 / p)

/-- Wasserstein distance satisfies the triangle inequality. -/
theorem wasserstein_triangle
    {p : ℝ} (hp : 1 ≤ p)
    (μ ν ρ : Measure X)
    [IsProbabilityMeasure μ] [IsProbabilityMeasure ν] [IsProbabilityMeasure ρ] :
    wasserstein p μ ρ ≤ wasserstein p μ ν + wasserstein p ν ρ := by
  sorry

/-- Wasserstein distance is zero iff measures are equal. -/
theorem wasserstein_eq_zero_iff
    {p : ℝ} (hp : 1 ≤ p)
    (μ ν : Measure X)
    [IsProbabilityMeasure μ] [IsProbabilityMeasure ν] :
    wasserstein p μ ν = 0 ↔ μ = ν := by
  sorry

/-- Wasserstein distance is symmetric. -/
theorem wasserstein_comm
    {p : ℝ} (hp : 1 ≤ p)
    (μ ν : Measure X)
    [IsProbabilityMeasure μ] [IsProbabilityMeasure ν] :
    wasserstein p μ ν = wasserstein p ν μ := by
  sorry
