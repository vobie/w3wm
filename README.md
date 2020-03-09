# w3wm
The goal of w3wm is to be a window manager for the web, providing a multi-layout space for small online widgets for use as a personal dashboard and quick information access. Inspiration comes from [i3wm](https://i3wm.org/), the applications [dmenu](http://tools.suckless.org/dmenu/) and [rofi](), the sublime3 command pallete.

![Layout debug view](/docs/ldebug.png "Debug view")

# Features
* Fetch data even from uncooperative sites and present in your own way, or create a relaxing side-screen with ambient music and running water
* Wrapping existing react, vue, polymer components as well as custom elements and simple iframes
* Containers have complete control over how they present their child containers and widgets
 * Default layouts will include tiling and floating containers as well as a layer container that can be used for tabbed views or cycling fullscreen apps
* Tree based approach to containers and windows, much like i3wm.
* See scribbles in main js file for some ideas on what to use it for

# Demo
* `npm install -g http-server`
* `http-server -c-1 -p 8082 public`
* go to `localhost:8082`
* You will see a debug view, two layered containers with transparent subcontainers. Not very useful by itself.
* Press K to see a 3D view with the two layers separated
* Press H to hide the upper layer
* Press J to to expand the lower layer, making its tree structure visible
  * The main elements used are called X, Y, and Z-boxes where each kind of container will stack other containers in.. the x, y, or z direction.
  * Leafs are containers that can host standard html markup and are meant to house widgets and applications