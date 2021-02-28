const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetwork = hostname => {
  if (hostname === 'explorer.farm2plate.io' || hostname === 'publicnet.local')
    return networks.public
  else if (hostname === 'testexp.farm2plate.io' || hostname === 'testnet.local')
    return networks.test
  else return networks.public
}

export {networks as default, hostnameToNetwork}
