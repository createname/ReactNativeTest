/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // MapView.js
import PropTypes from 'prop-types';
import React from 'react';
import {requireNativeComponent} from 'react-native';

export default class MapView extends React.Component {
  render() {
    return <RNTMap {...this.props} />;
  }
}

MapView.propTypes = {
  /**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
  zoomEnabled: PropTypes.bool,
  /**
   * 地图要显示的区域。
   *
   * 区域由中心点坐标和区域范围坐标来定义。
   *
   */
  region: PropTypes.shape({
    /**
     * 地图中心点的坐标。
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,

    /**
     * 最小/最大经、纬度间的距离。
     *
     */
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),
};

const RNTMap = requireNativeComponent('RNTMap', MapView);
