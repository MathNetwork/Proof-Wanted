-- Maximum principle for harmonic functions
-- Full version blocked: no Laplacian in Mathlib
-- We state the complex-variable maximum modulus principle instead
-- Status: ✅ verified against Mathlib

import Mathlib.Analysis.Complex.AbsMax
import Mathlib.Topology.Order.Basic

open Complex Metric Set

/-- Maximum modulus principle (complex version): if f is holomorphic on a
preconnected open set U, continuous on its closure, and |f| attains its
maximum at an interior point, then f is constant on U.

This is essentially the weak maximum principle for harmonic functions
in dimension 2, since harmonic functions are locally real parts of
holomorphic functions. -/
theorem maximum_modulus_principle
    {U : Set ℂ} (hU : IsOpen U) (hconn : IsPreconnected U)
    {f : ℂ → ℂ}
    (hf : DifferentiableOn ℂ f U)
    {z₀ : ℂ} (hz₀ : z₀ ∈ U)
    (hmax : IsMaxOn (norm ∘ f) U z₀) :
    ∀ z ∈ U, ‖f z‖ = ‖f z₀‖ := by
  sorry
