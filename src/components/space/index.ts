import * as THREE from 'three'
import React from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Intersection } from 'three/src/core/Raycaster'
import Globe from '../globe'
import Stars from '../stars'
import * as CONST from '../../utils/constants'
// import * as Common from '../../utils/common'
import debounce from 'lodash.debounce'
// import { getCountryInfoByName, CountryInfoType } from '../../utils/data/country'
const LOADING_TIME = 2000;

export default class SpaceContainer {
    //three.js parts
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private globe: Globe
  private stars: Stars
  private renderer: THREE.WebGLRenderer
  private controller: OrbitControls

  //refs
  private appRef: React.RefObject<HTMLDivElement>
  private canvasRef: React.RefObject<HTMLDivElement>

  //selected country elements
//   private currentDescDiv: HTMLDivElement[] = []
//   private currentNameDiv: HTMLDivElement[] = []
//   private currentFlagImg: HTMLImageElement[] = []
//   private currentPicImg: HTMLImageElement[] = []

  //class name
//   private readonly PIC_VISIBLE_CLASS = 'pic-visible'
//   private readonly DESC_VISIBLE_CLASS = 'desc-visible'
//   private readonly FLAG_VISIBLE_CLASS = 'flag-visible'
//   private readonly NAME_VISIBLE_CLASS = 'name-visible'

  private HEIGHT!: number
  private WIDTH!: number

  /**
   * globe is moving or not
   * @type {boolean}
   */
  private isMoveGlobe = true

  /**
   * mouse is on the country point or not
   * @type {boolean}
   */
  // private isOnCountryPoint = false

  /**
   * country info is closed or not
   * @type {boolean}
   */
  // private isClosingCountryInfo = false

  constructor(
    appRef: React.RefObject<HTMLDivElement>,
    canvasRef: React.RefObject<HTMLDivElement>,
  ) {
    this.appRef = appRef
    this.canvasRef = canvasRef
    this.WIDTH = window.innerWidth
    this.HEIGHT = window.innerHeight

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.WIDTH / this.HEIGHT,
      0.1,
      1000,
    )
    this.globe = new Globe()
    this.renderer = new THREE.WebGLRenderer({ alpha: true }) //alpha = transparent
    this.controller = new OrbitControls(this.camera, this.renderer.domElement)
    this.stars = new Stars()
    this.createLight()
    this.createGeometry()
    this.createRenderer()
    this.trackControll()
    this.setResizeEvent()
    this.animate()
    this.firstAnimate()
  }

  private createLight(): void {
    const ambientLight = new THREE.AmbientLight(CONST.COLOR.AMBIENT_LIGHT)
    this.scene.add(ambientLight)
  }

  private createGeometry(): void {
    this.setCamPosByCountryIndex(0) //set default cam position

    // this.canvasRef.current!.addEventListener(
    //   CONST.EVENT.MOUSE_MOVE,
    //   this.handleMouseMove,
    // )

    // this.canvasRef.current!.addEventListener(
    //   CONST.EVENT.TOUCH_START,
    //   this.handleMouseMove,
    // ) //for smartphone
    
    this.scene.add(this.stars)
    this.scene.add(this.globe)
  }

  /**
   * set camera position to japan
   * @param {number} countryIndex
   */
  private setCamPosByCountryIndex(countryIndex: number): void {
    const center = new THREE.Vector3() //center position (地核)
    const city = this.globe.countryPoints[countryIndex].position

    //tokyo - center
    let centerVector = city.clone().sub(center)
    //(normalize)
    centerVector = centerVector.normalize()
    // let targetVector = centerVector.clone().negate();
    let targetVector = centerVector.clone()
    
    const distance = 180
    targetVector = targetVector.multiplyScalar(distance)
    //camera position set
    const camPos = targetVector.add(this.globe.position)

    this.camera.position.copy(camPos)
  }

  private createRenderer(): void {
    this.renderer.setSize(this.WIDTH, this.HEIGHT)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = true
    this.canvasRef.current!.appendChild(this.renderer.domElement)
  }

  private trackControll(): void {
    this.controller.minDistance = 170
    this.controller.maxDistance = 200
    this.controller.maxPolarAngle = Math.PI / 1.5
    this.controller.enablePan = false
    this.controller.enableZoom = false
    this.controller.enableDamping = true
    this.controller.minPolarAngle = 0.8
    this.controller.maxPolarAngle = 2.4
    this.controller.dampingFactor = 0.17
    this.controller.rotateSpeed = 0.17
  }

  private setResizeEvent(): void {
    window.addEventListener(
      CONST.EVENT.RESIZE,
      debounce(() => {
        this.HEIGHT = window.innerHeight
        this.WIDTH = window.innerWidth
        this.renderer.setSize(this.WIDTH, this.HEIGHT)
        this.camera.aspect = this.WIDTH / this.HEIGHT
        this.camera.updateProjectionMatrix()
      }, 50),
    )
  }

  private animate(): void {
    requestAnimationFrame(() => {
      this.animate()
    })

    if (this.isMoveGlobe) this.globe.update()
    this.stars.update()
    this.controller.update()
    this.renderer.render(this.scene, this.camera)
  }

  // private handleMouseMove = (event:MouseEvent): void => {
  //   if (this.isOnCountryPoint || this.isClosingCountryInfo) return

  //   const initializedMousePos = Common.getInitializedMousePosByMouseEvent(event)
  //   const intersects = this.getObjOnMouse(initializedMousePos)
  //   if (intersects.length > 0) {
  //     this.verifyOnCountryPoint(intersects)
  //   }
  // }

  private firstAnimate(): void {
    this.isMoveGlobe = false
    // setTimeout(() => {
    //   this.showCountryInfo(
    //     '',
    //     window.innerHeight / 2,
    //     window.innerWidth / 2,
    //   )
    // }, LOADING_TIME + 500)

    // setTimeout(() => {
    //   const countryInfo = getCountryInfoByName('japan')
    //   this.closePic(countryInfo)
    //   this.closeFlag(countryInfo)
    //   this.closeName(countryInfo)
    //   this.closeDesc(countryInfo)
    // }, LOADING_TIME + 2500)

    setTimeout(() => {
      this.isMoveGlobe = true
    }, LOADING_TIME + 3000)
  }

   /**
   * get some object which mouse hits by raycaster
   * (refer to https://ics.media/tutorial-three/raycast/)
   *
   * @param {{x: number; y: number}} initializedMousePos
   * @returns {Intersection[]}
   */
   private getObjOnMouse = (initializedMousePos: {
    x: number
    y: number
  }): Intersection[] => {
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(initializedMousePos, this.camera)

    const intersects = raycaster.intersectObjects(this.globe.children, true)
    return intersects
  }

   /**
   * verify mouse is on country point object or not
   *
   * @param {Intersection[]} intersects
   */
  //  private verifyOnCountryPoint = (intersects: Intersection[]): void => {
  //   let onCountryPointTmp = false
  //   this.globe.countryPoints.map((city) => {
  //     if (city === intersects[0].object.parent) {
  //       const { screenX, screenY } = this.calcCenterOfCountryPoint(intersects)
  //       this.showCountryInfo(city.name, screenY, screenX)
  //       onCountryPointTmp = true
  //       this.isMoveGlobe = false
  //     }
  //     this.isOnCountryPoint = onCountryPointTmp
  //   })
  // }

   /**
   * get center coordinate of object which mouse hits
   * mouse on point object
   *
   * @param {Intersection[]} intersects
   * @returns {{screenX: number; screenY: number}}
   */
  //  private calcCenterOfCountryPoint = (
  //   intersects: Intersection[],
  // ): { screenX: number; screenY: number } => {
  //   const box3 = new THREE.Box3().setFromObject(intersects[0].object)
  //   const centerOfObj = box3.getCenter(new THREE.Vector3())
  //   const objVector3 = centerOfObj.project(this.camera).clone()

  //   //screen parameter)
  //   const screenX = (this.WIDTH / 2) * (objVector3.x + 1.0)
  //   const screenY = (this.HEIGHT / 2) * (-objVector3.y + 1.0)

  //   return { screenX, screenY }
  // }

  // private showCountryInfo = (
  //   cityName: string,
  //   screenY: number,
  //   screenX: number,
  // ): void => {
  //   const countryInfo = getCountryInfoByName(cityName)
  //   this.showPic(countryInfo, screenY, screenX)
  //   this.showFlag(countryInfo, screenY, screenX)
  //   this.showName(countryInfo, screenY, screenX)
  //   this.showDesc(countryInfo, screenY, screenX)
  // }

}

// if ( WebGL.isWebGLAvailable() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }