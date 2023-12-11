import type { CSSProperties } from 'vue'

export type DecorLineTopBottomAlign = `${'top' | 'bottom'}-${'right' | 'left'}`

export type DecorLineType = 'polyline' | 'straight'

export type DecorLineHash = {
  polyline: DecorLinePolyline
  straight: DecorLineShareProperties & DecorLineStraight<StraightLineStyle>
}

export type DecorLine<Type extends DecorLineType = DecorLineType> = {
  type: Type
  properties: DecorLineHash[Type]
}

export type DecorLineShareProperties = {
  offset?: number
  length?: number
  rotate?: number
  typeWriter?: boolean
  hightLightColor?: string
}

/* 单条直线的类型 */
export type StraightLineStyle = 'pin' | 'calibration'

type StraightLineHash = {
  pin: StraightPin
  calibration: StraightCalibration
}

export type DecorLineStraight<
  LineStyle extends StraightLineStyle = StraightLineStyle,
> = {
  lineStyle: LineStyle
} & StraightLineHash[LineStyle]

/* pin 钗直线 */
// height will be calculated by circleRadius
export type StraightPin = Partial<{
  width: number
  direction: 'left' | 'right'

  /* associated text*/
  content: string
  contentStyle: string | CSSProperties
  underText: string
  underTextStyle: string | CSSProperties

  /* associated svg*/
  circleRadius: number
  circleColor: string
  mainLineColor: string
  minorLineColor: string
}>

/* calibration 刻度直线 */
export type StraightCalibration = {
  content: string
  underText?: string
}

export type DecorLinePolyline = DecorLineShareProperties & {
  position: DecorLineTopBottomAlign
}
