## Name

Cayley transform: Poincaré disk ↔ upper half-plane

## Type

known-theorem

## Area

Hyperbolic Geometry / Complex Analysis

## Mathematical Statement

The Cayley transform $V(z) = i\frac{1-z}{1+z}$ is a biholomorphism from the Poincaré disk $\mathbb{D} = \{z \in \mathbb{C} : |z| < 1\}$ to the upper half-plane $\mathbb{H}$, with inverse $V^{-1}(w) = \frac{w - i}{w + i}$.

## Source

- Ahlfors, L.V. *Complex Analysis*, Chapter 6
- Conway, J.B. *Functions of One Complex Variable II*, §14.1

## Status

Standard result in complex analysis. No known Lean formalization of this specific bijection.

## Why this is a good formalization target

Self-contained computation. Tests Lean's ability to handle complex arithmetic and subtype proofs (positivity of imaginary part, norm bound).

## Mathlib Infrastructure

- ✅ `UpperHalfPlane` — structure with field `coe : ℂ` and `coe_im_pos`
- ✅ `Complex.I` — the imaginary unit
- ✅ `Complex.norm` — `‖z‖` for complex numbers
- ❌ `PoincareDisk` — not in Mathlib; defined as `{z : ℂ // ‖z‖ < 1}`

## Proof Complexity Estimate

- **Estimated lines:** 150–300
- **Key steps:** Show $\mathrm{Im}(V(z)) > 0$ when $|z| < 1$; show $|V^{-1}(w)| < 1$ when $\mathrm{Im}(w) > 0$; verify both compositions are identity
- **Biggest obstacle:** Complex arithmetic in subtype proofs; division well-definedness

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
