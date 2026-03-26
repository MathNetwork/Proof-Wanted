-- Davenport constant of Z_n x Z_n equals 2n - 1
-- Status: ⚠️ draft

import Mathlib.Data.ZMod.Basic
import Mathlib.Data.Multiset.Basic
import Mathlib.Data.Fintype.Card

open Classical in
/-- The Davenport constant D(G): the smallest d such that every multiset
of d elements from G contains a non-empty zero-sum subsequence. -/
noncomputable def DavenportConstant (G : Type*) [AddCommGroup G] [Fintype G] : ℕ :=
  Nat.find (⟨Fintype.card G + 1, by sorry⟩ :
    ∃ d : ℕ, ∀ (s : Multiset G), s.card = d →
      ∃ t : Multiset G, t ≤ s ∧ t ≠ 0 ∧ t.sum = 0)

theorem davenport_rank_two (n : ℕ) (hn : 0 < n) :
    @DavenportConstant (ZMod n × ZMod n) _ (by
      haveI : NeZero n := ⟨Nat.pos_iff_ne_zero.mp hn⟩
      infer_instance) = 2 * n - 1 := by
  sorry
