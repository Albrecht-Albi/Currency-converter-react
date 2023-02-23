import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const responseURL = "https://api.exchangerate.host/latest?base=PLN";
                const response = await axios.get(responseURL);
                setRatesData({
                    state: "succes",
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