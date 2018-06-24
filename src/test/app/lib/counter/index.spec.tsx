import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon, { spy } from 'sinon';
import Counter from 'lib/counter';

describe('<Counter />', () => {
  const onCountChange = sinon.spy();
  const initialCount = 11;
  const wrapper = mount(<Counter initialCount={initialCount} onCountChange={onCountChange} />);

  it('should add count', () => {
    wrapper.find('button.add').simulate('click');
    expect(wrapper.state().count).to.equal(initialCount + 1);
  });

  it('should call once at onCountChange', () => {
    expect(onCountChange.calledOnce).to.equal(true);
  });

  it('should minus count', () => {
    wrapper.find('button.minus').simulate('click');
    expect(wrapper.state().count).to.equal(initialCount);
  });

  it('should call twice at onCountChange', () => {
    expect(onCountChange.calledTwice).to.equal(true);
  });

});
