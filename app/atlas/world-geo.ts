// Simplified continent shapes drawn at rough lat/lng coordinates.
// Projected via the same equirectangular projection as the program pins.
// Not geographically precise — just enough to give the map visual context.
// For production, replace with proper Natural Earth simplified GeoJSON.

export const worldGeo: { d: string; name: string }[] = [
  {
    name: "North America",
    d: "M 100 70 L 180 60 L 240 80 L 280 110 L 290 140 L 270 170 L 250 200 L 220 230 L 190 250 L 170 240 L 150 220 L 130 200 L 110 180 L 95 150 L 90 120 Z",
  },
  {
    name: "Central America",
    d: "M 220 230 L 250 240 L 260 260 L 245 275 L 225 270 L 215 250 Z",
  },
  {
    name: "South America",
    d: "M 250 280 L 290 270 L 310 290 L 320 320 L 315 360 L 300 400 L 280 430 L 260 440 L 245 420 L 240 380 L 245 340 L 248 310 Z",
  },
  {
    name: "Greenland",
    d: "M 300 50 L 340 45 L 360 60 L 355 90 L 330 100 L 305 90 L 295 70 Z",
  },
  {
    name: "Europe (incl Iceland)",
    d: "M 440 80 L 470 70 L 510 75 L 540 90 L 555 110 L 545 140 L 515 155 L 480 160 L 460 145 L 445 125 L 435 100 Z",
  },
  {
    name: "Africa",
    d: "M 480 200 L 530 195 L 570 210 L 590 240 L 600 280 L 595 320 L 580 360 L 555 390 L 525 410 L 500 405 L 480 380 L 470 350 L 465 310 L 470 270 L 475 235 Z",
  },
  {
    name: "Middle East",
    d: "M 575 175 L 605 170 L 625 185 L 635 210 L 620 230 L 595 235 L 575 215 L 568 195 Z",
  },
  {
    name: "Russia / North Asia",
    d: "M 555 80 L 650 60 L 760 65 L 850 75 L 880 95 L 870 130 L 820 145 L 760 150 L 700 145 L 640 140 L 590 130 L 565 110 Z",
  },
  {
    name: "South / Southeast Asia",
    d: "M 640 180 L 680 175 L 720 185 L 750 200 L 770 230 L 765 260 L 745 280 L 720 285 L 695 275 L 670 255 L 650 230 L 638 205 Z",
  },
  {
    name: "China / East Asia",
    d: "M 740 145 L 800 140 L 850 150 L 870 175 L 860 205 L 830 220 L 790 225 L 760 215 L 745 195 L 738 170 Z",
  },
  {
    name: "Japan",
    d: "M 875 175 L 895 170 L 905 185 L 900 210 L 885 215 L 875 200 L 870 185 Z",
  },
  {
    name: "Indonesia / Philippines",
    d: "M 750 285 L 810 280 L 850 290 L 855 310 L 820 320 L 780 318 L 755 305 Z",
  },
  {
    name: "Australia",
    d: "M 800 350 L 870 345 L 910 360 L 920 390 L 895 410 L 850 420 L 815 410 L 800 385 Z",
  },
  {
    name: "New Zealand",
    d: "M 925 410 L 945 405 L 950 425 L 940 440 L 925 435 Z",
  },
];
