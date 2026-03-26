-- Sunflower conjecture (Erdos-Ko)
-- Status: draft

import Mathlib.Data.Finset.Basic
import Mathlib.Data.Fintype.Card

open Finset

/-- A sunflower: a family where every pair has the same intersection (the kernel). -/
def IsSunflower {α : Type*} [DecidableEq α]
    (F : Finset (Finset α)) : Prop :=
  ∃ Y : Finset α, ∀ A ∈ F, ∀ B ∈ F, A ≠ B → A ∩ B = Y

theorem sunflower_conjecture :
    ∃ C : ℕ, 0 < C ∧ ∀ (k : ℕ) (hk : 0 < k)
      {α : Type*} [DecidableEq α] [Fintype α]
      (F : Finset (Finset α)),
      (∀ A ∈ F, A.card = k) →
      C ^ k < F.card →
      ∃ S : Finset (Finset α), S ⊆ F ∧ 3 ≤ S.card ∧ IsSunflower S := by
  sorry
