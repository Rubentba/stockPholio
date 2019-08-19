import axios from 'axios';
import APIKey from '../config'

intradayUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${userInput}&interval=5min&outputsize=compact${APIKey}`;
dailyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${userInput}&interval=5min${APIKey}`;
weeklyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${userInput}&interval=5min${APIKey}`;
monthlyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${userInput}&interval=5min${APIKey}`;
globalQuoteUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&interval=5min${APIKey}`;

export default {
    // Gets the graph with the given id
    getGraph: function (id) {
        return axios.get("/api/graph/" + id);
    },
    // Saves a graph to the database
    saveGraph: function (graphData) {
        return axios.post("/api/graph", graphData);
    },
    updateGraph: function (graphData) {
        return axios.put('api/graph', graphData)
    }
};

export default {
    // Gets the graph with the given id
    getWishlist: function (id) {
        return axios.get("/api/wishlist/" + id);
    },
    // Saves a graph to the database
    saveWishlist: function (wishlistData) {
        return axios.post("/api/wishlist", wishlistData);
    },
    updateWishlist: function (wishlistData) {
        return axios.put('api/wishlist', wishlistData)
    }
};
