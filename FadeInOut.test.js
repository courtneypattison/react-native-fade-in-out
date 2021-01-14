import {Animated} from 'react-native';
import {mount, shallow} from 'enzyme';

import FadeInOut from './FadeInOut';

function getComponent(props = {}) {
  return (<FadeInOut {...props}></FadeInOut>);
}

function getShallowWrapper(props = {}) {
  return shallow(getComponent(props));
}

function getMountedWrapper(props = {}) {
  return mount(getComponent(props));
}

describe('FadeInOut', () => {
  it('should render {opacity: 1}', () => {
    const wrapper = getShallowWrapper({visible: true});

    expect(wrapper.getElement()).toMatchSnapshot();
    expect(wrapper).toHaveStyle('opacity', new Animated.Value(1));
  });

  it('should render {opacity: 0}', () => {
    const wrapper = getShallowWrapper({visible: false});

    expect(wrapper.getElement()).toMatchSnapshot();
    expect(wrapper).toHaveStyle('opacity', new Animated.Value(0));
  });

  it('should change opacity from 1 to 0', () => {
    jest.useFakeTimers();
    let wrapper = getMountedWrapper({visible: true});
    
    expect(wrapper.find('AnimatedComponent').prop('style').opacity._value).toEqual(1);
    
    wrapper.setProps({visible: false});
    jest.runAllTimers();
    
    expect(wrapper.find('AnimatedComponent').prop('style').opacity._value).toEqual(0);
  });

  it('should not change opacity when props stay the same', () => {
    const wrapper = getShallowWrapper({visible: true});

    expect(wrapper).toHaveStyle('opacity', new Animated.Value(1));
    wrapper.setProps({visible: true});
    expect(wrapper).toHaveStyle('opacity', new Animated.Value(1));
  });

  it('should render transform with perspective, scale, and rotate', () => {
    const wrapper = getShallowWrapper({visible: true, scale: true, rotate: true});

    expect(wrapper.getElement()).toMatchSnapshot();
    expect(wrapper.get(0).props.style.transform[0]).toHaveProperty('perspective', 1000);
    expect(wrapper.get(0).props.style.transform[1]).toHaveProperty('scale', new Animated.Value(1));
    expect(wrapper.get(0).props.style.transform[2].rotate);
  });
});
