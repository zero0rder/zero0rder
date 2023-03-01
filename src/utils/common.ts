/**
 * TouchEvent
 * @param {MouseEvent | TouchEvent} event
 * @returns {{x: number; y: number}}
 */

export const getInitializedMousePosByMouseEvent = (
    e: MouseEvent | TouchEvent,
  ): { x: number; y: number } => {
    const element: HTMLDivElement = <HTMLDivElement>e.currentTarget
    let event: MouseEvent | TouchEvent = e
    let x!: number
    let y!: number
  
    // TODO: is it necessary code ???
    // if (e.nativeEvent) {
    //   event = e.nativeEvent
    // }
  
    if (event instanceof TouchEvent) {
      x = event.touches[0].clientX - element.offsetLeft
      y = event.touches[0].clientY - element.offsetTop
    } else if (event instanceof MouseEvent) {
      x = event.clientX - element.offsetLeft
      y = event.clientY - element.offsetTop
    }
  
    // canvas
    const w = element.offsetWidth
    const h = element.offsetHeight
  
    const initializedX = (x / w) * 2 - 1
    const initializedY = -(y / h) * 2 + 1
  
    return { x: initializedX, y: initializedY }
  }