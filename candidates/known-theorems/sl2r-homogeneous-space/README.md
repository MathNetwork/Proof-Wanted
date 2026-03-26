## Name

ℍ as a homogeneous space: SL(2,ℝ)/SO(2)

## Type

known-theorem

## Area

Hyperbolic Geometry

## Mathematical Statement

1. **Transitivity:** $\mathrm{SL}(2,\mathbb{R})$ acts transitively on $\mathbb{H}$: for every $z \in \mathbb{H}$, there exists $g \in \mathrm{SL}(2,\mathbb{R})$ with $g \cdot i = z$.

2. **Stabilizer:** The stabilizer of $i \in \mathbb{H}$ is $\mathrm{SO}(2)$: $g \cdot i = i$ if and only if $g$ is a rotation matrix $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$.

Hence $\mathbb{H} \cong \mathrm{SL}(2,\mathbb{R})/\mathrm{SO}(2)$.

## Source

- Helgason, S. *Differential Geometry, Lie Groups, and Symmetric Spaces*, Chapter IV
- Iwaniec, H. *Spectral Methods of Automorphic Forms*, §2.1

## Status

Standard result. No known Lean formalization.

## Why this is a good formalization target

Builds directly on the Möbius action infrastructure already in Mathlib. The proof is a concrete computation.

## Mathlib Infrastructure

- ✅ `UpperHalfPlane.I` — the point $i \in \mathbb{H}$
- ✅ Möbius action `g • z`
- ✅ `Real.cos`, `Real.sin` — trigonometric functions
- ✅ `!![a, b; c, d]` matrix notation

## Proof Complexity Estimate

- **Estimated lines:** 100–200
- **Key steps:** Construct explicit $g$ sending $i$ to $z = x + iy$ via $g = \begin{pmatrix} \sqrt{y} & x/\sqrt{y} \\ 0 & 1/\sqrt{y} \end{pmatrix}$; solve $g \cdot i = i$ to get rotation form
- **Biggest obstacle:** Verifying determinant conditions for constructed matrices

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
