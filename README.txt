A project dedicated to reanimating lost functionality

Using Fusion 360, CAD parts were modeled. model is shown in this fusiun link
https://a360.co/3G8lnHn

From there each part was 3d printed.

4 long rubber muscles were constructed with rubber tubing, gorrilla tape, 1/4" fittings, 1/4"aluminium shaft, and mesh sleeve.

These muscles contract when pumped up with air.

The muscles were fastned with tape and zipties.

The software is a node.js server using the Johnny-five dependacy to control a standard firmata arduino. The code can read an analog myo muscle sensor and output signals to a relay board that trigger pnumatic solinoids

In addition an android app can be used to connect to the node.js server and manually control the air pressure outputs using tcp socket programing. Currently this only works on two devices on the same gateway(Pi on the phone's hotspot).
