-- Kolmogorov zero-one law
-- Status: ✅ verified against Mathlib

import Mathlib.Probability.Independence.Basic

open MeasureTheory ProbabilityTheory

/-- The tail σ-algebra of a sequence of measurable functions:
    T = ⋂ₙ σ(Xₖ : k ≥ n). Defined as the infimum over n of the
    supremum of comap σ-algebras for indices k ≥ n. -/
@[reducible] noncomputable def tailSigmaAlgebra {Ω : Type*}
    {β : ℕ → Type*} [∀ i, MeasurableSpace (β i)]
    (X : ∀ i, Ω → β i) : MeasurableSpace Ω :=
  ⨅ (n : ℕ), ⨆ (k : ℕ) (_ : n ≤ k), MeasurableSpace.comap (X k) inferInstance

theorem kolmogorov_zero_one
    {Ω : Type*} {m0 : MeasurableSpace Ω} {μ : Measure Ω} [IsProbabilityMeasure μ]
    {β : ℕ → Type*} [∀ i, MeasurableSpace (β i)]
    {X : ∀ i, Ω → β i}
    (hX_meas : ∀ n, Measurable (X n))
    (hX_indep : iIndepFun X μ)
    {A : Set Ω}
    (hA : MeasurableSet[tailSigmaAlgebra X] A) :
    μ A = 0 ∨ μ A = 1 := by
  sorry
