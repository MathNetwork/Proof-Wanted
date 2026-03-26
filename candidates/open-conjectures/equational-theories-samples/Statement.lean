-- Sample undecided implications from equational theories of magmas
-- See https://github.com/leanprover-community/equational_theories
-- Status: draft

/-- A magma is a type with a binary operation. -/
class Magma' (α : Type) where
  op : α → α → α

variable {α : Type} [Magma' α]

-- Sample equations from the equational_theories project.
-- The project catalogues thousands of equational laws for magmas
-- and their logical relationships.

-- Equation 46: x . (y . x) = y
def Equation46 (α : Type) [Magma' α] : Prop :=
  ∀ x y : α, Magma'.op x (Magma'.op y x) = y

-- Equation 387: x . y = (y . x) . x
def Equation387 (α : Type) [Magma' α] : Prop :=
  ∀ x y : α, Magma'.op x y = Magma'.op (Magma'.op y x) x

-- Equation 4512: x . (y . z) = (x . y) . z  (associativity)
def Equation4512 (α : Type) [Magma' α] : Prop :=
  ∀ x y z : α, Magma'.op x (Magma'.op y z) = Magma'.op (Magma'.op x y) z

-- Sample implication: does Equation 46 imply Equation 387?
theorem eq46_implies_eq387 :
    ∀ (α : Type) [Magma' α], Equation46 α → Equation387 α := by
  sorry

-- Sample question: does Equation 387 imply Equation 46, or is there a separating model?
theorem eq387_implies_eq46_or_not :
    (∀ (α : Type) [Magma' α], Equation387 α → Equation46 α) ∨
    (∃ (α : Type) (_ : Magma' α), Equation387 α ∧ ¬ Equation46 α) := by
  sorry
