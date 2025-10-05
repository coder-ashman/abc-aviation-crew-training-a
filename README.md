# Training A (Angular) Micro‑Frontend

This repository hosts the **Angular** training application for pilots.  It is integrated into the ABC Aviation platform via **single-spa** using the `single-spa-angular` schematic.  The app exposes a roster page and training assignment features.

To run this app independently you would typically use Angular CLI; however, when composed into the platform it is loaded via the import map defined in the root shell.

The file `src/main.single-spa.ts` registers the application with single-spa.  The `AppComponent` defined here is minimal; extend it to add roster filters, status chips and CSV export functionality.