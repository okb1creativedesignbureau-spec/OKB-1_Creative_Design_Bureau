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

# Convair Jetliner 880 and 990 Coronado Family

The Convair 880 and Convair 990 were high-speed narrowbody jetliners developed in the late 1950s and early 1960s. Conceived with an emphasis on cruise performance, they represented an alternative design philosophy to contemporaries such as the Boeing 707 and Douglas DC-8. Although commercially limited, both aircraft introduced advanced aerodynamic ideas and remain valuable case studies in performance-driven airliner design.


## This repository documents the Convair 880/990 family in CAD, including:

- Early concept-stage configurations
- Production-standard aircraft
- Exploratory and speculative variants developed to study alternate operational and modernization paths

## Family Overview

The aircraft covered in this project fall into four broad categories:

- Concept and pre-production configurations
- Production-standard Convair 880 and 990
- Operationally motivated what-if variants
- Exploratory and research-focused configurations

All models are built as engineering-grade CAD geometry, with clear distinction between historical and speculative designs.

# Concept Stage

**Convair 600 (Pre-880 Paper Concept)** The Convair 600 represents an early conceptual stage in the development of what would later become the Convair 880. This configuration reflects paper-stage assumptions, prior to detailed systems integration and certification-driven design changes.

[Main Article: Convair 600](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-600.html)

Defining Characteristics:

- Baseline narrowbody fuselage concept
- Absence of later fuselage-top antenna bulges
- Early turbojet engine proposals
- Simplified external systems representation
- Clean aerodynamic lines reflecting early performance assumptions

CAD Focus: 

This model intentionally excludes later operational features, capturing the aircraft as it existed in concept documentation rather than production reality.

# Production Aircraft

**Convair 880 (Production Standard)** The Convair 880 entered service as a single, tightly defined configuration, optimized for high subsonic cruise speed. 

[Main Article: Convair 880](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-880.html)

- Narrowbody fuselage with fixed length
- Swept wing optimized for Mach ~0.82–0.85
- Four underwing turbojet engines
- Minimal variation between individual airframes

This variant serves as the baseline reference geometry for all subsequent derivative studies in the repository.

**Convair 990 (Production Standard)**

[Main Article: Convair 990](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-900.html)

- The Convair 990 Coronado extended the 880 concept with additional aerodynamic refinement.
- Modified wing incorporating anti-shock bodies
- Higher cruise Mach capability
- Increased fuel capacity
- Heavier structure and increased complexity

This model represents the aircraft at its intended performance peak, prior to later operational compromises.

# Exploratory Operational Variants (What-If)

These variants explore how the Convair 880 platform might have been adapted for different operational niches, using plausible engineering logic.

**Convair 880 Short-Fuselage (Hot-and-High Variant)** A shortened Convair 880 optimized for hot-and-high airport operations. 

[Main Article: Convair 880SP](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-880SP.html)

Configuration Changes:

- Fuselage shortened by 2 m total
- 1 m removed forward
- 1 m removed aft
- Capacity reduced to approximately 80–90 passengers
- Reduced structural weight
- Improved takeoff performance margins

This variant prioritizes field performance over capacity, using fuselage reduction rather than wing or engine changes.

**Convair 880 Long-Fuselage (CFM56) — (High-Capacity Modernized Variant)** A significantly stretched Convair 880 exploring post-1970s modernization concepts.

[Main Article: Convair 880ER](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-880ER.html)

Structural Changes: 

- Fuselage lengthened by 5 m total
- 3 m forward stretch
- 2 m aft stretch
- MTOW increased to approximately 120–125 tonnes
- Passenger capacity substantially increased
- Propulsion and Stability Logic
- Replacement of original turbojets with CFM56-2

Forward fuselage stretch used to:

- Counter pitch-up tendencies associated with high-bypass engines
- Shift CG forward, following logic similar to the 737 Classic / CFM56 integration
- This variant studies the feasibility of re-engining and stretching a speed-focused airframe for later economic realities.

**Convair 990 Long-Fuselage (CFM56) — (Subsonic Optimized)** A stretched Convair 990 optimized for Mach 0.8 cruise, abandoning the original transonic design emphasis.

[Main Article: Convair 990 ER](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-900ER.html)

Key Changes:

- Fuselage stretch similar in magnitude to the 880 long variant
- Removal of anti-shock bodies
- Wing optimized for lower cruise Mach
- Simplified aerodynamic configuration
- Replacement of original turbojets with CFM56-2

This variant reframes the 990 as a capacity-focused aircraft rather than a transonic specialist.

**Convair 990 Research Variant (NASA-Owned, Semi-Historical)** An exploratory Convair 990 variant configured for research purposes.

[Main Article: Convair 990 NASA](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-900NASA.html)

Characteristics:

- Anti-shock bodies removed
- Clean wing configuration
- Retention of original fuselage length
- Treated as a NASA-owned experimental aircraft

Bonus Aircraft:

- Has a modified wingtip, inspired by Boeing 777's Racked Winglet
- Transponder antenna reduced in size using modern equipment

This configuration exists as a plausible research airframe, suitable for aerodynamic, stability, or propulsion studies.

**Convair 990 Short and Long Variants (Turbojet) — (Exploratory Geometry Studies)** Two additional Convair 990 configurations exploring fuselage length variation while retaining original turbojet propulsion.

Configurations

- Shortened 990: −2 m fuselage
  - [Main Aerticle: Convair 990SP](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-900SP.html)
- Lengthened 990: +2 m fuselage
  - [Main Article: Convair 990LB](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/cad-convair-900LB.html)

Characteristics:

- Original turbojet engines retained
- Minimal systems changes
- These variants exist primarily to study mass distribution, stability, and aerodynamic sensitivity rather than operational feasibility.
- CAD Methodology

# All aircraft in this family are modeled as:

- Fully lofted NURBS surfaces
- Solid fuselage, wing, and nacelle geometry
- Parametric and dimensionally consistent
- Variant-specific geometry preserved
- Suitable for analysis, comparison, and fabrication
- Speculative variants are clearly labeled and never presented as historical fact.

# Why the Convair Family Matters

The Convair 880 and 990 illustrate:

- The limits of speed-first commercial aircraft design
- Early attempts at transonic optimization
- Trade-offs between aerodynamic ambition and operational economics
- A fertile platform for derivative and modernization studies

By extending the family with plausible what-if variants, this repository explores paths not taken, grounded in real engineering logic.

# Repository Intent

This project is intended for:

- Aerospace engineers and students
- CAD and geometry specialists
- Aircraft configuration researchers
- Aviation historians and enthusiasts

This is not a visual mesh pack. The emphasis is on engineering geometry, design trade-offs, and configuration evolution.

## See Also Different Aircraft of the Era

- [Dassault Mercure](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/dassault-mercure.html)
- [Vickers VC10](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/vc10.html)
- [VFW-614](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/VFW614.html)
- [Tu-134](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/products/Tu-134.html)

## Back to Home

- [Back to Aircraft Products Index](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/)
- [Back to Main Home All Products Index](https://okb1creativedesignbureau-spec.github.io/OKB-1_Creative_Design_Bureau/aircraft-index.html)
