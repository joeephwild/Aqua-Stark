import { Game } from "./Game.tsx";

function App() {
  // const { connectors } = useInjectedConnectors({
  //   recommended: [argent(), braavos(), cartridgeConnector],
  // });

  return (
    <div>
      {/* <StarknetConfig
        chains={[mainnet, sepolia]}
        provider={publicProvider()}
        connectors={connectors}
        explorer={voyager}
        autoConnect={true}
      > */}
      {/* <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/aquariums" element={<AquariumsPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route
              path="/breeding-laboratory"
              element={<BreadingLaboratory />}
            />
            <Route path="/encyclopedia" element={<EncyclopediaPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/events" element={<EventsCalendar />} />
            <Route path="/trading-market" element={<TradingMarketPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/storage-page" element={<StorePage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes> */}
      <Game />
      {/* </StarknetConfig> */}
    </div>
  );
}

export default App;
