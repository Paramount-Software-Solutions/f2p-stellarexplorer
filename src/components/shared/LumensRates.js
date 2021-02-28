import React from 'react'
import PropTypes from 'prop-types'
import FetchPonyfill from 'fetch-ponyfill'
import {storageInit} from '../../lib/utils';
const fetch = FetchPonyfill().fetch

const UPDATE_INTERVAL = 5 * 60 * 1000
const storage = storageInit()
class LumensRatesContainer extends React.PureComponent {
	componentDidMount() {
		this.updatePrice()
		this.intervalId = setInterval(
			() => this.updatePrice.bind(this),
			UPDATE_INTERVAL
		)
	}

	componentWillUnmount() {
		clearInterval(this.intervalId)
	}

	updatePrice() {
			const newState = {
				change: 0,
				usd: 1,
			}
			storage.setItem('currentRate', 1);
			this.setState(newState)
	}

	render() {
		if (!this.state) return null
		return <LumensRates {...this.state} />
	}
}

class LumensRates extends React.PureComponent {
	isPositive(changeNumStr) {
		const asFloat = Number.parseFloat(changeNumStr)
		return Number.isNaN(asFloat) === false && Number(asFloat) >= 0
	}

	renderChange(change) {
		const positive = this.isPositive(change)
		const valueStr = `${positive ? '+' : ''}${this.props.change}%`
		const style = {
			color: positive ? '#00c292' : '#fb9678',
		}
		return <span style={style}>{valueStr}</span>
	}

	render() {
		return (
			<span>
        F2P/USD: {this.props.usd} {this.renderChange(this.props.change)}
      </span>
		)
	}
}

LumensRates.propTypes = {
	change: PropTypes.string.isRequired,
	usd: PropTypes.string.isRequired,
}

export {LumensRatesContainer as default, LumensRates}
