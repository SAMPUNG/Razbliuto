/**
 * @enum COLOR_NAME
 * @description Select color by name
 * @alias Shared Module
 */
enum COLOR_NAME {
  accent,
  default,
  error,
  info,
  primary,
  success,
  warn,
  warning
}
/**
 * @constant COLOR_HEX The hexadecimal value of color
 * @description Select color by name
 * @alias Shared Module
 */
const COLOR_HEX: Array<string> = [
  '#b0bec5', // accent
  '#212121', // default
  '#ffd740', // error
  '#3f51b5', // info
  '#c2185b', // primary
  '#69f0ae', // success
  '#f44336', // warn
  '#f44336', // warning
]


/**
 * @constant MARKDOWN_PATH markdown files' base path
 * @alias Article Component
 */
const MARKDOWN_PATH: string = '/assets/markdown/'
/**
 * @constant PDF_PATH pdf files' base path
 * @alias Article Component
 */
const PDF_PATH: string = '/assets/pdf/'


/**
 * @class Popup
 * @alias Message Component & Service
 */
class Popup {
  action?: string
  color: COLOR_NAME = COLOR_NAME.default
  icon?: string
  message: string
  method?: string
}
/**
 * @instance Alert
 * @alias Message Component & Service
 */
interface Alert {
  message: string
  onAccept: () => void
}


/**
 * @interface DatagridItem
 * @alias Grid Component & Service
 */
interface DatagridItem {
  id: number
  name: string
}
/**
 * @constant EXAMPLE_DATA Example data
 * @alias Grid Component & Service
 */
const EXAMPLE_DATA: Array<DatagridItem> = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
  {id: 11, name: 'Sodium'},
  {id: 12, name: 'Magnesium'},
  {id: 13, name: 'Aluminum'},
  {id: 14, name: 'Silicon'},
  {id: 15, name: 'Phosphorus'},
  {id: 16, name: 'Sulfur'},
  {id: 17, name: 'Chlorine'},
  {id: 18, name: 'Argon'},
  {id: 19, name: 'Potassium'},
  {id: 20, name: 'Calcium'},
]

export interface Response<T> {
  data: Array<T>
  message: string
  success: boolean
}

export interface Progress {
  color: string
  mode: string
  value: number
  buffer: number
}

export {
  COLOR_NAME,
  COLOR_HEX,
  MARKDOWN_PATH,
  PDF_PATH,
  Popup,
  Alert,
  DatagridItem,
  EXAMPLE_DATA
}
