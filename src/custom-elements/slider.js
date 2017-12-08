import {findElements} from '../utils'
import content from '../content'
import {setExistingElement} from './'

class AppSlider extends HTMLElement {}
window.customElements.define('app-slider', AppSlider)

const Collection = {
  convert: ({dom}) => {
    const elements = findElements(dom, ['[data-wm-component="slider"]'])

    elements.length && setExistingElement('Collection')

    elements.forEach((element, index) => {
      const sliderElement = new AppSlider()
      if (element.className) {
        sliderElement.className = element.className
      }
      if (element.nodeName.toLowerCase() !== 'div') {
        sliderElement.dataset.TagName = element.nodeName.toLowerCase()
      }

      sliderElement.dataset.bind = `slider-${index}`
      sliderElement.dataset.Item = 'sliderItemcls#}'
      content.set(`slider-${index}`, [])

      const parentNode = element.parentElement
      parentNode.replaceChild(sliderElement, element)
    })
  }
}

export default Collection