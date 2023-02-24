import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const responseURL = "https://api.exchangerate.host/latest?base=PLN";
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(responseURL);

                setRatesData({
                    state: "success",
                    rates: response.data.rates,
                    date: response.data.date,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};