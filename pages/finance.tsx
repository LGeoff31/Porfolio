import React from "react";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";

const TERMINOLOGY: { term: string; definition: string }[] = [
  {
    term: "Bid",
    definition: "The highest price someone is willing to pay for something.",
  },
  {
    term: "Offer (Ask)",
    definition: "The lowest price someone is willing to sell something.",
  },
  {
    term: "Size",
    definition:
      "The amount of contracts or units one is willing to trade at a given price.",
  },
  {
    term: "Make a market",
    definition:
      "To provide bid and ask prices, along with sizes, for other market participants to trade against.",
  },
  {
    term: "Spread",
    definition: "The difference between the bid price and the ask price.",
  },
  {
    term: "Hedge",
    definition:
      "A trade taken to reduce the risk of price movements in an asset.",
  },
  {
    term: "Paper",
    definition:
      "The interested parties (clients, traders) transacting against market makers.",
  },
  {
    term: "Broker",
    definition:
      "An intermediary between buyers and sellers that facilitates trades.",
  },
  {
    term: "Tick size",
    definition:
      "The smallest allowable price increment between one level and the next.",
  },
  {
    term: "Queue priority",
    definition:
      "The structure that determines the order in which participants at the same price level are filled.",
  },
  {
    term: "Immediate or Cancel (IOC)",
    definition:
      "An order where any portion that can be filled immediately is executed; any remainder is cancelled.",
  },
  {
    term: "Good for Day (GFD)",
    definition:
      "An order that remains active until it is executed or until the end of the trading day.",
  },
  {
    term: "Good 'Til Cancelled (GTC)",
    definition:
      "An order that stays active until it is fully executed or explicitly cancelled.",
  },
  {
    term: "All or None (AON)",
    definition:
      "An order that must be executed in full or not executed at all.",
  },
  {
    term: "Fill or Kill (FOK)",
    definition:
      "An order that must be filled entirely and immediately, otherwise it is cancelled.",
  },
  {
    term: "One Cancels the Other (OCO)",
    definition:
      "A pair (or set) of linked orders where the execution of one automatically cancels the other.",
  },
];

const Finance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20 relative overflow-x-hidden">
      <Navbar useScrollLinks={false} />
      <div className="max-w-3xl mx-auto pt-24 px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-12 flex justify-center items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <BackButton />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-emerald-300 drop-shadow mb-3">
              Quantitative Finance
            </h1>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Market Maker</h2>
            <p className="text-gray-200 text-[15px] md:text-base leading-relaxed">
              Their goal is to provide liquidity to markets and facilitate price discovery by providing bids and offers to other market participants.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Terminology</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm md:text-base">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-emerald-300">
                      Term
                    </th>
                    <th className="px-4 py-3 font-semibold text-emerald-300">
                      Definition
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {TERMINOLOGY.map((row) => (
                    <tr key={row.term} className="hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-gray-50">
                        {row.term}
                      </td>
                      <td className="px-4 py-3 text-gray-200">
                        {row.definition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 space-y-4">
              <h3 className="text-xl font-semibold mb-1">
                How trading floors work
              </h3>
              <p className="text-gray-200 text-[15px] md:text-base leading-relaxed">
                On traditional open-outcry trading floors, traders gather in
                &quot;pits&quot; organized by the specific product they are
                focused on (for example, a corn options pit).
              </p>
              <p className="text-gray-200 text-[15px] md:text-base leading-relaxed">
                Market makers stand in the pit and continuously quote bid and
                offer prices, while brokers relay client orders between the pit
                and outside participants such as hedge funds or other
                institutions.
              </p>
              <p className="text-gray-200 text-[15px] md:text-base leading-relaxed">
                A typical flow might be: an outside client requests a quote →
                the broker passes that request to traders in the pit → a trader
                agrees to a price and size and fills the order → the broker
                confirms the execution back to the client.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-1">
                How market makers make money
              </h3>
              <p className="text-gray-200 text-[15px] md:text-base leading-relaxed">
                Market makers execute large numbers of trades each day. For an
                option, they will calculate a theoretical fair value and then
                quote a bid slightly below that value and an offer slightly
                above it. When external participants trade against these quotes,
                the market maker aims to earn the &quot;edge&quot;, the
                difference between the theoretical value and the traded price.
              </p>
              <p className="text-gray-200 text-[15px] md:text-base leading-relaxed">
                Not every individual trade is profitable, but over many trades
                the goal is that the collected edge, combined with proper
                hedging of risk, results in positive expected profit.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-1">
                Where options on futures trade
              </h3>
              <p className="text-gray-200 text-[15px] md:text-base leading-relaxed">
                In the U.S., options on futures are primarily traded on CME
                Group exchanges:
              </p>
              <ul className="list-disc list-inside text-gray-200 text-[15px] md:text-base leading-relaxed space-y-1">
                <li>
                  <span className="font-semibold">COMEX</span>: Metals
                </li>
                <li>
                  <span className="font-semibold">NYMEX</span>: Energy, oil, gas
                </li>
                <li>
                  <span className="font-semibold">CBOT</span>: Grains and
                  treasuries
                </li>
                <li>
                  <span className="font-semibold">CME</span>: Currencies, S&amp;P
                  500, livestock, and more
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Finance;