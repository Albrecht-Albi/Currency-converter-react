import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    const url = "https://api.exchangerate.host/latest?base=pln";

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(url);

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