-- Kantorovich duality for finite optimal transport
-- Status: draft

import Mathlib.Data.Matrix.Basic
import Mathlib.Data.Real.Basic
import Mathlib.Data.Fintype.Card
import Mathlib.Algebra.BigOperators.Group.Finset.Basic
import Mathlib.Data.Real.Archimedean

open Finset BigOperators

variable {m n : ℕ}

/-- Transport plan: nonneg matrix with given row and column sums. -/
def IsTransportPlan (π : Matrix (Fin m) (Fin n) ℝ) (μ : Fin m → ℝ) (ν : Fin n → ℝ) : Prop :=
  (∀ i j, 0 ≤ π i j) ∧
  (∀ i, ∑ j, π i j = μ i) ∧
  (∀ j, ∑ i, π i j = ν j)

/-- Transport cost. -/
def transportCost (C π : Matrix (Fin m) (Fin n) ℝ) : ℝ :=
  ∑ i, ∑ j, C i j * π i j

/-- Dual feasibility: phi_i + psi_j <= C_ij. -/
def IsDualFeasible (C : Matrix (Fin m) (Fin n) ℝ) (φ : Fin m → ℝ) (ψ : Fin n → ℝ) : Prop :=
  ∀ i j, φ i + ψ j ≤ C i j

/-- Dual objective value. -/
def dualValue (φ : Fin m → ℝ) (ψ : Fin n → ℝ) (μ : Fin m → ℝ) (ν : Fin n → ℝ) : ℝ :=
  ∑ i, φ i * μ i + ∑ j, ψ j * ν j

/-- Weak duality: any dual feasible pair gives a lower bound. -/
theorem kantorovich_weak_duality
    (C : Matrix (Fin m) (Fin n) ℝ)
    (μ : Fin m → ℝ) (ν : Fin n → ℝ)
    (π : Matrix (Fin m) (Fin n) ℝ) (hπ : IsTransportPlan π μ ν)
    (φ : Fin m → ℝ) (ψ : Fin n → ℝ) (hd : IsDualFeasible C φ ψ) :
    dualValue φ ψ μ ν ≤ transportCost C π := by
  sorry

/-- Strong duality: the min transport cost equals the max dual value. -/
theorem kantorovich_strong_duality
    (C : Matrix (Fin m) (Fin n) ℝ)
    (μ : Fin m → ℝ) (ν : Fin n → ℝ)
    (hμ : ∀ i, 0 ≤ μ i) (hν : ∀ j, 0 ≤ ν j)
    (hsum : ∑ i, μ i = 1) (hsum' : ∑ j, ν j = 1) :
    sInf {t | ∃ π, IsTransportPlan π μ ν ∧ transportCost C π = t} =
    sSup {t | ∃ φ ψ, IsDualFeasible C φ ψ ∧ dualValue φ ψ μ ν = t} := by
  sorry
