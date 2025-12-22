<style>
/* Desktop: hide entire header */
@media (min-width: 768px) {
  header.site-header {
    display: none !important;
  }
}

/* Mobile: do nothing — keep hamburger working */
@media (max-width: 767px) {
  header.site-header {
    display: block !important;
  }
}
</style>

<link rel="icon" type="image/svg+xml" href="products/favicon/2icon.svg">

# Tupolev Tu-134

A Short-Haul Jetliner and an Evolving Soviet Design Lineage
The Tupolev Tu-134 was a foundational short-haul jetliner in Soviet and post-Soviet aviation. Developed from earlier Tupolev designs, it evolved continuously over decades, adapting to changing navigation practices, operational doctrines, and later, modernization concepts.

This repository documents the Tu-134 family as reconstructed in CAD, following a variant structure aligned with design evolution rather than official marketing designations. Each variant represents a distinct configuration state with meaningful structural, aerodynamic, or systems-level differences.
Aircraft Family Overview (Repository Variant Logic)

The Tu-134 family in this project is organized as follows:

- Tu-124A (Tu-134 Prototype) – Development aircraft bridging Tu-124 and Tu-134 concepts
- Tu-134A-5 (Early Production) – Initial service configuration with full navigator glazing
- Tu-134A-2 (Modified) – Late navigator variant with compromised blister and refined nose
- Tu-134B-3 (Final) – Final production standard with redesigned nose and reduced crew
- Tu-134M (Proposal) – Post-Soviet stretched and modernized concept with PS-90 engines
- Tu-134UBL (Military) – Specialized RuAF / VVS / VKS training and operational variant
 
Each variant is documented on its own subpage, preserving configuration-specific geometry and design intent.

## Design Philosophy

Across all variants, the Tu-134 reflects several consistent Soviet design priorities:

- Robust operation from short or semi-prepared runways
 -Rear-mounted engines to reduce FOD and simplify ground operations
- Structural simplicity and maintainability
- Accommodation for independent navigation capabilities
- Long-term adaptability through incremental redesign
 -Unlike many Western counterparts, the Tu-134’s evolution was gradual, resulting in overlapping configurations rather than sharp generational breaks.

## CAD Reconstruction Approach
- All variants in this repository are modeled as engineering-grade CAD, not visualization meshes.
- Fully lofted NURBS surfaces
- Solid fuselage, wing, nacelle, and empennage geometry
- Parametric construction enabling variant comparison
- Historically and logically consistent geometry changes
- Cross-sections exportable to DXF / DWG

Each variant is treated as a distinct airframe state, even where official naming conventions overlap.

---

## Variant Subpages

---

# Tu-124A (Tu-134 Prototype)

The Tu-124A represents the transitional prototype stage leading directly to the Tu-134. While visually similar to later aircraft, it retains structural and aerodynamic characteristics rooted in the Tu-124 lineage.

## Key Characteristics

- Early fuselage proportions and structural layout
- Initial rear-engine integration
- Prototype wing geometry and incidence
- Development-focused systems arrangement
- Configuration used to validate the Tu-134 concept

## CAD Notes

This model preserves early geometry that was later refined, particularly around wing-root blending, engine mounting, and fuselage contour continuity.

The Tu-124A is critical for understanding how the Tu-134 diverged from its predecessor while retaining key architectural elements.

---

# Tu-134A-5 (Early Production Variant)

The Tu-134A5 represents the first mature production configuration entering widespread service.

**Design Features**

- Fully glazed navigator’s nose
- Production-standard fuselage length
- Early-series engine nacelles
- Traditional multi-crew cockpit arrangement
- Structural robustness tailored for regional operations

**Operational Context**

This variant reflects operational realities of early Soviet jet transport, where independent navigation capability and crew redundancy were prioritized.

**CAD Fidelity**

- Accurate navigator glazing geometry
- Production fuselage lofts
- Correct early nacelle profiles
- Solid, parametric geometry throughout

---

# Tu-134A2 (Modified)

(Late Navigator Variant)
The Tu-134A2 (modified) represents a late-stage compromise configuration, retaining a navigator’s position while reducing the size and prominence of the nose blister.

**Engineering Changes**

- Compromised / reduced navigator glazing
- Refined nose profile for improved aerodynamics
- Transitional cockpit philosophy
-Structural continuity with earlier A-series airframes

**Significance**

This variant illustrates the gradual shift away from classical navigation practices without a complete redesign of the airframe.

**CAD Reconstruction Focus**

- Hybrid nose geometry unique to this configuration
- Precise modeling of blister reduction
- Variant-specific fuselage forward-section lofting

---

# Tu-134B3 (Final Production Standard)

The Tu-134B3 represents the final and most refined production form of the Tu-134.

**Key Characteristics**

- Fully redesigned nose with no navigator glazing
- Reduced flight crew
- Improved aerodynamics and visibility
- Mature systems and avionics integration
- Peak operational efficiency of the series

**Design Maturity**

This variant marks the Tu-134’s transition toward internationally familiar cockpit standards while maintaining its characteristic structural design.

**CAD Precision**

- Clean nose loft without glazing artifacts
- Final fuselage configuration
- Mature wing and tail integration
- Fully parametric solid model

---

# Tu-134M (What-If Post-Soviet Modernization)

The Tu-134M is a conceptual, never-built modernization exploring how the Tu-134 might have evolved in the post-Soviet era.

**Conceptual Changes**

- Stretched fuselage for increased capacity
- Modernized cockpit and systems philosophy
- Replacement of original engines with PS-90 turbofans
- Improved fuel efficiency and noise compliance
- Retention of Tu-134 family aerodynamic identity

**Design Philosophy**

This variant applies modern engineering logic to a legacy airframe, balancing realism with creative extrapolation.

**CAD Approach**

- Consistent structural logic applied to stretch
- Engine integration based on real PS-90 geometry
- Aerodynamic continuity preserved across surfaces

---

# Tu-134UBL (RuAF / VVS / VKS Special Variant)

The Tu-134UBL is a specialized military variant developed for the Russian Air Force and later VKS.

**Role and Purpose**

- Crew training and specialized operational tasks
- Modified nose profile distinct from civil variants
- Military-specific systems and equipment
- Long service life well beyond civil retirement

**Engineering Significance**

The UBL demonstrates the Tu-134’s adaptability beyond civil transport, serving in roles far removed from its original airline mission.

**CAD Reconstruction Focus**

- Variant-unique nose geometry
- Military external configuration details
- Structural differences from civil B-series aircraft

---

## Why the Tu-134 Matters

The Tu-134 remains significant because it:

- Defined Soviet short-haul jet transport for decades
- Demonstrated gradual, evolutionary aircraft development
- Bridged classical navigation practices and modern avionics
- Served both civil and military roles extensively
- Preserving these variants in CAD form allows direct study of how design philosophy, operational needs, and technology interacted over time.

## Repository Intent

This project is intended for:

- Aerospace engineers and students
- CAD and geometry specialists
- Aviation historians
- Modelers and fabrication workflows

The emphasis is on engineering geometry, configuration evolution, and design intent.
