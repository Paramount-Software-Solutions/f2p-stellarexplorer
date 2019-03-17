import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {FormattedMessage, injectIntl} from 'react-intl'
import PaymentButton from '../Input'
import LanguageSelector from './LanguageSelector'
import NetworkSelector from './NetworkSelector'
import logoImg from '../../img/logo.png'


class Header extends React.Component {
	render() {
		const {formatMessage} = this.props.intl
		return (
			<Navbar fluid fixedTop collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">
							<span className="brand-text">Kin Explorer</span>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullRight>
						<LanguageSelector
							language={this.props.language}
							switcher={this.props.languageSwitcher}
						/>
					</Navbar.Form>
					<Navbar.Form pullRight>
						<NetworkSelector
							network={this.props.network}
							switcher={this.props.networkSwitcher}
						/>
					</Navbar.Form>
					<Navbar.Form pullRight>
						<PaymentButton
							filterFn={null}
							label={"Donate"}
							url={'_blank'}
							destinationId='GBM6GP3FDOU2T2XLFYVWBS4NJIOFBA7HEQ6BXIXCDDKZUFEZRYGU6TL5'
							asset_code={null}
							asset_issuer={null}
						/>
					</Navbar.Form>
					<Nav>
						<LinkContainer to="/operations">
							<NavItem>
								<FormattedMessage id="operations" />
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/txs">
							<NavItem>
								<FormattedMessage id="transactions" />
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/ledgers">
							<NavItem>
								<FormattedMessage id="ledgers" />
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/effects">
							<NavItem>
								<FormattedMessage id="effects" />
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/payments">
							<NavItem>
								<FormattedMessage id="payments" />
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/statistics">
							<NavItem>
								Statistics
							</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default injectIntl(Header)
