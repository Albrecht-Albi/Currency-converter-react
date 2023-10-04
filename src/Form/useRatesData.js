import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    const url = "http://api.currencyapi.com/v3/latest?apikey=cur_live_cotoGa9patQrenX9NUprLYP7HxRhcHV09dUHTlHZ&currencies=&base_currency=PLN"

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                setRatesData({
                    status: "success",
                    rates: response.data.rates,
                    date: response.data.date,
                });

            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 2000);
    }, []);

    return ratesData;
};