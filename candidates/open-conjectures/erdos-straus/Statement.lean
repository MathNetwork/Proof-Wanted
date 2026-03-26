-- Erdos-Straus conjecture (1948)
-- 4/n = 1/x + 1/y + 1/z for all n >= 2
-- Status: draft

import Mathlib.Data.Nat.Basic

theorem erdos_straus (n : ℕ) (hn : 2 ≤ n) :
    ∃ x y z : ℕ, 0 < x ∧ 0 < y ∧ 0 < z ∧
      4 * x * y * z = n * (y * z + x * z + x * y) := by
  sorry
