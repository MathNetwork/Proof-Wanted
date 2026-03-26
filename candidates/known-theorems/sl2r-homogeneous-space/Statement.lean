import Mathlib.LinearAlgebra.Matrix.SpecialLinearGroup
import Mathlib.Analysis.Complex.UpperHalfPlane.Basic
import Mathlib.Analysis.Complex.UpperHalfPlane.MoebiusAction
import Mathlib.Analysis.SpecialFunctions.Trigonometric.Basic

open Matrix UpperHalfPlane
open scoped MatrixGroups

theorem SL2R_action_transitive (z : UpperHalfPlane) :
    ∃ g : SL(2, ℝ), g • UpperHalfPlane.I = z := by
  sorry

theorem stabilizer_I_is_rotation (g : SL(2, ℝ)) :
    g • UpperHalfPlane.I = UpperHalfPlane.I ↔
    ∃ θ : ℝ, (g : Matrix (Fin 2) (Fin 2) ℝ) =
      !![Real.cos θ, -(Real.sin θ); Real.sin θ, Real.cos θ] := by
  sorry
