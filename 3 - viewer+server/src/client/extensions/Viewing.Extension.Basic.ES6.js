///////////////////////////////////////////////////////////////////////////////
// Basic viewer extension written in ES6
// by Philippe Leefsma, July 2015
//
///////////////////////////////////////////////////////////////////////////////

class BasicES6 extends Autodesk.Viewing.Extension {

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  constructor(viewer, options) {

    super(viewer, options)

    console.log(BasicES6.ExtensionId + ' Constructor')

    this.viewer = viewer
  }

  /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////
  static get ExtensionId() {

    return 'Viewing.Extension.BasicES6'
  }

  /////////////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////////////
  load() {

    alert("BasicES6 extension Loaded")
    
    return true
  }

  /////////////////////////////////////////////////////////////////
  // Unload callback
  //
  /////////////////////////////////////////////////////////////////
  unload() {
    
    alert("BasicES6 Unloaded")

    return true
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension(
  'Viewing.Extension.BasicES6',
  BasicES6)


