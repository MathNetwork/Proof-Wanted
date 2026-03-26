## Name

Lax-Milgram theorem

## Type

known-theorem

## Area

Functional Analysis / PDE

## Mathematical Statement

Let $H$ be a real Hilbert space, $a : H \times H \to \mathbb{R}$ a continuous coercive bilinear form (i.e., $|a(u,v)| \leq M\|u\|\|v\|$ and $a(u,u) \geq \alpha\|u\|^2$ for some $\alpha > 0$), and $f \in H^*$. Then there exists a unique $u \in H$ such that

$$a(u, v) = f(v) \quad \text{for all } v \in H.$$

## Source

- Lax, P.D. and Milgram, A.N. "Parabolic equations." *Annals of Mathematics Studies* 33 (1954), 167–190
- Brezis, H. *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, Corollary 5.8
- Evans, L.C. *Partial Differential Equations*, §6.2

## Status

Fundamental existence theorem for weak solutions of elliptic PDE. Not formalized in Lean. The symmetric case follows from Riesz representation (which IS in Mathlib).

## Why this is a good formalization target

The most important abstract theorem for elliptic PDE existence. Proof reduces to Riesz representation + contraction mapping or direct variational argument. All infrastructure (Hilbert spaces, dual spaces, Riesz representation) exists in Mathlib.

## Mathlib Infrastructure

- ✅ `InnerProductSpace ℝ H` + `CompleteSpace H` — real Hilbert space
- ✅ `H →L[ℝ] ℝ` — continuous linear functionals (dual space)
- ✅ `H →L[ℝ] H →L[ℝ] ℝ` — continuous bilinear forms (bundled)
- ✅ `InnerProductSpace.toDual` — Fréchet-Riesz representation (`Mathlib.Analysis.InnerProductSpace.Dual`)

## Proof Complexity Estimate

- **Estimated lines:** 150–300
- **Key steps:** Use Riesz to identify $f$ with an element; define operator $A : H \to H$ via $\langle Au, v\rangle = a(u,v)$; show $A$ is invertible via coercivity
- **Biggest obstacle:** Setting up the operator $A$ and verifying its properties

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
