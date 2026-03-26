import Lake
open Lake DSL

package «formalization-candidates» where
  leanOptions := #[⟨`autoImplicit, false⟩]

require mathlib from git
  "https://github.com/leanprover-community/mathlib4" @ "master"

-- Known theorems

lean_lib SL2RTraceClassification where
  srcDir := "candidates/known-theorems/sl2r-trace-classification"
  roots := #[`Statement]

lean_lib SL2RHomogeneousSpace where
  srcDir := "candidates/known-theorems/sl2r-homogeneous-space"
  roots := #[`Statement]

lean_lib CayleyTransform where
  srcDir := "candidates/known-theorems/cayley-transform"
  roots := #[`Statement]

lean_lib CantorSetDimH where
  srcDir := "candidates/known-theorems/cantor-set-dimh"
  roots := #[`Statement]

lean_lib BesicovitchCovering where
  srcDir := "candidates/known-theorems/besicovitch-covering"
  roots := #[`Statement]

lean_lib SardTheorem where
  srcDir := "candidates/known-theorems/sard-theorem"
  roots := #[`Statement]

lean_lib CoareaFormula where
  srcDir := "candidates/known-theorems/coarea-formula"
  roots := #[`Statement]

lean_lib AzumaHoeffding where
  srcDir := "candidates/known-theorems/azuma-hoeffding"
  roots := #[`Statement]

lean_lib Kolmogorov01 where
  srcDir := "candidates/known-theorems/kolmogorov-01"
  roots := #[`Statement]

lean_lib PoincareInequality where
  srcDir := "candidates/known-theorems/poincare-inequality"
  roots := #[`Statement]

lean_lib LaxMilgram where
  srcDir := "candidates/known-theorems/lax-milgram"
  roots := #[`Statement]

lean_lib RellichKondrachov where
  srcDir := "candidates/known-theorems/rellich-kondrachov"
  roots := #[`Statement]

lean_lib MaximumPrincipleHarmonic where
  srcDir := "candidates/known-theorems/maximum-principle-harmonic"
  roots := #[`Statement]

-- Open conjectures

lean_lib FranklSemimodular where
  srcDir := "candidates/open-conjectures/frankl-semimodular"
  roots := #[`Statement]

lean_lib DavenportRankTwo where
  srcDir := "candidates/open-conjectures/davenport-rank-two"
  roots := #[`Statement]
