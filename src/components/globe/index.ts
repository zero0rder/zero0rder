import * as THREE from 'three'
import GlobeImage from '../../assets/images/globe-dot-white.png'
import { countryInfos, CountryInfoType } from '../../utils/data/country'
import Maskon from '../../assets/images/maskon.jpg'
// import * as CONST from '../../utils/constants'

export default class Globe extends THREE.Group {
    public globe: THREE.Mesh
    public countryPoints: THREE.Group[] = []

    constructor() {
        super()

        const vpWidth = window.innerWidth
        const loader = new THREE.TextureLoader()
        const geometry = new THREE.SphereGeometry(
          vpWidth <= 425 ? 50 : vpWidth >= 925 ? 100 : 75, 
          60, 
          60
        )
        const material = new THREE.MeshPhongMaterial({
          map: loader.load(GlobeImage),
          bumpScale: 1.0,
          transparent: true,
          side: THREE.DoubleSide,
        })
        this.globe = new THREE.Mesh(geometry, material)
        this.globe.receiveShadow = true
        this.createCountryPoints()
    }

    public update = (): void => {
        this.globe.rotation.y += 0.002
    }
    
     /**
   * create place point objects
   */
  private createCountryPoints(): void {
    countryInfos.forEach((country: CountryInfoType) => {
      const latitude = country.latlng[0]
      const longitude = country.latlng[1]
      const point = new THREE.Group()
      point.name = country.name

      // this.createFlagOnGround(point)
      this.setPointPos(point, latitude, longitude)

      this.countryPoints.push(point)
      this.globe.add(point)
    })

    this.add(this.globe)
  }

  private createFlagOnGround(point: THREE.Group): void {
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(3, 32),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          Maskon,
          // `${CONST.PATH.IMG_JOURNEY_FLAG + point.name}.svg`,
        ),
        side: THREE.DoubleSide,
        name: 'point-ground',
        transparent: true,
        opacity: 0.8,
      }),
    )

    point.add(ground)
    ground.rotateX(Math.PI / 2)
  }

  private setPointPos(
    point: THREE.Group,
    latitude: number,
    longitude: number,
  ): void {
    point.position.copy(this.translateGeoCoords(latitude, longitude, 98))
    point.lookAt(new THREE.Vector3(0, 0, 0))
    point.rotateX(80)
    point.translateY(2.5)
  }

  /**
   * 
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius
   * @returns {Vector3}
   */
  private translateGeoCoords(
    latitude: number,
    longitude: number,
    radius: number,
  ): THREE.Vector3 {

    const phi = (latitude * Math.PI) / 180
    const theta = ((longitude - 180) * Math.PI) / 180
    const x = -radius * Math.cos(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi)
    const z = radius * Math.cos(phi) * Math.sin(theta)

    return new THREE.Vector3(x, y, z)
  }

}