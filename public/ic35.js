// when pushing $mod, show the layout with numbers, colors, etc
// Overlay keys and how they will change the layout
// The main actions are: Move around in layout
// Move to parent

// idea
// - select windows just like on i3
// $mod something selects parent BOX to move that around. could be moving 4 widgets
// [essentially force directed flexbox with nonlinear curve. consider how for example an xbox in an ybox should push on is edges. Combine children forces? max child force? leave configurable through function just like the standard. given(x,y,childforces, how much force to exert?)]For each window, have a configurable (bezier?) function for how much pressure it exerts in (height/width) X+-,Y+- diirections depending on its current dimensions
// the "gravity" layout. Windows pull together until they bump up against one another.then, allow user drag&move, to allow rough positioning. Gravity then ensures no "holes". This layout would work best with zoom/pan

// Properties containers _can_ have:
// force(x,y,[children], [POSSIBLY incomingforces:top,bottom,left,right])
//   depending on incoming force to generate outgoing force is hacky and might lead to problems and breaks the idea that parent box should handle sizing
//   width,height is a proxy for how much the app has been pushed either way. likely to be built as mixins and then programmers set preferred sizes and a few other variables
//

// Another idea is to let (height,width) simply map to some size
// in any case: f(height,width)= some value we use to scale a window relative to others
// the user could be allowed to add "extra power" to some squeezed tile to make it bigger. This way, devs can design the grow/shrink curve such that the user can easily just add some power and it's bigger
// At minimum size (or hard lock in size) start scaling down proportionally and leaving empty space

// With this app + nice widgets (and possibly plugins for computer data like disk etc)
// people could easily make a nice "dash" screen simply by tuning window/layout parameters and the css
// Ability to hook up library of d3 charts to anything that can be fetched as a number
// KILLER live visualisations super easy
// cherry can be used to extract data from uncooperative sites to easily jury-rig them into
// Layouts of widgets can be floating mode + no background
// cool things like the widgets slowly "breathing" or gently moving around as if touched by wind can be done

// zoom layout - one big canvas to place windows, workspaces are visited by bookmarking different zooms+translations

// since a layout has a restricted container to work in, and complete control of the windows inside, it can do basically anything

// idea> "untouchable" top layer. keep any HUD widgets here

// lots of potential 3d effects, for example when showing boxes and how windows fit into different containers, in containers etc
// Alt-tabbing windows

// Standard i3 layout with flipping+moving+row/column switching is v good though. Better hierarchy management would be good though
// Somthings needs to cover the "gridlines" idea where user uses GUI to draw grid + allocate sapace for apps. Some layouts not possible without grid and moving gridlines
// Implement VBox, HBox using both flexbox and grid. Even if grid is its own layout, some may prefer grid for 1d things or the alignment ease
// gui tool for gridlines needed (real time tweaking all params too, preferably with knobs)

// Floating layout where windows automatically rearrange into a tiled blob in the middle where the user can then zoom in

// "take element from a website" by having url+css selector.
// The same thing is rendered @ client with all styling/sizing left, then scaled

// The building block of this UI management could be used for the data flow projects

// ambient music radio - GREAT widget

// Change to Ramda module

// need command pallete like sublime. or like rofi. an overpowered easily called upon text based way to fetch data and compolete tasks
// most things can be json config, simply open/save some json to be backwhere you were

// KEY NAVIGATION NEXT
// needs an overlay that guides the user in the beginning as soon as $mod is pressed

// Widget: Notes block. Scrolling it moves pages.
// Robust self-quant app. Excellent for a dashboard

// Once fed a template, returns a factory function for shadow dom contents.
// Keeps an element to copy the contents from which avoids creating new elements all the time

// Tons of iftt style widgets. Email, when someone responds do x, desktop notifications
// Investigate if react components can be encapsulated and run as widgets
// Investigate if vue, ..... components can be encapsulated and run as widgets

// Widget creator wizard:
// Data stream obtaining (twitter, your email, spotify, news sites, using cherry, puppeteer (worst case), official APIs, guerilla use of APIs used by one page apps, etc..)
// Mapping to a component ui (default: show json as tree or table data as a table)
// Good native embedding components for image, video and sound
// Multisearch engine

// Idea from spin transform:
// Turning over containers, having one at the back too. Rememer compiz cube? Same but with any container
// backside by convention is "settings" - turning over the main container reveals website settings

// Allow containers COMPLETE freedom. They can "send out" markup by spawning child windows

// useless containers need to be collected. no use to hace xboxinxboxinxbox

// Wolframalpha and other fun AI projects would make good apps
// wikis too

// min-height v overflow hidden - so that the containers will contract all the way. Overflow hiding messes with 3d stuff

// top bars could just as well be sidebars.. title X minimize etc in fact often more space on the edge
// top bars could appear when touching app corner

// for containers with simple <stye><slot> shadowDOMs the entire thing can be passed along when i container morphs into another kind
// skip window bars completely_

// sidebar easily implemented, just a leaf in an xbox

// ideally apps should be able to emit events (think dbus) and have ways to introduce new key combos or reinterpret old ones (what does "send window right") mean to a sticky layout? next workspace?
// perhaps $mod+$mod2+<KEYS> could be used by apps while the main container "owns" $mod
// forward/back buttons would be awesome in terms of switching windows. Alt-tab + last used windows, in practice.

// stressing again /> SHOW THE USER THEY LAYOUT TREE AND KEYCOMBOS EFFECT ON IT SOMEHOW. Fantastic helper view.

// frontside/backside and flipping windows: a widget could have a settings pane that is shown on turning it. Or whatever backside they want. flipping an app to change settings and then back to main view sounds powerful. Worst case the app can have a menu there for other pane
// Allow rotating containers,easy way to right the layout
// compiz-cube

// apps can use css style queries to find and interface with other apps.

// non-square windows? can be handled as sqare by legacy, but could have some kind of other layout. Six-pinted apps? lays out well like on a caming board
// likewise clipping windows is somethings beneficial, this makes the window non-square

// same app in multiple workspace views?
// or leave that to devs, who can work out a system for doing that

// how to handle top bar without an extra Ybox? padding and then using an absolute element to create the bar

// components needs onchildremoved and onchildadded callbacks

// interface with github for easy plugin install. just drop repo name "yes i understand i could be hacked", done
// Any way to create lower-privilege apps to run in isolation, besides iframe? (if not trusting app, run in iframe. loses "wbus" support though)
// app store-ish style to install apps

// on moving windows.. it would be better to navigate to the extact joining point where to other windows meet and say "I want to wedge in here".
// Should not be too hard: pick window like i3, then pick edge to wedge into

// hooking the apps up so they can perform actions on remote sites for you would be cool but hard.. session cookies etc. Puppeteer probably necessary along with automated procedures
// personal ai assistant in a window? simple one that just hears and does

// locking windows and containers?
// workspace = container = layer = leaf etc

// window finder? view for all windows..

// zooming, panning, flipping shit etc in a workspace (meaning the computer UI) needs to be explored more

// grid layout next
// als recreate grid but with force directed lines (and locked ones). f(height,width) as mentioned above. dig into the idea and consider
// same idea as items dynamically altering their own flex-glow flex-shrink properties

// Note: Grid lines can be named. No problem then in popping a few more in there to support some app. All others wont need to recalculate

// extra user defined stylesheet
// allow also to inherit parent stylesheet and extend

// create a web browser capable of faking being a mobile phone (smaller screen, can fit many on one pc screen)

// Grid layout edit mode: look at inkscape/indesign. Allow locking support lines, move using a triangle at the margins
// Support overlapping windows, or block that. Config option

// The 3d view likely useful for moving containers around and showing which one is selected
// 3d view likely useful to inspect websites overall...

// Problem:
// How do custom elements style themselves reactively based on parent container? iframe, documentFragment, etc? will they still be able to listen to events inside main dom then?
// Standard css reactive design should work somehow. They should see their container as the viewport, and be able to write media queries and such
// (feature:allow user to scale apps, so they see their viewport as bigger than it is)

// Idea:
// hotkey shows container tree, highlights currently selected one
// semitransparent (alpha 0.2 maybe)
// drag/drop containers in other containers
// 3d view (as in the readme) + drag and drop would be awesome.
// also have (by the side) "buttons" for all installed container types where one can "grab a new container" and insert into tree

// $mod+enter, enter container, select first element
// $mof+backspace, select parent of currently selected container
// $mod+arrows like in d3

// thought: pressing $mod should add a layer that shows a cheat sheet of shortcut commands until the user clicks a button, "stop showing this"

// allow "popping" container into new browser window. this way there's continuity with the users own window manager
// an i3 user could effectively pop a component into their own tiling wm and have it work reasonably the same as in browser

// move shit around using selectors.. somebox.appendChild(document.querySelectorAll('z-box')) // steals all zboxes from alla containers and puts them in somebox

// commandpalette

// html elements just need a height property and they can be used to build 3d things

// IntersectionObserver - useful later for when to start scaling children

// NEXT
// solve template instantiation issue in a cleaner way
// signalling preferred width issue
// create tree debug view. special key $mod+something adds a layer that shows the current hierarchy of containers (including itself)
// wbus (web dbus). perhaps just listen to closest parent that is also "a root container".
// there, clients register listeners to a string namespace (one can listen to for example "MusicPlayer:songChange")
// Not really any need to implement anything but the convention of listening within the "root" container, however that is determined

// if debug, add a debug child to the root element that is:
// absolutely positioned - does not interfere with child positioning
// always on top of child elements
// semitransparent white
// shows all:
//  own properties of the object
//  all html-attributesfunction

/*
  Pass a html string
  It will be wrapped in a template element so that slots will work
  A factory that clones the template.content for each call will be returned
*/
/*
  W3WM-specific functions and utilities
*/
const Util = {
  createElementFactory (html) {
    const template = document.createElement('template')
    template.innerHTML = html
    return function get () { return document.importNode(template.content, true) }
  }
}

/* CONSTANTS */
const CONTAINER_SHADOW_CONFIG = { mode: 'open' }

/* CUSTOM ELEMENTS */
class W3WMContainer extends HTMLElement {
  constructor () {
    super()
    if (this.constructor === W3WMContainer) { throw new TypeError('Illegal constructor') }
    this.attachShadow(CONTAINER_SHADOW_CONFIG)
  }
  connectedCallback () { console.log(`[${this.constructor.name}] Container connected`) }
  disconnectedCallback () { console.log(`[${this.constructor.name}] Container disconnected`) }
  adoptedCallback () { console.log(`[${this.constructor.name}] Container adopted`) }
}
W3WMContainer.createShadowContentNode = Util.createElementFactory('<style></style><slot></slot>')

/*
* STACKING CONTAINER
* Forces full width of all children, stacks them in z-direction
*/
class ZBox extends W3WMContainer {
  constructor () { super() }
}
ZBox.initStyle = ``
ZBox.initMarkup = ``

class XBox extends W3WMContainer {
  constructor () {
    super()
  }
}
XBox.initStyle = `
:host {
  position:relative;
  display:grid;
  grid-auto-flow:column;
  place-items:stretch stretch;
  box-sizing:border-box;
  overflow:hidden;
}
`

class YBox extends W3WMContainer {
  constructor () {
    super()
  }
}
YBox.initStyle = `
:host {
  position:relative;
  display:grid;
  grid-auto-flow:row;
  place-items:stretch stretch;
  box-sizing:border-box;
  overflow:hidden;
}
::slotted(*) {}
`

class LeafBox extends W3WMContainer {
  constructor () {
    super()
  }
}

customElements.define('z-box', ZBox)
customElements.define('x-box', XBox)
customElements.define('y-box', YBox)
customElements.define('leaf-box', LeafBox)
