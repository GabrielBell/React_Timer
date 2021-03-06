var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');


//test utils allows you to render a component so you can call its methods for testing. 
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
	it('should exist', ()=> {
		expect(Clock).toExist();
	});
	describe('render', () => {
		it('should render clock to output', () => {
			var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);

		});
	});
	describe('formatSeconds',() => {
		it('should format seconds', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 615;
			var expected= '10:15';
			var actual= clock.formatSeconds(seconds);
			expect(actual).toBe(expected);
		});
		it('should format seconds when min/sec are less than 10', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 61;
			var expected= '01:01';
			var actual= clock.formatSeconds(seconds);
			expect(actual).toBe(expected);
		})
	});
});