-- Chvatal's conjecture (1974)
-- Status: draft

import Mathlib.Data.Finset.Basic
import Mathlib.Data.Fintype.Card

open Finset

/-- A family is downward-closed (an ideal): every subset of a member is also a member. -/
def IsDownwardClosed {α : Type*} [DecidableEq α]
    (F : Finset (Finset α)) : Prop :=
  ∀ A ∈ F, ∀ B : Finset α, B ⊆ A → B ∈ F

/-- An intersecting family: every two members share an element. -/
def IsIntersecting {α : Type*} [DecidableEq α]
    (G : Finset (Finset α)) : Prop :=
  ∀ A ∈ G, ∀ B ∈ G, (A ∩ B).Nonempty

theorem chvatal {α : Type*} [DecidableEq α] [Fintype α]
    (F : Finset (Finset α))
    (hF : IsDownwardClosed F)
    (hne : F.Nonempty) :
    ∃ x : α, ∀ G : Finset (Finset α),
      G ⊆ F → IsIntersecting G →
      G.card ≤ (F.filter (fun A => x ∈ A)).card := by
  sorry
