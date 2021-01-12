import React from 'react'
import {ViewProps, ViewStyle} from 'react-native'

export interface FadeInOutProps extends ViewProps {
    visible: boolean
    duration?: number
    rotate?: boolean
    scale?: boolean
    style?: ViewStyle
    useNativeDriver?: boolean
}
export default class FadeInOut extends React.Component<FadeInOutProps, {}> {}
