import React from 'react';
import {Animated, Text} from 'react-native';
import {shallow} from 'enzyme';

import FadeInOut, {DEFAULT_DURATION} from './FadeInOut';

jest.useFakeTimers();

describe('FadeInOut', () => {
  function getWrapper(props = {}) {
    return shallow(
      <FadeInOut {...props}>
        <Text>Dummy Text</Text>
      </FadeInOut>
    );
  }

  function getAnimValue(begin, end) {
    const animValue = new Animated.Value(begin);

    animValue.setValue(end);
    animValue.stopTracking();

    return animValue;
  }

  test('should render {opacity: 1}', () => {
    const wrapper = getWrapper({visible: true});

    expect(wrapper.getElement()).toMatchSnapshot();
    expect(wrapper).toHaveStyle('opacity', new Animated.Value(1));
  });

  test('should render {opacity: 0}', () => {
    const wrapper = getWrapper({visible: false});

    expect(wrapper.getElement()).toMatchSnapshot();
    expect(wrapper).toHaveStyle('opacity', new Animated.Value(0));
  });

  test('should change opacity from 1 to 0', () => {
    const wrapper = getWrapper({visible: true});

    expect(wrapper).toHaveStyle('opacity', new Animated.Value(1));
    wrapper.setProps({visible: false});
    jest.advanceTimersByTime(DEFAULT_DURATION);
    expect(wrapper).toHaveStyle('opacity', getAnimValue(1, 0));
  });

  test('should change opacity from 0 to 1', () => {
    const wrapper = getWrapper({visible: false});

    expect(wrapper).toHaveStyle('opacity', new Animated.Value(0));
    wrapper.setProps({visible: true});
    jest.advanceTimersByTime(DEFAULT_DURATION);
    expect(wrapper).toHaveStyle('opacity', getAnimValue(0, 1));
  });

  test('should not change opacity when props stay the same', () => {
    const wrapper = getWrapper({visible: true});

    expect(wrapper).toHaveStyle('opacity', new Animated.Value(1));
    wrapper.setProps({visible: true});
    expect(wrapper).toHaveStyle('opacity', new Animated.Value(1));
  });

  test('should render transform with perspective, scale, and rotate', () => {
    const wrapper = getWrapper({visible: true, scale: true, rotate: true});

    expect(wrapper.getElement()).toMatchSnapshot();
    expect(wrapper.get(0).props.style.transform[0]).toHaveProperty('perspective', 1000);
    expect(wrapper.get(0).props.style.transform[1]).toHaveProperty('scale', new Animated.Value(1));
    expect(wrapper.get(0).props.style.transform[2].rotate);
  });
});
