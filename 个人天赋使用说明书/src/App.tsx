/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Prologue from "./components/Prologue";
import Engines from "./components/Engines";
import EnergyAudit from "./components/EnergyAudit";
import Roadmap from "./components/Roadmap";
import AchillesHeel from "./components/AchillesHeel";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans">
      <Hero />
      <Prologue />
      <Engines />
      <EnergyAudit />
      <Roadmap />
      <AchillesHeel />
    </main>
  );
}
