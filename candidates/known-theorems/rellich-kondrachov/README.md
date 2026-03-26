## Name

Rellich-Kondrachov compactness theorem

## Type

known-theorem

## Area

PDE / Functional Analysis

## Mathematical Statement

Let $\Omega \subset \mathbb{R}^n$ be a bounded open set with Lipschitz boundary. If $1 \leq p < n$, then the Sobolev embedding $W^{1,p}(\Omega) \hookrightarrow L^q(\Omega)$ is **compact** for every $1 \leq q < p^* = np/(n-p)$.

## Source

- Rellich, F. "Ein Satz über mittlere Konvergenz." *Nachr. Ges. Wiss. Göttingen* (1930), 30–35
- Kondrachov, V.I. (1945)
- Adams, R.A. and Fournier, J.J.F. *Sobolev Spaces*, Theorem 6.3
- Evans, L.C. *Partial Differential Equations*, §5.7

## Status

**BLOCKED**: Sobolev spaces $W^{k,p}(\Omega)$ as Banach spaces are not defined in Mathlib. The Gagliardo-Nirenberg-Sobolev inequality exists for smooth compactly supported functions, but the space $W^{1,p}$ itself is not available.

**Fallback**: We state an Arzelà-Ascoli style compactness result for equicontinuous bounded families, which is available in Mathlib.

## Why this is a good formalization target

Key compactness tool for PDE existence theory (direct method of calculus of variations). Blocked by missing Sobolev space infrastructure.

## Mathlib Infrastructure

- ❌ `SobolevSpace` / `W1p` — not defined in Mathlib
- ✅ Gagliardo-Nirenberg-Sobolev inequality — `Mathlib.Analysis.FunctionalSpaces.SobolevInequality`
- ✅ `MeasureTheory.Lp` — $L^p$ spaces
- ✅ Arzelà-Ascoli theorem — `Mathlib.Topology.UniformSpace.Ascoli`
- ✅ `Equicontinuous` — equicontinuity predicate
- ✅ `BoundedContinuousFunction` — bounded continuous functions `X →ᵇ ℝ`

## Proof Complexity Estimate

- **Estimated lines:** Unknown (blocked)
- **Key steps:** Mollification + uniform estimates; Arzelà-Ascoli; diagonal argument
- **Biggest obstacle:** Sobolev spaces not defined

## Lean 4 Statement

See `Statement.lean` in this folder. Contains an Arzelà-Ascoli fallback statement.

**Status:** ⚠️ partial — full theorem blocked by missing Sobolev spaces; fallback statement compiles

## Contributor

MathNetwork
