-- Sensitivity conjecture (tight bound): bs(f) <= s(f)^2
-- Status: draft

import Mathlib.Data.Fin.Basic
import Mathlib.Data.Finset.Basic
import Mathlib.Data.Fintype.Card
import Mathlib.Data.Fintype.Pi
import Mathlib.Data.Finset.Lattice.Fold

open Finset

/-- Flip the i-th bit of input x. -/
def flipBit (n : ℕ) (x : Fin n → Bool) (i : Fin n) : Fin n → Bool :=
  Function.update x i (!x i)

/-- Sensitivity of f at input x: number of coordinates where flipping changes output. -/
def sensitivityAt (n : ℕ) (f : (Fin n → Bool) → Bool) (x : Fin n → Bool) : ℕ :=
  (Finset.univ.filter (fun i => f (flipBit n x i) ≠ f x)).card

/-- Sensitivity of f: max over all inputs. -/
noncomputable def sensitivity (n : ℕ) (f : (Fin n → Bool) → Bool) : ℕ :=
  Finset.univ.sup (fun x => sensitivityAt n f x)

/-- Block sensitivity at x: max number of disjoint sensitive blocks. -/
noncomputable def blockSensitivity (n : ℕ) (f : (Fin n → Bool) → Bool) : ℕ :=
  sorry

theorem bs_le_s_squared (n : ℕ) (f : (Fin n → Bool) → Bool) :
    blockSensitivity n f ≤ sensitivity n f ^ 2 := by
  sorry
