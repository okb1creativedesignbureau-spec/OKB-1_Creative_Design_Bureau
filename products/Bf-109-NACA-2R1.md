# NACA 2R1 Airfoil Reconstruction Project — Me 109 Wing Geometry (Research Archive)

A one-month engineering archaeology project recreating historical airfoils with mathematical precision.

## Overview
This repository documents my complete reconstruction of the NACA 2R1-derived airfoil family used on the Messerschmitt Bf 109 wing. 
No ready-made datasets existed. No clean coordinate files. No standard NACA profiles. Only scattered photocopies, blurry museum scans, 
and partial references. So for one month, I rebuilt everything from zero — point by point — using a mix of mathematics, 
digitization, and mechanical engineering workflow. The result is a clean, professional-grade dataset of all major airfoil sections:

- 14.2% Root
- 12.8% Mid (Bf 109 E / Emil)
- 12.9% Mid (Bf 109 G / Gustav)
- 11.35% Tip (Late)
- 11.0% Tip (Early)

Each section now exists as:
- Plotted Excel sheets
- Clean XY coordinate lists
- CSV geometry (upper/lower)
- CAD models (DWG / STEP / STL)
- Reference diagrams & documentation

## Methodology — How I Reconstructed the Wing (Step by Step)
A complete engineering workflow, reverse-engineered from historical material.
This is the real pipeline I used to turn incomplete historical data into machinable, simulation-ready airfoils:

1. Trace the original Avia table
The only available geometric source was the Avia table.
I digitized it manually, capturing every chamber & thickness value.

2. Re-chamber the profile (mathematical reconstruction)
Using the official % thickness & chamber rules, I mathematically rebuilt the curvature for each section.

3. Convert raw values into CSV datasets
All initial results went into clean CSV files for upper and lower surfaces.

4. Transform data into XYZ curve space
Normalized and scaled results were imported into curve editors for further refinement.

5. Re-trace upper and lower surfaces
Every curve was redrawn manually to remove artifacts, flatten noise, and ensure smooth continuity.

6. Close the Trailing Edge (TE)
TE was joined using a thin, mathematically consistent edge to replicate the real aircraft geometry.

7. Shape the Leading Edge (LE)
LE was rebuilt from 0,0 using a curvature-preserving spline that mimics the historical round LE shape.

8. Re-plot the entire airfoil by hand
All points were re-sampled to maintain mathematical smoothness.

9. Rebuild the Excel master file
Plots, overlays, and reconstruction math were ported into a clean .xlsx.

10. Add 100+ precision points to the LE
To prevent CAD programs from treating the LE as a polygon or trapezoid,
I generated 100+ extra control points only for the leading edge.

This ensured that when imported into CAD or CFD software, the LE would generate a true round nose, not a faceted polygon.

## Available Packs (Gumroad)
You can download the finished dataset packs here:
- Pack A — Single Section Dataset

- Pack B — 3-Section Starter Pack

- Pack C — Full Reconstruction Bundle (All Sections + CAD + Raw Data)

I separated these for students, researchers, modelers, and engineers depending on what they need.

## Goal of the Project
To create the cleanest, most accessible, most accurate digital reconstruction of the NACA 2R1-derived Messerschmitt 109 wing airfoils — something that:
- can be used for CFD
- can be extruded in CAD
- can be exported for 3D printing
- can be compared with standard NACA series
- preserves historical engineering knowledge

This project is the result of countless hours of tracing, verifying, checking, and re-calculating until the curves behaved exactly like the original aerodynamic design intended.

## Repository Contents
- /Coordinate Data/ → CSV + TXT (upper/lower)
- /Plots & Excel/ → .xlsx master file + graphs
- /CAD Files/ → .dwg, .stl, .step
- /Reference/ → Diagrams, cleaned images, citations
- /Raw Reconstruction/ → Intermediate datasets & math

# If You Use This Work
A credit is appreciated, but not required.
I released this to help engineers, hobbyists, researchers, model builders, and anyone curious about historical aerodynamics.

[Back To Home]
