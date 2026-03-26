import Mathlib.Analysis.Complex.UpperHalfPlane.Basic

open Complex

def PoincareDisk := {z : ℂ // ‖z‖ < 1}

noncomputable def cayleyTransform (z : PoincareDisk) : UpperHalfPlane where
  coe := Complex.I * (1 - z.val) / (1 + z.val)
  coe_im_pos := by sorry

noncomputable def inverseCayley (w : UpperHalfPlane) : PoincareDisk :=
  ⟨((w : ℂ) - Complex.I) / ((w : ℂ) + Complex.I), by sorry⟩

theorem cayley_left_inv (z : PoincareDisk) :
    inverseCayley (cayleyTransform z) = z := by sorry

theorem cayley_right_inv (w : UpperHalfPlane) :
    cayleyTransform (inverseCayley w) = w := by sorry
