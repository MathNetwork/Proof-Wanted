import Lake
open Lake DSL

package «formalization-candidates» where
  leanOptions := #[⟨`autoImplicit, false⟩]

require mathlib from git
  "https://github.com/leanprover-community/mathlib4" @ "master"

lean_lib SL2RTraceClassification where
  srcDir := "candidates/sl2r-trace-classification"
  roots := #[`Statement]

lean_lib SL2RHomogeneousSpace where
  srcDir := "candidates/sl2r-homogeneous-space"
  roots := #[`Statement]

lean_lib CayleyTransform where
  srcDir := "candidates/cayley-transform"
  roots := #[`Statement]

lean_lib CantorSetDimH where
  srcDir := "candidates/cantor-set-dimh"
  roots := #[`Statement]

lean_lib BesicovitchCovering where
  srcDir := "candidates/besicovitch-covering"
  roots := #[`Statement]

lean_lib SardTheorem where
  srcDir := "candidates/sard-theorem"
  roots := #[`Statement]

lean_lib CoareaFormula where
  srcDir := "candidates/coarea-formula"
  roots := #[`Statement]

lean_lib FranklSemimodular where
  srcDir := "candidates/frankl-semimodular"
  roots := #[`Statement]

lean_lib DavenportRankTwo where
  srcDir := "candidates/davenport-rank-two"
  roots := #[`Statement]

lean_lib AzumaHoeffding where
  srcDir := "candidates/azuma-hoeffding"
  roots := #[`Statement]

lean_lib Kolmogorov01 where
  srcDir := "candidates/kolmogorov-01"
  roots := #[`Statement]

lean_lib PoincareInequality where
  srcDir := "candidates/poincare-inequality"
  roots := #[`Statement]

lean_lib LaxMilgram where
  srcDir := "candidates/lax-milgram"
  roots := #[`Statement]

lean_lib RellichKondrachov where
  srcDir := "candidates/rellich-kondrachov"
  roots := #[`Statement]

lean_lib MaximumPrincipleHarmonic where
  srcDir := "candidates/maximum-principle-harmonic"
  roots := #[`Statement]
