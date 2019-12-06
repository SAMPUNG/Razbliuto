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

const COLOR_HEX: Array<string> = [
  '#b0bec5', // accent
  '#212121', // default
  '#ffd740', // error    @Independently
  '#3f51b5', // info     @Independently
  '#c2185b', // primary
  '#69f0ae', // success  @Independently
  '#f44336', // warn
  '#f44336', // warning  @Independently
]

const MARKDOWN_PATH: string = './assets/markdown/'

class Popup {
  action?: string
  color: COLOR_NAME = COLOR_NAME.default
  icon?: string
  message: string
  method?: string
}
interface Alert {
  message: string
  onAccept: () => void
}

export {
  COLOR_NAME,
  COLOR_HEX,
  MARKDOWN_PATH,
  Popup,
  Alert
}
