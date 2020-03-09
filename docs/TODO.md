# Layouts
* X- and Y-box as flexbox variants.
  * Consider if the grid ones do anything these can't. Grid one-dim boxes basically just divide space equally among components.
* Proper grid container with editor that allows one to add support lines real time. First one decides what unit to use, then just drag out the support line.
  * Units are important because some are relative while others have absolute size. Investigate all different kinds of units.
  * How do key combos map to a grid layout?
* Should leafs be responsible for window decoration?
  * If yes, how? Does placing it in the shadow dom mess with things like apps trying to fill the container? If so, leaves need to create yet another box inside them for the app.
* Force-directed layouts where apps implement a function (width,height) -> (forces: X+-, Y+-)
  * Borrow the java terminology of preferred width, height but take it further by using this function.
  * If function creation is too complicated, simple factory methods could be created that allows some standard behaviours like snapping to different modes (small, medium, large version of app layout for example) 
* Floating
* Gravity based (windows cluster in the middle, use zoom/pan to navigate and drag/drop to move things around)
* Zoom layout - One single container tree that the user zooms around
* Layout editing mode

# Windows/containers
* Top bar
	* Standard top bar
	* Bar that shows up when hovering window
	* Corner that one can hover for info like title, size and such
* Multi-window apps - how?
* Show same app in different windows - how?
* Convention: an app has a settings view, this is shown on the back of the regular window by flipping it over

# Moving and sizing windows
* Will depend on what layout is used (for example, if force directed: scaling up means adding some force or multiplying existing force)
* Container creation, deletion (X-box in X-box can be rationalized away to a single X-box)

# Inter app comm
* DBus like event emitter

# Layers
* Bottom, main and top layer at least. Top layer is for things like notifications, sticky windows, note app etc. Hide/unhide easily.
 * Leaning towards as many layers as one likes. Setting the clickability etc is decided by the container type.

# Priority
* XY flex versions
* Testing with some real apps
  * JSON api watcher. Simply poll api and show results.
  * IFrame/web browser including faking a larger screen.
  * JS textarea with run button a la observable[website] for d3 stuff