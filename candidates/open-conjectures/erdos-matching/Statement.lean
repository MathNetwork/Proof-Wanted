-- Erdos matching conjecture (1965)
-- Status: draft

import Mathlib.Data.Finset.Basic
import Mathlib.Data.Nat.Choose.Basic
import Mathlib.Data.Fintype.Card

open Finset Nat

/-- A family has no matching of size s+1: no s+1 pairwise disjoint members. -/
def HasNoLargeMatching {α : Type*} [DecidableEq α]
    (F : Finset (Finset α)) (s : ℕ) : Prop :=
  ∀ M : Finset (Finset α), M ⊆ F →
    (∀ A ∈ M, ∀ B ∈ M, A ≠ B → Disjoint A B) →
    M.card ≤ s

theorem erdos_matching (n k s : ℕ) (hk : 0 < k) (hs : 0 < s) (hn : s * k ≤ n)
    (F : Finset (Finset (Fin n)))
    (huni : ∀ A ∈ F, A.card = k)
    (hmatch : HasNoLargeMatching F s) :
    F.card ≤ max (choose (k * s + k - 1) k)
                 (choose n k - choose (n - s) k) := by
  sorry
