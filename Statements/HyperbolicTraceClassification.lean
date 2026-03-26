import Mathlib.LinearAlgebra.Matrix.SpecialLinearGroup
import Mathlib.LinearAlgebra.Matrix.Trace
import Mathlib.Analysis.Complex.UpperHalfPlane.Basic
import Mathlib.Analysis.Complex.UpperHalfPlane.MoebiusAction

open Matrix UpperHalfPlane Complex
open scoped MatrixGroups

def IsElliptic (g : SL(2, ℝ)) : Prop :=
  |Matrix.trace (g : Matrix (Fin 2) (Fin 2) ℝ)| < 2

def IsParabolic (g : SL(2, ℝ)) : Prop :=
  |Matrix.trace (g : Matrix (Fin 2) (Fin 2) ℝ)| = 2 ∧
  (g : Matrix (Fin 2) (Fin 2) ℝ) ≠ 1 ∧
  (g : Matrix (Fin 2) (Fin 2) ℝ) ≠ -1

def IsHyperbolic (g : SL(2, ℝ)) : Prop :=
  |Matrix.trace (g : Matrix (Fin 2) (Fin 2) ℝ)| > 2

theorem elliptic_unique_fixed_point
    (g : SL(2, ℝ)) (hg : IsElliptic g) :
    ∃! z : UpperHalfPlane, g • z = z := by
  sorry

theorem hyperbolic_no_fixed_point_in_H
    (g : SL(2, ℝ)) (hg : IsHyperbolic g) :
    ¬ ∃ z : UpperHalfPlane, g • z = z := by
  sorry

theorem parabolic_no_fixed_point_in_H
    (g : SL(2, ℝ)) (hg : IsParabolic g) :
    ¬ ∃ z : UpperHalfPlane, g • z = z := by
  sorry
