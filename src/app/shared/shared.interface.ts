/**
 * @alias Shared Module
 * @description Select color by name
 * @enum COLOR_NAME
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
 * @alias Shared Module
 * @description Select color by name
 * @constant COLOR_HEX The hexadecimal value of color
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
 * @alias Article Component
 * @constant MARKDOWN_PATH markdown files' base path
 */
const MARKDOWN_PATH: string = '/assets/markdown/'
/**
 * @alias Article Component
 * @constant PDF_PATH pdf files' base path
 */
const PDF_PATH: string = '/assets/pdf/'


/**
 * @alias Message Component & Service
 * @class Popup
 */
class Popup {
  action?: string
  color: COLOR_NAME = COLOR_NAME.default
  icon?: string
  message: string
  method?: string
}
/**
 * @alias Message Component & Service
 * @instance Alert
 */
interface Alert {
  message: string
  onAccept: () => void
}


/**
 * @alias Grid Component & Service
 * @interface DatagridItem
 */
interface DatagridItem {
  id: number
  name: string
}
/**
 * @alias Grid Component & Service
 * @constant EXAMPLE_DATA Example data
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

/**
 * @alias App Module
 * @interface Response Response of HTTP Request
 */
interface Response<T> {
  data: Array<T>
  message: string
  success: boolean
}

/**
 * @alias MatProgressBar Module
 * @alias MatProgressSpinner Module
 * @interface Progress Progress Configure
 */
interface Progress {
  color: string
  mode: string
  value?: number
  bufferValue?: number
}
/**
 * @alias MatProgressBar Module
 * @alias MatProgressSpinner Module
 * @constant PROGRESS_BUFFER Progress Configure if Buffer
 */
const PROGRESS_BUFFER: Progress = {
  color: 'primary',
  mode: 'buffer',
  value: 30,
  bufferValue: 70
}
/**
 * @alias MatProgressBar Module
 * @alias MatProgressSpinner Module
 * @constant PROGRESS_DONE Progress Configure if Done
 */
const PROGRESS_DONE: Progress = {
  color: 'primary',
  mode: 'determinate',
  value: 100,
  bufferValue: 100
}
/**
 * @alias MatProgressBar Module
 * @alias MatProgressSpinner Module
 * @constant PROGRESS_QUERY Progress Configure if Query
 */
const PROGRESS_QUERY: Progress = {
  color: 'primary',
  mode: 'query'
}
/**
 * @alias MatProgressBar Module
 * @alias MatProgressSpinner Module
 * @constant PROGRESS_WHEN Progress Configure if When
 */
const PROGRESS_WHEN: Progress = {
  color: 'primary',
  mode: 'indeterminate'
}

export {
  COLOR_NAME,
  COLOR_HEX,

  EXAMPLE_DATA,

  MARKDOWN_PATH,
  PDF_PATH,

  PROGRESS_BUFFER,
  PROGRESS_DONE,
  PROGRESS_QUERY,
  PROGRESS_WHEN,

  Alert,
  Popup,

  DatagridItem,

  Progress,

  Response
}
