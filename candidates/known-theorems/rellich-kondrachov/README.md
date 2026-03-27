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


## 1. Statement formalizability

The full Rellich-Kondrachov theorem is BLOCKED. Sobolev spaces W^{1,p}(Omega) are not defined in Mathlib.

The fallback statement (Arzela-Ascoli for equicontinuous families) compiles. It uses:
- `BoundedContinuousFunction (X →ᵇ ℝ)`: `Mathlib.Topology.ContinuousMap.Bounded.Basic`.
- `Equicontinuous`: `Mathlib.Topology.UniformSpace.Equicontinuity`.
- `IsCompact (closure F)`: Lean core.
- `CompactSpace X`, `UniformSpace X`: Mathlib topology.

## 2. Proof strategy

For the fallback (Arzela-Ascoli): Mathlib has `ArzelaAscoli.isCompact_of_equicontinuous` in `Mathlib.Topology.UniformSpace.Ascoli`. The proof in Statement.lean might follow directly from this existing result.

For the full Rellich-Kondrachov:
Step 1: Define W^{1,p}(Omega) as the completion of C^1 functions under the Sobolev norm.
Step 2: Prove the Gagliardo-Nirenberg-Sobolev embedding (partially in Mathlib at `Mathlib.Analysis.FunctionalSpaces.SobolevInequality`).
Step 3: Use mollification to approximate W^{1,p} functions by smooth ones.
Step 4: Apply Arzela-Ascoli to the mollified sequence.
Step 5: Diagonal argument to extract a convergent subsequence.

## 3. Estimated proof length

Fallback statement: 10-30 lines (apply Arzela-Ascoli from Mathlib).
Full Rellich-Kondrachov: 2000-5000 lines. Requires defining Sobolev spaces first (~500-1000 lines), then the compactness argument.

## 4. Dependencies not in Mathlib

- Sobolev spaces W^{k,p}: NOT in Mathlib. The Gagliardo-Nirenberg-Sobolev inequality exists for smooth compactly supported functions but W^{k,p} as a Banach space is not defined.
- Mollification: NOT in Mathlib as a packaged tool. The convolution infrastructure exists partially.
- Weak derivatives: NOT in Mathlib.

## 5. Risks and blockers

The full theorem is blocked by missing Sobolev space definitions. This is a known gap in Mathlib. Work is ongoing (there have been discussions on the Lean Zulip about frequency-side Sobolev spaces), but no PR has landed.

## 6. Verdict

**Blocked** (full theorem). Sobolev spaces are not in Mathlib. The fallback Arzela-Ascoli statement is **Ready** (10-30 lines using existing Mathlib results).
