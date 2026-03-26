-- Existence of optimal couplings on compact spaces
-- Status: draft

import Mathlib.MeasureTheory.Measure.Map
import Mathlib.MeasureTheory.Measure.ProbabilityMeasure
import Mathlib.MeasureTheory.Measure.Prod
import Mathlib.MeasureTheory.Integral.Lebesgue.Basic
import Mathlib.Topology.Semicontinuity.Basic

open MeasureTheory Measure Set ENNReal

/-- A coupling of probability measures mu on X and nu on Y. -/
def IsCouplingOf {X Y : Type*} [MeasurableSpace X] [MeasurableSpace Y]
    (γ : Measure (X × Y)) (μ : Measure X) (ν : Measure Y) : Prop :=
  IsProbabilityMeasure γ ∧ γ.map Prod.fst = μ ∧ γ.map Prod.snd = ν

/-- The set of couplings. -/
def couplingsOf {X Y : Type*} [MeasurableSpace X] [MeasurableSpace Y]
    (μ : Measure X) (ν : Measure Y) : Set (Measure (X × Y)) :=
  {γ | IsCouplingOf γ μ ν}

/-- The transport cost functional. -/
noncomputable def transportCostMeasure {X Y : Type*} [MeasurableSpace X] [MeasurableSpace Y]
    (c : X × Y → ℝ≥0∞) (γ : Measure (X × Y)) : ℝ≥0∞ :=
  ∫⁻ xy, c xy ∂γ

/-- Existence of optimal coupling on compact spaces with lsc cost. -/
theorem exists_optimal_coupling
    {X Y : Type*}
    [PseudoMetricSpace X] [MeasurableSpace X] [BorelSpace X] [CompactSpace X]
    [PseudoMetricSpace Y] [MeasurableSpace Y] [BorelSpace Y] [CompactSpace Y]
    (c : X × Y → ℝ≥0∞)
    (hc : LowerSemicontinuous c)
    (μ : Measure X) [IsProbabilityMeasure μ]
    (ν : Measure Y) [IsProbabilityMeasure ν] :
    ∃ γ ∈ couplingsOf μ ν,
      ∀ γ' ∈ couplingsOf μ ν,
        transportCostMeasure c γ ≤ transportCostMeasure c γ' := by
  sorry
